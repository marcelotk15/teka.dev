import NextImage from 'next/future/image'

import { styled } from '@/stitches.config'

import { Link } from '../Atoms/Link'
import { ConsCard } from '../Molecules/ConsCard'
import { ProsCard } from '../Molecules/ProsCard'

const Image = styled(NextImage, {
  borderRadius: '$3',
})

const a = styled(Link, {
  '&.anchor': {
    padding: 0,

    '&::before': {
      display: 'none',
    },
  },
})

export const MDXComponents = {
  Image,
  a,
  ProsCard,
  ConsCard,
}
