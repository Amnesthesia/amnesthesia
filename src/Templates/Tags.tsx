import { Link } from 'gatsby';
import kebabCase from 'lodash/kebabCase';
import React from 'react';
import Helmet from 'react-helmet';
import { Content, Header, Layout, SectionTitle, Title, Wrapper } from '../Components';

import config from '../Configuration/Config';
import PageProps from '../Types/PageProps';

export default class TagsTemplate extends React.PureComponent<PageProps> {
  public render() {
    const { tags } = this.props.pathContext;
    if (tags) {
      return (
        <Layout>
          <Helmet title={`Tags | ${config.siteTitle}`} />
          <Header>
            <Link to="/">{config.siteTitle}</Link>
            <SectionTitle>Tags</SectionTitle>
          </Header>
          <Wrapper>
            <Content>
              {tags.map((tag, index: number) => (
                <Title key={index}>
                  <Link to={`/tags/${kebabCase(tag)}`}>{tag}</Link>
                </Title>
              ))}
            </Content>
          </Wrapper>
        </Layout>
      );
    }
  }
}
