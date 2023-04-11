import Link from 'next/link'

import { NavigationMenu, navigationMenuTriggerStyle } from '@/components/ui/NavigationMenu'
import { cn } from '@/lib/utils'

export function MainNav() {
  return (
    <div className="ml-8">
      <NavigationMenu.Root>
        <NavigationMenu.List>
          <NavigationMenu.Item className="hidden lg:flex">
            <Link href="/blog" legacyBehavior passHref>
              <NavigationMenu.Link className={cn(navigationMenuTriggerStyle(), 'h-9')}>
                Blog
              </NavigationMenu.Link>
            </Link>
          </NavigationMenu.Item>

          <NavigationMenu.Item className="hidden lg:flex">
            <Link href="/setup" legacyBehavior passHref>
              <NavigationMenu.Link className={cn(navigationMenuTriggerStyle(), 'h-9')}>
                Setup
              </NavigationMenu.Link>
            </Link>
          </NavigationMenu.Item>
        </NavigationMenu.List>
      </NavigationMenu.Root>
    </div>
  )
}
