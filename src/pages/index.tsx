import { graphql, Link } from 'gatsby';
import lighten from 'polished/lib/color/lighten';
import rgba from 'polished/lib/color/rgba';
import React from 'react';
import Helmet from 'react-helmet';
import styled from 'styled-components';

import { Article, Button, Layout, Wrapper } from '../Components';
import config from '../Configuration/Config';
import { media } from '../Configuration/media';
import IPageProps from '../Types/PageProps';

const Homepage: any = styled.main`
  display: flex;
  height: 100vh;
  flex-direction: column;
  @media ${media.tablet} {
    height: 100%;
    flex-direction: column;
  }
  @media ${media.phone} {
    height: 100%;
    flex-direction: column;
  }

  background: ${(props: any) =>
    props.background
      ? `linear-gradient(
      0deg,
      ${rgba(lighten(0.3, '#FFFFFF'), 0.0)} 50%, 
      ${rgba(lighten(0.3, '#FFFFFF'), 1.0)}), url(/assets/bg/5.jpg) no-repeat`
      : null};
  background-position: center 75%;
  background-size: cover;
  padding: 3rem 3rem;
  color: ${(props: any) => (props.background ? props.theme.colors.white : null)};
  h1 {
    color: ${(props: any) => (props.background ? props.theme.colors.white : null)};
  }
  @media ${media.tablet} {
    padding: 3rem 3rem;

    background: ${(props: any) =>
      props.background
        ? `linear-gradient(
        180deg,
        ${rgba(lighten(0.3, '#FFFFFF'), 0.0)} 70%, 
        ${rgba(lighten(0.3, '#FFFFFF'), 1.0)}), url(/assets/bg/5.jpg) no-repeat`
        : null};
    background-position: center 65%;
  }
  @media ${media.phone} {
    padding: 2rem 1.5rem;
    background: ${(props: any) =>
      props.background
        ? `linear-gradient(
        180deg,
        ${rgba(lighten(0.3, '#FFFFFF'), 0.0)} 70%, 
        ${rgba(lighten(0.3, '#FFFFFF'), 1.0)}), url(/assets/bg/5.jpg) no-repeat`
        : null};
    background-position: center 65%;
  }
`;

const GridRow: any = styled.div`
  flex: ${1 / 4};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const AppIcon = styled.img`
  margin: 20px auto;
  width: 100px;
  height: 100px;
  border-radius: 20%;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  background-color: #ececec;
  position: relative;
`;

const HomepageContent: any = styled.div`
  max-width: 30rem;
  text-align: ${(props: any) => (props.center ? 'center' : 'left')};
`;

const ProjectContainer = styled.div`
  flex-direction: row;
  flex-wrap: wrap;
  align-items: space-evenly;
  justify-content: space-evenly;
  display: flex;
  flex: 1;
`;

export class IndexPage extends React.Component<IPageProps> {
  public render() {
    const { data } = this.props;
    const { edges, totalCount } = data.allMarkdownRemark;

    const projects = edges.filter(({ node }) => node.frontmatter.category === 'Projects');

    const posts = edges.filter(({ node }) => node.frontmatter.category !== 'Projects');
    return (
      <Layout>
        <Wrapper fullWidth={true}>
          <Helmet title={`Homepage | ${config.siteTitle}`} />

          <Homepage background={true}>
            <GridRow style={{ justifyContent: 'flex-end', alignItems: 'flex-start' }}>
              <p style={{ textAlign: 'right', fontFamily: 'Trueno', color: '#222222', fontWeight: 'bold' }}>
                <Link to={'/posts'}>Articles ({totalCount - projects.length})</Link>
              </p>
            </GridRow>
            <GridRow>
              <HomepageContent center={true}>
                <img src={config.siteLogo} />

                <Link to="/resume">
                  <Button big>
                    <svg width="1792" height="1792" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1764 11q33 24 27 64l-256 1536q-5 29-32 45-14 8-31 8-11 0-24-5l-453-185-242 295q-18 23-49 23-13 0-22-4-19-7-30.5-23.5t-11.5-36.5v-349l864-1059-1069 925-395-162q-37-14-40-55-2-40 32-59l1664-960q15-9 32-9 20 0 36 11z" />
                    </svg>
                    About
                  </Button>
                </Link>
                <Link to="/categories/projects">
                  <Button big>
                    <svg width="1792" height="1792" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1764 11q33 24 27 64l-256 1536q-5 29-32 45-14 8-31 8-11 0-24-5l-453-185-242 295q-18 23-49 23-13 0-22-4-19-7-30.5-23.5t-11.5-36.5v-349l864-1059-1069 925-395-162q-37-14-40-55-2-40 32-59l1664-960q15-9 32-9 20 0 36 11z" />
                    </svg>
                    Projects
                  </Button>
                </Link>
              </HomepageContent>
            </GridRow>

            <GridRow />
            <GridRow>
              <HomepageContent style={{ flex: 1 }}>
                <ProjectContainer>
                  {projects.map(({ node }) => (
                    <Link to={`/posts/${node.fields.slug}`}>
                      <AppIcon src={node.frontmatter.icon} />
                    </Link>
                  ))}
                </ProjectContainer>

                {posts.map(post => (
                  <Article
                    title={post.node.frontmatter.title}
                    date={post.node.frontmatter.date}
                    excerpt={post.node.excerpt}
                    timeToRead={post.node.timeToRead}
                    slug={post.node.fields.slug}
                    category={post.node.frontmatter.category}
                    key={post.node.fields.slug}
                  />
                ))}
              </HomepageContent>
            </GridRow>
          </Homepage>
        </Wrapper>
      </Layout>
    );
  }
}
export const IndexQuery = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }, limit: 5) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            date(formatString: "DD.MM.YYYY")
            category
            icon
          }
          timeToRead
        }
      }
    }
  }
`;

export default IndexPage;
