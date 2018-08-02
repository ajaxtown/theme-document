import React from "react";
import styled from "styled-components";

const ToC = styled.h3`
    font-size: 12px;
    text-transform: uppercase;
`;

export default ({ headings, scrollToHeading }) => {
    if (headings.length === 0) return null;
    return (
        <div className="table-of-contents">
            <div className="inner-toc">
                <ToC>☶ Table of contents</ToC>
                <ul>
                    {headings.map((heading, index) => (
                        <li key={index}>
                            <a onClick={scrollToHeading} href="">
                                {heading}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};
