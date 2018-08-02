import React, { Component } from "react";
import PropTypes from "prop-types";
import Article from "../components/Post/Article";
import Loader from "../components/Loader";
import SEO from "client/helpers/SEO";
import OhSnap from "client/helpers/OhSnap";
import SinglePageData from "shared/data-connectors/SinglePageData";

class SinglePage extends Component {
    render() {
        if (this.props.loading) {
            return <Loader />;
        }
        if (this.props.page === null || !this.props.page.ok) {
            return (
                <OhSnap message="Sorry, this page does not exist or might be restricted." />
            );
        }
        const post = this.props.page.post;
        const tags = [];
        const categories = [];
        post.taxonomies.forEach(taxonomy => {
            if (taxonomy.type === "post_category") {
                categories.push(taxonomy.name);
            } else {
                tags.push(taxonomy.name);
            }
        });
        return (
            <div>
                <SEO
                    schema="BlogPosting"
                    title={post.title}
                    description={post.excerpt}
                    path={this.props.location.pathname}
                    contentType="article"
                    category={categories.join(",")}
                    tags={tags}
                    image={post.cover_image}
                    settings={this.props.settings || {}}
                />
                <Article post={post} settings={this.props.settings} />
            </div>
        );
    }
}

SinglePage.propTypes = {
    page: PropTypes.object,
    loading: PropTypes.bool,
    location: PropTypes.object,
    settings: PropTypes.object
};

export default SinglePageData(SinglePage);
