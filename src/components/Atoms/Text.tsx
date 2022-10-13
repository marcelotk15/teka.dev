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
