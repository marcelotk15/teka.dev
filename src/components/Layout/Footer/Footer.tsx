import Link from 'next/link'

import { Logo } from '@/components/Logo'
import { NavigationLinks, SocialLinks } from '@/config'

import { NowPlaying } from './NowPlaying'

export function Footer() {
  return (
    <footer className="mt-8">
      <div className="container">
        <NowPlaying />

        <div className="flex flex-col justify-between gap-8 py-20 text-zinc-400 hover:text-zinc-300 dark:text-zinc-600 dark:hover:text-zinc-700 md:flex-row">
          <div>
            <Link title="teka" href="/">
              <Logo currentColor className="h-7 md:h-8" />
            </Link>
          </div>

          <div className="font-zinc-800 grid grid-cols-2 gap-10 font-semibold md:flex">
            <div className="flex flex-col gap-1">
              {NavigationLinks.map(({ name, href }, index) => (
                <Link key={`${name}_${index}`} href={href} title={name}>
                  {name}
                </Link>
              ))}
            </div>

            <div className="flex flex-col gap-1">
              {SocialLinks.map(({ href, name }, index) => (
                <Link
                  key={`${href}_${index}`}
                  href={href}
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
