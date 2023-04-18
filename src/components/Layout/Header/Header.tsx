import Link from 'next/link'
import { useEffect, useState } from 'react'
import { cva } from 'class-variance-authority'

import { cn } from '@/lib/utils'

import { Logo } from '../../Logo'
import { ThemeSelector } from './ThemeSelector'
import { LangSelector } from './LangSelector'
import { CommandMenu } from './CommandMenu'

const headerVariants = cva(
  'sticky inset-x-0 top-0 z-40 flex w-full flex-wrap text-sm sm:flex-nowrap sm:justify-start sm:py-0 transition-all',
  {
    variants: {
      variant: {
        false: '',
        true: 'backdrop-blur-md bg-background/50 border-b border-border/70',
      },
    },
    defaultVariants: {
      variant: false,
    },
  },
)

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    if (typeof window === 'undefined') return

    window.addEventListener('scroll', () => {
      setIsScrolled(window.scrollY > 50)
    })
  }, [])

  return (
    <header className={cn(headerVariants({ variant: isScrolled }))}>
      <div className="container flex py-6">
        <nav className="flex w-full items-center">
          <div>
            <Link aria-label="teka" href="/">
              <Logo className="h-7 md:h-10" />
            </Link>
          </div>

          <div className="ml-auto flex items-center justify-center gap-8">
            <CommandMenu />

            <LangSelector />
          </div>
        </nav>
      </div>
    </header>
  )
}
