import { styled, keyframes } from '@theme';

import { P } from "@/components";

const heartBeat = keyframes({
  '0%': { transform: 'scale( .75 )' },
  '20%': { transform: 'scale( 1 )' },
  '40%': { transform: 'scale( .75 )' },
  '60%': { transform: 'scale( 1 )' },
  '80%': { transform: 'scale( .75 )' },
  '100%': { transform: 'scale( .75 )' }
});

const wave = keyframes({
  '0%': { transform: 'rotate( 0.0deg)' },
  '10%': { transform: 'rotate(14.0deg)' },  /* The following five values can be played with to make the waving more or less extreme */
  '20%': { transform: 'rotate(-8.0deg)' },
  '30%': { transform: 'rotate(14.0deg)' },
  '40%': { transform: 'rotate(-4.0deg)' },
  '50%': { transform: 'rotate(10.0deg)' },
  '60%': { transform: 'rotate( 0.0deg)' },  /* Reset for the last half to pause */
  '100%': { transform: 'rotate( 0.0deg)' }
})

const HomeHelloStyled = styled('section', {
  mt: '$8',
  display: 'flex',
  flexDirection: 'column',
  gap: '$5'
});

const PStyled = styled(P, {
  lineHeight: '$9',
  fontFamily: '$fontHeading',
  fontWeight: '$normal',

  '@mobile': { fontSize: '$9' },
  '@desktop': { fontSize: '$12' },

});

const Link = styled('a', {
  color: 'inherit',
  textDecoration: 'underline',
  textDecorationColor: '$slate4',
  textUnderlineOffset: '.25rem',

  '&:hover': {
    textDecorationColor: '$slate7'
  }
});

const Heart = styled('span', {
  display: 'inline-block',
  animationName: heartBeat.name,
  willChange: 'transform',
  animationTimingFunction: 'ease-in-out',
  animationIterationCount: 'infinite',
  animationDuration: '3s',
})

const Hand = styled('span', {
  display: 'inline-block',
  animationName: wave.name,
  willChange: 'transform',
  animationTimingFunction: 'ease-in-out',
  animationIterationCount: 'infinite',
  animationDuration: '3s',
})

export function HomeHello () {
  return (
    <HomeHelloStyled>
      <PStyled as="h2">
        <Hand>🖐</Hand> Hi I’m Marcelo Oliveira aka teka a <strong>front-end</strong> and <strong>back-end</strong> developer based on <strong>Brazil</strong>.
      </PStyled>

      <PStyled as="h2">
        I’m currenty a <strong>front-end dev lead</strong> at <strong><Link href='https://codeby.global' target="_blank">Codeby</Link></strong> <Heart>💙</Heart>, an amazing smart tech with focus in e-commerce.
      </PStyled>
    </HomeHelloStyled>
  );
}
