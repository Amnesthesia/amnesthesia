import Typography from 'typography';
import config from './Config';

const typography = new Typography({
  baseFontSize: config.baseFontSize,
  baseLineHeight: 1.66,
  bodyFontFamily: [config.bodyFontFamily, 'sans-serif'],
  googleFonts: [
    {
      name: config.headerFontFamily,
      styles: ['700'],
    },
    {
      name: config.bodyFontFamily,
      styles: ['400'],
    },
  ],
  headerFontFamily: [config.headerFontFamily, 'sans-serif'],
  headerWeight: 700,
  scaleRatio: 3.157,
});

// Hot reload typography in development.
if (process.env.NODE_ENV !== 'production') {
  typography.injectStyles();
}

export default typography;
