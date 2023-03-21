import Link from 'next/link'

import { Logo } from '@/components/Logo'
import { navigationLinks, navigationLinksSocials } from '@/data'

import { NowPlaying } from './NowPlaying'

export function Footer() {
  return (
    <footer className="mt-8">
      <div className="container">
        <NowPlaying />

        <div className="flex flex-col justify-between gap-8 py-20 md:flex-row">
          <div>
            <Link
              title="teka"
              href="/"
              className="text-zinc-400 hover:text-zinc-300 dark:text-zinc-600 dark:hover:text-zinc-700"
            >
              <Logo currentColor className="h-7 md:h-8" />
            </Link>
          </div>

          <div className="flex gap-10">
            <div className="flex flex-col gap-1">
              {navigationLinks.map(({ to, name }, index) => (
                <Link key={`${to}_${index}`} href={to} title={name}>
                  {name}
                </Link>
              ))}
            </div>

            <div className="flex flex-col gap-1">
              {navigationLinksSocials.map(({ to, name }, index) => (
                <Link
                  key={`${to}_${index}`}
                  href={to}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={`teka's ${name} page`}
                >
                  {name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
