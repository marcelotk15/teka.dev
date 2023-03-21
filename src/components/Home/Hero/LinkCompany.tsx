import Link from 'next/link'

const COMPANY = {
  name: 'Codeby',
  link: 'https://codeby.global',
}

export function LinkCompany() {
  return (
    <Link href={COMPANY.link} title={COMPANY.name} target="_blank">
      <strong className="font-black">{COMPANY.name}</strong> <span>💙</span>
    </Link>
  )
}
