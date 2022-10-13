import { createStitches, defaultThemeMap } from '@stitches/react'

import * as Asgard from '@asgard-ds'

export const { styled, css, globalCss, keyframes, getCssText, theme, createTheme, config } =
  createStitches({
    themeMap: {
      ...defaultThemeMap,
      filter: 'filters',
    },
    theme: {
      colors: {
        ...Asgard.colorBaseTokens,
        ...Asgard.colorsTokens,
        ...Asgard.colorsTokensLightTheme,
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
        svgTexture: 'contrast(120%) brightness(120%)',
      },
    },
    media: { ...Asgard.mediaTokens },
    utils: { ...Asgard.utilsFunctions },
  })

export const darkTheme = createTheme('dark-theme', {
  colors: {
    ...Asgard.colorBaseDarkTokens,
    ...Asgard.colorsTokensDarkTheme,
  },

  filters: {
    svgTexture: 'contrast(120%) brightness(60%)',
  },
})

globalCss({
  '*, ::before, ::after': {
    boxSizing: 'border-box',
    border: '0 solid #eaeaea',
  },

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

  html: {
    scrollBehavior: 'smooth',
  },

  body: {
    color: '$text',
    backgroundColor: '$background',
    padding: '0',
    margin: '0',
    overflowX: 'hidden',
    fontFamily: '$fontDefault',
  },

  'h1, h2, h3, h4, h5, h6': {
    color: '$text',
    m: '$0',
  },

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

  table: {
    display: 'block',
    maxWidth: 'fit-content',
    overflowX: 'auto',
    whiteSpace: 'nowrap',
  },

  'pre, code': {
    margin: 0,
    fontFamily: '$fontMono',
  },
})()
