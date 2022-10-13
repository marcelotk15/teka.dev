import { styled } from '@/stitches.config'

export const Heading = styled('h2', {
  color: '$hiContrast',
  fontSize: '$5',
  fontFamily: '$fontHeading',
  fontWeight: '$semibold',

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
        fontFamily: '$fontDefault',
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
