import { Link } from 'gatsby';
import * as React from 'react';
import Helmet from 'react-helmet';
import { Content, Header, Layout, Wrapper } from '../Components';
import config from '../Configuration/Config';

export default class NotFoundPage extends React.Component<any> {
  public render() {
    return (
      <Layout>
        <Wrapper>
          <Helmet title={`404 not found | ${config.siteTitle}`} />
          <Header>
            <Link to="/">{config.siteTitle}</Link>
          </Header>
          <Content>
            <h1>NOT FOUND</h1>
            <p>Hello darkness my old friemb..... I've come to talk with you again ....</p>
          </Content>
        </Wrapper>
      </Layout>
    );
  }
}
