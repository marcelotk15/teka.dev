import { ReactNode } from 'react'
import { Slot } from '@radix-ui/react-slot'

import { styled, theme } from '@/stitches.config'

import { Box } from './Box'

const { colors } = theme

const TextInputRootWrapper = styled(Box, {
  gap: '$3',
  minHeight: '$12',
  px: '$3',
  py: '$4',
  background: '$slate4',
  width: '$full',
  color: '$slate12',
  borderRadius: '$2',
  backgroundColor: '$slate4',

  '&:focus-within': {
    boxShadow: `0 0 0 2px ${colors.background.value}, 0 0 0 5px ${colors.slate10.value}, 0 1px 1px 0 rgba(0, 0, 0, .05)`,
  },
})

interface TextInputRootProps {
  children: ReactNode
}

function TextInputRoot({ children }: TextInputRootProps) {
  return <TextInputRootWrapper items="center">{children}</TextInputRootWrapper>
}

TextInputRoot.displayName = 'TextInput.Root'

const TextInputIconSlot = styled(Slot, {
  // width: '$6',
  // height: '$6',
  color: 'inherit',
})

interface TextInputIconProps {
  children: ReactNode
}

function TextInputIcon({ children }: TextInputIconProps) {
  return <TextInputIconSlot>{children}</TextInputIconSlot>
}

TextInputIcon.displayName = 'TextInput.Icon'

const TextInputInput = styled('input', {
  background: 'transparent',
  flex: 1,
  color: '$hiContrast',
  outline: 'none',
  fontSize: '100%',

  '&::placeholder': {
    color: '$slate11',
  },
})

TextInputInput.displayName = 'TextInput.Input'

export const TextInput = {
  Root: TextInputRoot,
  Input: TextInputInput,
  Icon: TextInputIcon,
}
