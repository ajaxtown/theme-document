import React, {
    Component
} from "../../../../../../Library/Caches/typescript/2.9/node_modules/@types/react";
import ArticleListItem from "../components/Post/ArticleListItem";
import appoloClient from "shared/apolloClient";
import { EventBusInstance } from "shared/eventBus";
import config from "../../../../../../Library/Caches/typescript/2.9/node_modules/@types/config";
import Loader from "../components/Loader";
import {
    SEARCH_POSTS_BY_TAXONOMY,
    SEARCH_POSTS_FUZY
} from "shared/queries/Queries";
import Paginate from "client/helpers/Paginate";
import OhSnap from "client/helpers/OhSnap";

export default class SearchWrapper extends Component {
    state = {
        loading: true,
        posts: [],
        pageNo: {
            category: 1,
            tag: 1,
            post: 1
        },
        total: 0,
        isSearch: false
    };

    componentDidMount() {
        EventBusInstance.on("SEARCH_QUERY", data => {
            if (data.query == "") {
                this.setState({ posts: [], total: 0, isSearch: false });
                return;
            }
            this.loadData(data);
        });
        this.loadData();
        document.body.classList.add("search-page");
    }
    componentWillUnmount() {
        document.body.classList.remove("search-page");
    }

    loadData = async ({ query, type }) => {
        const term = type;
        const num = 1;
        const offset = (num - 1) * config.itemsPerPage;

        if (term === "post") {
            let result = await appoloClient().query({
                query: SEARCH_POSTS_FUZY,
                variables: {
                    query: query
                }
            });
            this.setState({
                loading: false,
                posts: [...result.data.search.posts],
                total: result.data.search.count,
                pageNo: {
                    ...this.state.pageNo,
                    post: num
                },
                isSearch: true
            });
        } else if (term === "category") {
            let result = await appoloClient().query({
                query: SEARCH_POSTS_BY_TAXONOMY,
                variables: {
                    type: "post_category",
                    slug: this.props.match.params.query,
                    postType: "post",
                    limit: config.itemsPerPage,
                    offset: offset
                }
            });
            this.setState({
                loading: false,
                posts: [
                    ...this.state.posts,
                    ...result.data.postsByTaxSlug.posts
                ],
                total: result.data.postsByTaxSlug.count,
                pageNo: {
                    ...this.state.pageNo,
                    category: num
                },
                isSearch: true
            });
        } else if (term === "tag") {
            let result = await appoloClient().query({
                query: SEARCH_POSTS_BY_TAXONOMY,
                variables: {
                    type: "post_tag",
                    query: this.props.match.params.query,
                    postType: "post",
                    limit: config.itemsPerPage,
                    offset: offset
                }
            });
            this.setState({
                loading: false,
                posts: result.data.postsByTaxSlug.posts,
                total: result.data.postsByTaxSlug.count,
                pageNo: {
                    ...this.state.pageNo,
                    tag: num
                },
                isSearch: true
            });
        }
    };

    render() {
        if (this.state.loading && this.state.isSearch) {
            return <Loader />;
        }
        const posts = this.state.posts.map((post, i) => (
            <ArticleListItem idx={i} key={i} post={post} />
        ));
        if (!this.state.isSearch) {
            return (
                <div className="post-row p-t-30 card content">
                    Start your search...
                </div>
            );
        }
        if (posts.length === 0) {
            return (
                <OhSnap message="We couldn't find anything related to your search" />
            );
        }

        const data = (
            <div className="post-row col-lg-8 col-lg-offset-2 content">
                {posts}
            </div>
        );

        return (
            <React.Fragment>
                {data}
                {config.itemsPerPage < this.state.total && (
                    <Paginate
                        count={this.state.total}
                        match={this.props.match}
                    />
                )}
            </React.Fragment>
        );
    }
}
