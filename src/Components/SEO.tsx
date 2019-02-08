/* eslint-disable react/require-default-props */
import React from 'react';
import Helmet from 'react-helmet';
import config from '../Configuration/Config';
import Post from '../Types/Post';

interface ISEO {
  postNode: Post;
  postPath: string;
  postSEO: boolean;
}

export const SEO = (props: ISEO) => {
  const { postNode, postPath, postSEO } = props;
  let title;
  let description;
  let image;
  let postURL;
  const realPrefix = config.pathPrefix === '/' ? '' : config.pathPrefix;
  if (postSEO) {
    const postMeta = postNode.frontmatter;
    title = postMeta.title;
    description = postNode.excerpt;
    image = config.siteBanner;
    postURL = config.siteUrl + realPrefix + postPath;
  } else {
    title = config.siteTitle;
    description = config.siteDescription;
    image = config.siteBanner;
  }
  image = config.siteUrl + realPrefix + image;
  const blogURL = config.siteUrl + config.pathPrefix;
  let schemaOrgJSONLD = [
    {
      '@context': 'http://schema.org',
      '@id': blogURL,
      '@type': 'WebSite',
      alternateName: config.siteTitleAlt ? config.siteTitleAlt : '',
      name: title,
      url: blogURL,
    },
  ];
  if (postSEO) {
    schemaOrgJSONLD = [
      {
        '@context': 'http://schema.org',
        // @ts-ignore
        '@id': postURL,
        '@type': 'BlogPosting',
        // @ts-ignore
        alternateName: config.siteTitleAlt ? config.siteTitleAlt : '',
        author: {
          '@type': 'Person',
          name: config.author,
        },
        dateModified: postNode.frontmatter.date,
        datePublished: postNode.frontmatter.date,
        description: config.siteDescription,
        headline: title,
        image: {
          '@type': 'ImageObject',
          url: image,
        },
        isPartOf: blogURL,
        mainEntityOfPage: {
          '@id': blogURL,
          '@type': 'WebSite',
        },
        name: title,
        publisher: {
          '@type': 'Organization',
          logo: {
            '@type': 'ImageObject',
            url: config.siteUrl + realPrefix + config.siteLogo,
          },
          name: config.author,
        },
        url: postURL as string,
      },
    ];
  }
  return (
    <Helmet>
      <html lang={config.siteLanguage} />
      <title>{config.siteTitle}</title>
      <meta name="description" content={description} />
      <meta name="image" content={image} />
      <script type="application/ld+json">{JSON.stringify(schemaOrgJSONLD)}</script>
      <meta property="og:locale" content={config.ogLanguage} />
      <meta property="og:url" content={postSEO ? postURL : blogURL} />
      {postSEO ? <meta property="og:type" content="article" /> : null}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="fb:app_id" content={config.siteFBAppID ? config.siteFBAppID : ''} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:url" content={config.siteUrl} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  );
};
