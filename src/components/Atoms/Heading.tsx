import { styled } from '@theme'

export const Heading = styled('h2', {
  color: '$hiContrast',
  fontSize: '$5',
  fontFamily: '$fontHeading',
  fontWeight: '$black',

  variants: {
    size: {
      sm: {
        fontSize: '$3',
      },

      lg: {
        fontSize: '$10',
      },
    },

    font: {
      sans: {
        fontFamily: '$sans',
      },

      mono: {
        fontFamily: '$fontMono',
      },
    },

    unbold: {
      true: {
        fontWeight: '$normal',
      },
    },
  },
})
