import { graphql, StaticQuery } from 'gatsby';
// @ts-ignore
import PageTransition from 'gatsby-plugin-page-transitions';
import split from 'lodash/split';
import React from 'react';
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';
import { media } from '../Configuration/media';
import theme from '../Configuration/Theme';
import './layout.scss';

const GlobalStyle = createGlobalStyle`
  ::selection {
    color: ${theme.colors.bg};
    background: ${theme.colors.primary};
  }
  body {
    background: ${theme.colors.bg};
    color: ${theme.colors.grey.default};
    @media ${media.phone} {
      font-size: 14px;
    }
  }
  a {
    color: ${theme.colors.grey.dark};
    text-decoration: none;
    transition: all ${theme.transitions.normal};
  }
  a:hover {
    color: ${theme.colors.primary};
  }
  h1, h2, h3, h4 {
    color: ${theme.colors.grey.dark};
  }
  blockquote {
    font-style: italic;
    position: relative;
  }

  blockquote:before {
    content: "";
    position: absolute;
    background: ${theme.colors.primary};
    height: 100%;
    width: 6px;
    margin-left: -1.6rem;
  }
  label {
    margin-bottom: .5rem;
    color: ${theme.colors.grey.dark};
  }
  input, textarea {
    border-radius: .5rem;
    border: none;
    background: rgba(0, 0, 0, 0.05);
    padding: .25rem 1rem;
    &:focus {
      outline: none;
    }
  }
  .textRight {
    text-align:right;
  }
`;

const Footer = styled.footer`
  text-align: center;
  padding: 3rem 0;
  span {
    font-size: 0.75rem;
  }
`;

const Copyleft = styled.span`
  display: inline-block;
  transform: rotate(180deg);
`;

export class Layout extends React.PureComponent<{}> {
  public render() {
    const { children } = this.props;

    return (
      <PageTransition transitionTime={500}>
        <StaticQuery
          query={graphql`
            query LayoutQuery {
              site {
                buildTime(formatString: "DD.MM.YYYY")
              }
            }
          `}
          render={data => (
            <ThemeProvider theme={theme}>
              <React.Fragment>
                <GlobalStyle />
                {children}
                <Footer>
                  <Copyleft>&copy;</Copyleft> {split(data.site.buildTime, '.')[2]} by Victor Rudolfsson. All rights reversed. <br />
                  <span>Last build: {data.site.buildTime}</span>
                </Footer>
              </React.Fragment>
            </ThemeProvider>
          )}
        />
      </PageTransition>
    );
  }
}
