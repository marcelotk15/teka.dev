import { styled } from '@/stitches.config'

export const Text = styled('span', {
  color: '$hiContrast',
  fontSize: '$0',
  fontFamily: '$fontDefault',

  variants: {
    size: {
      sm: {
        fontSize: '$-2',
      },

      lg: {
        fontSize: '$2',
      },
    },

    font: {
      header: {
        fontFamily: '$fontHeading',
      },

      mono: {
        fontFamily: '$fontMono',
      },
    },

    weight: {
      hairline: {
        fontWeight: '$hairline',
      },
      thin: {
        fontWeight: '$thin',
      },
      light: {
        fontWeight: '$light',
      },
      normal: {
        fontWeight: '$normal',
      },
      medium: {
        fontWeight: '$medium',
      },
      semibold: {
        fontWeight: '$semibold',
      },
      bold: {
        fontWeight: '$bold',
      },
      extrabold: {
        fontWeight: '$extrabold',
      },
      black: {
        fontWeight: '$black',
      },
    },

    color: {
      inherit: {
        color: 'inherit',
      },

      gray: {
        color: '$slate10',
      },
    },
  },
})
