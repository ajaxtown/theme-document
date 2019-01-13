import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import moment from "moment";
import styled from "styled-components";
import TableOfContents from "./TableOfContents";

const ArticleHolder = styled.div`
  padding: 20px 40px;
  margin-bottom: 12px;
  display: flex;
  flex-direction: row;
`;

export default class Article extends Component {
  state = {
    headings: [],
  };

  headingsMapper = {};

  getHeadings = () => {
    const htmlString = this.props.post.body || "";
    const h = this.props.settings.themeConfig["toc-tag"];
    const regex = new RegExp("<" + h + "[^>]*>([\\s\\S]*?)</" + h + ">", "g");

    const headings = (htmlString.match(regex) || []).map((tag, index) => {
      const headingText = tag.replace(/<\/?[^>]+(>|$)/g, "");
      this.headingsMapper[headingText] = index;
      return headingText;
    });
    if (headings.length >= this.props.settings.themeConfig["min-heads"]) {
      this.setState({ headings });
    }
  };

  componentDidMount() {
    if (
      this.props.settings &&
      this.props.settings.themeConfig["toc-tag"] != "none"
    ) {
      this.getHeadings();
    }
  }

  scrollToHeading = e => {
    e.preventDefault();
    const qs = handle => document.querySelector(handle);
    const headingIndex = this.headingsMapper[e.target.innerText] + 1;
    const heading = qs("h2:nth-of-type(" + headingIndex + ")");

    window.scrollTo(0, heading.offsetTop - 80);
  };

  render() {
    const tags = [];
    const categories = [];
    const post = this.props.post;
    post.taxonomies.forEach((taxonomy, i) => {
      if (taxonomy.type === "post_category") {
        categories.push(
          <Link key={i} to={"/category/" + taxonomy.slug}>
            {taxonomy.name}
          </Link>,
        );
      } else {
        tags.push(
          <Link key={i} to={"/tag/" + taxonomy.slug}>
            #{taxonomy.name}
          </Link>,
        );
      }
    });

    return (
      <div className="content">
        <ArticleHolder>
          <article className="post">
            <div className="post-header">
              <h2 className="post-title font-alt">
                <Link to="#">{post.title}</Link>
              </h2>
              <div className="post-meta">
                {moment(new Date(post.created_at)).format("LL")}
                {tags.length > 0 && (
                  <div className="tags font-serif  p-t-30">{tags}</div>
                )}
              </div>
            </div>
            <div className="post-content fs-medium">
              <p
                dangerouslySetInnerHTML={{
                  __html: post.body,
                }}
              />
            </div>
          </article>

          <TableOfContents
            headings={this.state.headings}
            scrollToHeading={this.scrollToHeading}
          />
        </ArticleHolder>
      </div>
    );
  }
}
