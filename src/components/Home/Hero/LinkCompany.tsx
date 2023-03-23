import { ExternalLink } from '@/components/ui/ExternalLink'

const COMPANY = {
  name: 'Codeby',
  link: 'https://codeby.global',
}

export function LinkCompany() {
  return (
    <ExternalLink
      href={COMPANY.link}
      title={COMPANY.name}
      withUnderline
      className="after:bg-blue-500 dark:after:bg-blue-600"
    >
      <strong className="font-black">{COMPANY.name}</strong> <span>💙</span>
    </ExternalLink>
  )
}
