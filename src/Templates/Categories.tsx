import { Link } from 'gatsby';
import kebabCase from 'lodash/kebabCase';
import React from 'react';
import Helmet from 'react-helmet';
import styled from 'styled-components';
import { Content, Header, Layout, SectionTitle, Title, Wrapper } from '../Components';

import config from '../Configuration/Config';
import PageProps from '../Types/PageProps';

const Logo = styled.div`
  background-image: url(${config.siteLogoLight});
  width: 400px;
  height: 100px;
  background-repeat: no-repeat;
  background-size: cover;
`;

export default class CategoriesTemplate extends React.PureComponent<PageProps> {
  public render() {
    const { categories } = this.props.pathContext;
    if (categories) {
      return (
        <Layout>
          <Helmet title={`Categories | ${config.siteTitle}`} />
          <Header>
            <Link to="/">
              <Logo />
            </Link>
            <SectionTitle>Categories</SectionTitle>
          </Header>
          <Wrapper>
            <Content>
              {categories.map((category, index: number) => (
                <Title key={index}>
                  <Link to={`/categories/${kebabCase(category)}`}>{category}</Link>
                </Title>
              ))}
            </Content>
          </Wrapper>
        </Layout>
      );
    }
  }
}
