import { styled } from '@theme'

const Container = styled('svg', {
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  height: 'calc(100vh + 200px)',
  opacity: 0.25,
  pointerEvents: 'none',
  transform: 'translateY(0)',
  filter: '$svgTexture',
  zIndex: '$texture',
})

export function Texture() {
  return (
    <Container id="texture">
      <filter id="noise">
        <feTurbulence
          type="fractalNoise"
          baseFrequency=".8"
          numOctaves="4"
          stitchTiles="stitch"
        ></feTurbulence>
        <feColorMatrix type="saturate" values="0"></feColorMatrix>
      </filter>
      <rect width="100%" height="100%" filter="url(#noise)"></rect>
    </Container>
  )
}
