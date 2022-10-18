import { styled } from '@theme'

export const Button = styled('button', {
  display: 'flex',
  borderRadius: '$2',
  padding: '$3',
  color: '$slate12',
  cursor: 'pointer',
  position: 'relative',
  transition: 'all .3s',

  '&:hover': {
    boxShadow: `
      -15px 0 30px -10px #ce4de9,
      0 0 30px -10px #ff4f8a,
      15px 0 30px -10px #f4aa4b
    `,

    '&::before': {
      content: '',
      position: 'absolute',
      inset: 0,
      padding: '2px',
      borderRadius: 'inherit',
      background:
        'linear-gradient(135deg, #a43dba, #ab3cb7, #bb39ad, #ce399f, #df408e, #ea4f7c, #f0636d, #f07763, #ed885e, #ea965d, #e69f5f, #e5a260)',
      WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
      WebkitMaskComposite: 'xor',
    },
  },

  variants: {
    active: {
      true: {
        '&::before': {
          content: '',
          position: 'absolute',
          inset: 0,
          padding: '2px',
          borderRadius: 'inherit',
          background:
            'linear-gradient(135deg, #ce4de9, #ff3fa8, #ff4f8a, #ff666f, #ff7e5b, #f4aa4b)',
          WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
          WebkitMaskComposite: 'xor',
        },

        '&:hover': {
          '&::before': {
            display: 'none',
          },
        },
      },
    },

    activeStyle: {
      gray: {
        '&::before': {
          background: '$slate10',
          padding: 0,
          zIndex: '$hide',
          WebkitMaskComposite: 'destination-in',
        },

        '&:hover': {
          '&::before': {
            display: 'block',
            background: '$slate9',
            WebkitMaskComposite: 'destination-in',
          },
        },
      },
    },

    border: {
      transaprent: {},

      solid: {
        '&::before': {
          content: '',
          position: 'absolute',
          inset: 0,
          padding: '2px',
          borderRadius: 'inherit',
          background:
            'linear-gradient(135deg, #ce4de9, #ff3fa8, #ff4f8a, #ff666f, #ff7e5b, #f4aa4b)',
          WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
          WebkitMaskComposite: 'xor',
        },
      },
    },

    background: {
      transparent: {
        background: 'transparent',
      },

      gradient: {
        background: 'linear-gradient(135deg, #ce4de9, #ff3fa8, #ff4f8a, #ff666f, #ff7e5b, #f4aa4b)',
      },
    },
  },

  defaultVariants: {
    border: 'transaprent',
    background: 'gradient',
  },
})
