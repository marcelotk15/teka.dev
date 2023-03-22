import Link from 'next/link'
import { useEffect, useState } from 'react'
import { cva } from 'class-variance-authority'

import { cn } from '@/lib/utils'

import { Logo } from '../../Logo'
import { ThemeSelector } from './ThemeSelector'
import { LangSelector } from './LangSelector'

const headerVariants = cva(
  'sticky inset-x-0 top-0 z-40 flex w-full flex-wrap text-sm sm:flex-nowrap sm:justify-start sm:py-0 transition-all',
  {
    variants: {
      variant: {
        false: '',
        true: 'backdrop-blur bg-zinc-900/50',
      },
    },
    defaultVariants: {
      variant: false,
    },
  },
)

const wrapperVariations = cva('container flex transition-[padding]', {
  variants: {
    variant: {
      false: 'py-6',
      true: 'py-4',
    },
  },
  defaultVariants: {
    variant: false,
  },
})

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
      <div className={cn(wrapperVariations({ variant: isScrolled }))}>
        <nav className="flex w-full items-center">
          <div>
            <Link aria-label="teka" href="/">
              <Logo className="h-7 md:h-10" />
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
