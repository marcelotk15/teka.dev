import Link from 'next/link'

import { Logo } from '../../Logo'
import { ThemeSelector } from './ThemeSelector'
import { LangSelector } from './LangSelector'

export function Header() {
  return (
    <header className="sticky z-40">
      <div className="container flex py-6">
        <nav className="flex w-full items-center">
          <div>
            <Link aria-label="teka" href="/">
              <Logo className="h-6 md:h-10" />
            </Link>
          </div>

          <div className="ml-auto flex gap-3">
            <LangSelector />
            <ThemeSelector />
          </div>
        </nav>
      </div>
    </header>
  )
}
