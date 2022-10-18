import { Box } from '@components/Atoms/Box'
import { Container } from '@components/Atoms/Container'
import { Heading } from '@components/Atoms/Heading'
import { Link } from '@components/Atoms/Link'
import { TopographyLevels } from '@components/Atoms/TopographyLevels'
import { keyframes, styled } from '@theme'

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

const Wrapper = styled(Box, {
  marginTop: '-104px',
  padding: 'calc(104px + $10) 0 $14',
  position: 'relative',
  overflow: 'hidden',

  '@lg': {
    padding: 'calc(104px + $12) 0 $36',
  },

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

const Background = styled(Box, {
  position: 'absolute',
  inset: '0',
  zIndex: '$hide',
  color: '$slate4',

  svg: {
    height: '$full',

    '@lg': {
      height: 'auto',
      width: '$full',
    },
  },
})

const CodebyLink = styled(Link, {
  '::before': {
    backgroundColor: '$blue9',
    padding: '$1',
  },

  ':hover': {
    color: '$hiContrast',
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
    <Wrapper block as="section">
      <Background block>
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
            <CodebyLink href="https://codeby.global" color="inherit" title="Codeby">
              Codeby
            </CodebyLink>
          </strong>{' '}
          <Heart>💙</Heart>, an amazing smart tech with focus in e-commerce.
        </Heading>
      </Container>
    </Wrapper>
  )
}
