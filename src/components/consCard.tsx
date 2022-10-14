import { styled } from '@theme'

const ConsCardStyled = styled('div', {
  backgroundColor: '$red7',
  borderRadius: '$4',
  border: '1px solid $red6',
  padding: '$6',
  my: '$4',
  width: '$full',
})

const ConsCardContent = styled('div', {
  mt: '$4',
})

const ConContent = styled('div', {
  display: 'flex',
  alignItems: 'flex-start',
  mb: '$2',
  fontSize: '$0',
  gap: '$2',
})

const ConIcon = styled('div', {
  size: '$4',

  svg: {
    size: 'inherit',
    color: '$red11',
  },
})

export function ConsCard({ title, cons }: { title: string; cons: string[] }) {
  return (
    <ConsCardStyled>
      <span>{`You might not use ${title} if...`}</span>

      <ConsCardContent>
        {cons.map((con) => (
          <ConContent key={con}>
            <ConIcon>
              <svg className="h-4 w-4 text-red-500" viewBox="0 0 24 24">
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
            </ConIcon>

            <span>{con}</span>
          </ConContent>
        ))}
      </ConsCardContent>
    </ConsCardStyled>
  )
}
