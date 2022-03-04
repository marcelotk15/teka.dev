import { createStitches, defaultThemeMap } from "@stitches/react";

import * as Asgard from "@asgard-ds";

export const {
  styled,
  getCssText,
  createTheme,
  globalCss,
  keyframes
} = createStitches({
  themeMap: {
    ...defaultThemeMap,
    filter: "filters"
  },
  theme: {
    colors: {
      ...Asgard.colorBaseTokens,
      ...Asgard.colorsTokens,
      ...Asgard.colorsTokensLightTheme
    },
    space: { ...Asgard.spaceTokens },
    sizes: { ...Asgard.sizesTokens },
    radii: { ...Asgard.radiiTokens },
    zIndices: { ...Asgard.zIndicesTokens },
    fonts: { ...Asgard.fontsTokens },
    fontSizes: { ...Asgard.fontSizesTokens },
    fontWeights: { ...Asgard.fontWeightsTokens },
    lineHeights: { ...Asgard.lineHeightsTokens },
    letterSpacings: { ...Asgard.letterSpacingsTokens },
    filters: {
      svgTexture: 'contrast(120%) brightness(120%)'
    }
  },
  media: { ...Asgard.mediaTokens },
  utils: { ...Asgard.utilsFunctions }
});

export const darkTheme = createTheme('dark-theme', { 
  colors: {
    ...Asgard.colorBaseDarkTokens,
    ...Asgard.colorsTokensDarkTheme
  },

  filters: {
    svgTexture: 'contrast(120%) brightness(60%)'
  }
});

globalCss({
  '::selection': {
    backgroundColor: '$plum6',
  },

  ':-moz-focusring': {
    '@desktop': {
      outline: 'auto',
    },
  },

  ':focus': {
    '@desktop': {
      outline: '$focusOutline solid 2px',
      outlineOffset: '2px',
    },
  },

  body: {
    color: '$text',
    backgroundColor: '$background',
    padding: '0',
    margin: '0',
    overflowX: 'hidden',
    fontFamily: '$fontDefault',
  },

  h1: { color: '$heading', m: '$0' },

  h2: { color: '$heading', m: '$0' },

  h3: { color: '$heading', m: '$0' },

  h4: { color: '$brand12', m: '$0' },

  h5: { color: '$brand12', m: '$0' },

  h6: { color: '$brand12', m: '$0' },

  p: {
    fontFamily: '$fontText',
    color: '$text',
  },

  a: {
    textDecoration: 'none',
  },

  hr: {
    display: 'block',
    height: '1px',
    border: '0',
    backgroundColor: '$background10',
    marginTop: '2rem',
    marginBottom: '2rem',
  },

  button: { border: '$none' },

  img: { userSelect: 'none' },

  svg: { display: 'block' },

  'pre, code': {
    margin: 0,
    fontFamily: '$fontMono',
  },
})();
