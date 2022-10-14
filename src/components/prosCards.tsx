import { styled } from '@theme'

const ProsCardStyled = styled('div', {
  backgroundColor: '$green7',
  borderRadius: '$4',
  border: '1px solid $green6',
  padding: '$6',
  my: '$4',
  width: '$full',
})

const ProsCardContent = styled('div', {
  mt: '$4',
})

const ProContent = styled('div', {
  display: 'flex',
  alignItems: 'flex-start',
  mb: '$2',
  fontSize: '$0',
  gap: '$2',
})

const ProIcon = styled('div', {
  size: '$4',

  svg: {
    size: 'inherit',
    color: '$green11',
  },
})

export function ProsCard({ title, pros }: { title: string; pros: string[] }) {
  return (
    <ProsCardStyled>
      <span>{`You might use ${title} if...`}</span>

      <ProsCardContent>
        {pros.map((pro) => (
          <ProContent key={pro}>
            <ProIcon>
              <svg viewBox="0 0 24 24">
                <g
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                  <path d="M22 4L12 14.01l-3-3" />
                </g>
              </svg>
            </ProIcon>

            <span>{pro}</span>
          </ProContent>
        ))}
      </ProsCardContent>
    </ProsCardStyled>
  )
}
