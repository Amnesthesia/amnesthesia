export default {
  pathPrefix: '/', // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "portfolio"

  siteTitle: 'Danger Technologies', // Navigation and Site Title
  siteTitleAlt: 'Danger Technologies', // Alternative Site title for SEO
  siteUrl: 'dangertechnologies.com', // Domain of your site. No trailing slash!
  siteLanguage: 'en', // Language Tag on <html> element
  siteBanner: '/assets/banner.jpg', // Your image for og:image tag. You can find it in the /static folder
  defaultBg: '/assets/bg/5.jpg', // default post background header
  favicon: 'src/favicon.png', // Your image for favicons. You can find it in the /src folder
  siteDescription: 'A creative outlet and one-man development studio', // Your site description
  author: 'Victor Rudolfsson', // Author for schemaORGJSONLD
  siteLogo: '/assets/logo.png', // Image for schemaORGJSONLD
  siteLogoLight: '/assets/logo-light.png', // Image for schemaORGJSONLD

  userTwitter: '@fl0wsnake', // Twitter Username - Optional
  ogLanguage: 'en_US', // Facebook Language

  // Manifest and Progress color
  // See: https://developers.google.com/web/fundamentals/web-app-manifest/
  themeColor: 'rgb(220, 183, 55)',
  backgroundColor: 'rgb(61, 57, 55)',

  // Settings for typography.ts
  headerFontFamily: 'Bitter',
  bodyFontFamily: 'Open Sans',
  baseFontSize: '18px',

  // Social media
  siteFBAppID: '',

  //
  Google_Tag_Manager_ID: 'GTM-MVP42QK',
  POST_PER_PAGE: 4,
};
