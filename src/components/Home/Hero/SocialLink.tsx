import Link from 'next/link'

import { Button } from '@/components/ui/Button'
import { type Link as SocialLink } from '@/config'

export function SocialLink({ name, href, Icon }: SocialLink) {
  return (
    <Link href={href} title={name} target="_blank">
      <Button variant="outline" className="flex gap-3">
        {name} <Icon size={20} />
      </Button>
    </Link>
  )
}
