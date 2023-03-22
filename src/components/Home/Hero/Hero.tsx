import Trans from 'next-translate/Trans'

import { SocialLinks } from '@/config'

import { TopographyLevels } from './TopographyLevels'
import { Hand } from './Hand'
import { LinkCompany } from './LinkCompany'
import { SocialLink } from './SocialLink'

export function Hero() {
  return (
    <section className="relative -mt-32 overflow-hidden pb-32 pt-[calc(7rem+2.5rem)] after:absolute after:inset-x-0 after:bottom-0 after:h-32 after:bg-gradient-to-b after:from-transparent after:to-zinc-100 dark:after:to-zinc-900 md:pt-[calc(7rem+3rem)]">
      <div className="absolute inset-0 -z-10 block text-zinc-300 dark:text-zinc-800">
        <TopographyLevels className="h-full md:h-auto md:w-full" />
      </div>

      <div className="container">
        <div className="z-50 font-serif text-3xl">
          <Trans
            i18nKey="home:heroText"
            components={{
              0: <Hand />,
              1: <strong className="font-black" />,
              2: <LinkCompany />,
              3: <br />,
            }}
          />
        </div>

        <div className="mt-8 flex gap-4">
          {SocialLinks.map((social) => (
            <>{social.name !== 'Twitter' && <SocialLink key={social.name} {...social} />}</>
          ))}
        </div>
      </div>
    </section>
  )
}
