import { Link } from 'gatsby';
import React from 'react';
import Helmet from 'react-helmet';
import styled from 'styled-components';
import { Header, Layout, Wrapper } from '../Components';
import Logo from '../Components/Logo';
import config from '../Configuration/Config';
import { media } from '../Configuration/media';
import PageProps from '../Types/PageProps';

import Body from '../Resume/Content.md';
import Aside from '../Resume/Sidebar.md';

const Sidebar = styled.div`
  flex: 0.25;
  background-color: #222222;
  padding: 30pt;
  align-items: center;
  display: flex;
  flex-direction: column;

  img:first-child {
    width: 180px;
    border-radius: 100%;
    max-height: 180px;
    object-fit: cover;
    object-position: center;
  }

  h2 {
    font-family: Trueno;
    color: #ffffff;
    font-size: 20pt;
    align-self: flex-start;
  }

  h4 {
    color: #ffffff;
    align-self: flex-start;
    padding-left: 15%;
    background-repeat: no-repeat;
    background-size: contain;
    font-family: Trueno;

    &#javatypescript {
      strong:first-child {
        color: #d9b63e;
      }
      strong:last-child {
        color: #58c0dd;
      }
      background-image: url(/assets/icons/js.png);
    }

    &#python {
      color: #d9b63e;
      background-image: url(/assets/icons/python.png);
    }

    &#ruby--rails {
      color: #dc4136;
      background-image: url(/assets/icons/ruby.png);
    }

    &#react--native {
      color: #58c0dd;
      background-image: url(/assets/icons/react.png);
    }
  }

  p {
    font-size: 10pt;
    color: #ffffff;
    font-family: Helvetica;
    text-align: justify;

    & > em,
    & > strong {
      font-weight: normal;
      font-size: 20px;
      margin-bottom: 0;
      text-align: left;
    }
  }

  hr {
    height: 5px;
    background: linear-gradient(to right, #818181, #818181 25%, #393939 25%);
    width: 100%;
  }

  p > em,
  p > strong {
    line-height: 1;
  }
`;

const Container = styled.div`
  flex-direction: row;

  @media ${media.phone} {
    flex-direction: column;
  }
  display: flex;

  box-shadow: 0 4px 120px rgba(0, 0, 0, 0.1);
  border-radius: 1rem;
  margin-top: -5rem;
  z-index: 90000;
`;

const ContentWrapper = styled.div`
  flex: 0.75;
  padding: 30pt;
`;

const ContentLogo = styled.div`
  margin-top: -10px;
  margin-bottom: 120px;
  display: flex;
  justify-content: flex-end;
  opacity: 0.5;
`;
const Content = styled.div`
  h4 {
    &::before {
      content: '📎';
      margin-right: 15px;
    }

    em {
      float: right;
      font-weight: normal;
      font-family: Helvetica;
      font-style: unset;
      opacity: 0.5;
    }
  }

  p {
    text-align: justify;
  }

  table {
    tr {
      th {
        border: none;
        height: 0px;
        display: none;
      }
      td {
        border: none;

        &:first-child {
          font-family: Helvetica;
          font-size: 12pt;
          width: 120px;
          vertical-align: top;
        }

        &:last-child {
          strong {
            display: table;
            font-size: 12pt;
            font-family: Trueno;
          }

          font-size: 11pt;
          font-family: Helvetica;
          line-height: 1.5;
        }
      }
    }
  }
`;

export default class ResumePage extends React.Component<PageProps> {
  public render() {
    return (
      <Layout>
        <Helmet title={`Contact | ${config.siteTitle}`} />
        <Header />
        <Wrapper>
          <Container>
            <Sidebar dangerouslySetInnerHTML={{ __html: Aside }} />
            <ContentWrapper>
              <ContentLogo>
                <Link to="/">
                  <Logo />
                </Link>
              </ContentLogo>
              <Content dangerouslySetInnerHTML={{ __html: Body }} />
            </ContentWrapper>
          </Container>
        </Wrapper>
      </Layout>
    );
  }
}
