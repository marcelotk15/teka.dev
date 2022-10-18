import { styled } from '@/stitches.config'

export const Container = styled('div', {
  width: '60rem',
  mx: 'auto',
  px: '$4',
  maxWidth: '100%',

  '@md': {
    px: '$6',
    maxWidth: 'calc(100% - 1rem * 2)',
  },

  '@lg': {
    px: '$10',
    maxWidth: 'calc(100% - 2rem * 2)',
  },

  variants: {
    full: {
      true: {
        width: '100%',
        maxWidth: 'calc(100% - 1rem * 2)',
      },
    },
  },
})
