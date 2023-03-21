export function Texture() {
  return (
    <>
      <svg
        className="pointer-events-none fixed top-0 left-0 z-50 h-screen w-screen opacity-40 brightness-75 contrast-50 dark:opacity-20 dark:brightness-100 dark:contrast-100"
        id="texture"
      >
        <filter id="noise">
          <feTurbulence
            id="noise"
            type="fractalNoise"
            baseFrequency=".8"
            numOctaves="4"
            stitchTiles="stitch"
          />
        </filter>

        <rect width="100%" height="100%" filter={`url(#noise)`} />
      </svg>
    </>
  )
}
