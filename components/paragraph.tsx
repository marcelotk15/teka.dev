import { styled } from '@theme';

export const P = styled('p', {
  color: '$text',
  fontSize: '$0',

  variants: {
    size: {
      '-2': { fontSize: '$-1' },
      '-1': { fontSize: '$-1' },
      '0': { fontSize: '$0' },
      '1': { fontSize: '$1' },
      '2': { fontSize: '$2' },
      '3': { fontSize: '$3' },
      '4': { fontSize: '$4' },
      '5': { fontSize: '$5' },
      '6': { fontSize: '$6' },
      '7': { fontSize: '$7' },
      '8': { fontSize: '$8' },
      '9': { fontSize: '$9' },
      '10': { fontSize: '$10' },
      '11': { fontSize: '$11' },
      '12': { fontSize: '$12' },
      '13': { fontSize: '$13' },
    },

    weight: {
      hairline: { fontWeight: '$hairline' },
      thin: { fontWeight: '$thin' },
      light: { fontWeight: '$light' },
      normal: { fontWeight: '$normal' },
      medium: { fontWeight: '$medium' },
      semibold: { fontWeight: '$semibold' },
      bold: { fontWeight: '$bold' },
      extrabold: { fontWeight: '$extrabold' },
      black: { fontWeight: '$black' },
    },

    font: {
      default: { fontFamily: '$fontDefault' },
      heading: { fontFamily: '$fontHeading' },
      mono: { fontFamily: '$fontMono' }
    },

    margin: {
      none: { margin: '$0' },
    },

    align: {
      left: { textAlign: 'left' },
      right: { textAlign: 'right' },
      center: { textAlign: 'center' },
      justify: { textAlign: 'justify' },
    }
  }
});
