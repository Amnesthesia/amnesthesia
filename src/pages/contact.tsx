import { Link } from 'gatsby';
import React from 'react';
import Helmet from 'react-helmet';
import { Button, Content, Header, Layout, SectionTitle, Wrapper } from '../Components';

import Logo from '../Components/Logo';
import config from '../Configuration/Config';
import PageProps from '../Types/PageProps';

export default class ContactPage extends React.Component<PageProps> {
  public render() {
    return (
      <Layout>
        <Helmet title={`Contact | ${config.siteTitle}`} />
        <Header>
          <Link to="/">
            <Logo />
          </Link>
          <SectionTitle uppercase={true}>Contact</SectionTitle>
        </Header>
        <Wrapper>
          <Content />
        </Wrapper>
      </Layout>
    );
  }
}
