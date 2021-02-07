import React from "react";
// import PropTypes from "prop-types";
import styled from "styled-components/macro";

const PageContainer = styled.div`
  section {
    font-size: 14px;
    line-height: 24px;
    padding: 48px 20px;
    margin: 0 auto;
    max-width: 600px;
    color: #333;
  }

  h2 {
    font-weight: 900;
    font-size: 32px;
    line-height: 1;
    margin: 0 0 4px;
    display: inline-block;
    vertical-align: top;
  }

  p {
    margin: 1em 0;
  }

  a {
    text-decoration: none;
    color: #1ea7fd;
  }

  ul {
    padding-left: 30px;
    margin: 1em 0;
  }

  li {
    margin-bottom: 8px;
  }
`;

const Page = () => (
  <PageContainer>
    <section>
      <h2>This is a example Page</h2>
      <p>
        We recommend building UIs with a
        <a
          href="https://componentdriven.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          <strong> component-driven </strong>
        </a>
        process starting with atomic components and ending with pages.
      </p>
      <p>
        Render pages with mock data. This makes it easy to build and review page
        states without needing to navigate to them in your app. Here are some
        handy patterns for managing page data in Storybook:
      </p>
      <ul>
        <li>
          Use a higher-level connected component. Storybook helps you compose
          such data from the arguments of child component stories
        </li>
        <li>
          Assemble data in the page component from your services. You can mock
          these services out using Storybook.
        </li>
      </ul>
      <p>
        Get a guided tutorial on component-driven development at
        <a
          href="https://www.learnstorybook.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn Storybook
        </a>
        . Read more in the
        <a
          href="https://storybook.js.org/docs"
          target="_blank"
          rel="noopener noreferrer"
        >
          docs
        </a>
        .
      </p>
    </section>
  </PageContainer>
);

export default Page;
