import { Link } from 'gatsby';
import kebabCase from 'lodash/kebabCase';
import React from 'react';
import Helmet from 'react-helmet';
import { Article, Content, Header, Layout, SectionTitle, Subline, Wrapper } from '../Components';
import Logo from '../Components/Logo';
import config from '../Configuration/Config';
import PageProps from '../Types/PageProps';

export default class Category extends React.PureComponent<PageProps> {
  public render() {
    const { posts, categoryName } = this.props.pathContext;
    const totalCount = posts ? posts.length : 0;
    const subline = `${totalCount} post${totalCount === 1 ? '' : 's'} tagged with "${categoryName}"`;

    return (
      <Layout>
        <Helmet title={`${categoryName} | ${config.siteTitle}`} />
        <Header>
          <Link to="/">
            <Logo light={false} />
          </Link>
          <SectionTitle>Category &ndash; {categoryName}</SectionTitle>
          <Subline sectionTitle light={true}>
            {subline} (See <Link to="/categories">all categories</Link>)
          </Subline>
        </Header>
        <Wrapper>
          <Content>
            {posts
              ? posts.map((post: any, index) => (
                  <Article
                    title={post.frontmatter.title}
                    date={post.frontmatter.date}
                    excerpt={post.excerpt}
                    slug={kebabCase(post.frontmatter.title)}
                    timeToRead={post.timeToRead}
                    category={post.frontmatter.category}
                    key={index}
                  />
                ))
              : null}
          </Content>
        </Wrapper>
      </Layout>
    );
  }
}
