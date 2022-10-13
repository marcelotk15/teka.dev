import { keyframes, styled } from '@/stitches.config'

import { Container } from '..'
import { TopographyLevels } from '../TopographyLevels'
import { Heading } from '../Atoms/Heading'

const wave = keyframes({
  '0%': { transform: 'rotate( 0.0deg)' },
  '10%': {
    transform: 'rotate(14.0deg)',
  } /* The following five values can be played with to make the waving more or less extreme */,
  '20%': { transform: 'rotate(-8.0deg)' },
  '30%': { transform: 'rotate(14.0deg)' },
  '40%': { transform: 'rotate(-4.0deg)' },
  '50%': { transform: 'rotate(10.0deg)' },
  '60%': { transform: 'rotate( 0.0deg)' } /* Reset for the last half to pause */,
  '100%': { transform: 'rotate( 0.0deg)' },
})

const heartBeat = keyframes({
  '0%': { transform: 'scale( .75 )' },
  '20%': { transform: 'scale( 1 )' },
  '40%': { transform: 'scale( .75 )' },
  '60%': { transform: 'scale( 1 )' },
  '80%': { transform: 'scale( .75 )' },
  '100%': { transform: 'scale( .75 )' },
})

const Wrapper = styled('section', {
  marginTop: '-104px',
  padding: 'calc(104px + $12) 0 $36',
  position: 'relative',
  overflow: 'hidden',

  '&::after': {
    content: '',
    bottom: 0,
    position: 'absolute',
    width: '100%',
    height: '30%',
    background: 'linear-gradient(transparent, var(--colors-background))',
    zIndex: '$hide',
  },
})

const Background = styled('div', {
  position: 'absolute',
  inset: 0,
  zIndex: '$hide',
  color: '$slate4',
})

const CodebyLink = styled('a', {
  color: 'inherit',
  position: 'relative',
  fontWeight: '$bold',

  '&::before': {
    content: '',
    position: 'absolute',
    width: '105%',
    bottom: 0,
    height: '1px',
    backgroundColor: '$blue9',
    transition: 'height .2s',
    borderRadius: '$1',
    zIndex: '$hide',
    padding: '$1',
    left: '50%',
    transform: 'translateX(-50%)',
    opacity: '.8',
  },

  '&:hover': {
    '&::before': {
      height: '100%',
    },
  },
})

const Hand = styled('span', {
  display: 'inline-block',
  animationName: wave.name,
  willChange: 'transform',
  animationTimingFunction: 'ease-in-out',
  animationIterationCount: 'infinite',
  animationDuration: '3s',
})

const Heart = styled('span', {
  display: 'inline-block',
  animationName: heartBeat.name,
  willChange: 'transform',
  animationTimingFunction: 'ease-in-out',
  animationIterationCount: 'infinite',
  animationDuration: '3s',
})

export function HomeHero() {
  return (
    <Wrapper>
      <Background>
        <TopographyLevels />
      </Background>

      <Container>
        <Heading size={'lg'} unbold>
          <Hand>🖐</Hand> Hi I&apos;m Marcelo Oliveira aka teka a <strong>front-end</strong> and{' '}
          <strong>back-end</strong> developer based on <strong>Brazil</strong>.
        </Heading>

        <Heading size={'lg'} unbold>
          I&apos;m currenty <strong>front-end developer</strong> at{' '}
          <strong>
            <CodebyLink href="https://codeby.global" target="_blank" rel="noreferrer">
              Codeby
            </CodebyLink>
          </strong>{' '}
          <Heart>💙</Heart>, an amazing smart tech with focus in e-commerce.
        </Heading>
      </Container>
    </Wrapper>
  )
}
