import useTranslation from 'next-translate/useTranslation'
import { NextSeo } from 'next-seo'
import FadeIn from 'react-fade-in'

import { SetupData } from '@/data'
import { ExternalLink } from '@/components/ui/ExternalLink'
import { PageMainSectionTitle } from '@/components/PageMainSectionTitle'

export default function SetupPage() {
  const { t } = useTranslation()

  return (
    <>
      <NextSeo
        title={t(`setup:title`)}
        openGraph={{
          images: [
            {
              url: `https://teka.dev/api/og?title=${t('setup:title')}`,
              width: 1920,
              height: 1080,
            },
          ],
        }}
      />

      <FadeIn>
        <main>
          <article className="container">
            <div>
              <PageMainSectionTitle title={t(`setup:title`)} description={t(`setup:description`)} />

              <ul className="dark:prose-dark prose prose-lg prose-a:no-underline dark:prose-li:text-zinc-200">
                {SetupData.map(({ type, name, href }) => (
                  <li key={type} className="w-auto">
                    <span className="font-bold">{t(`setup:${type}`)}: </span>

                    <ExternalLink href={href} showIcon withUnderline className="text-gray-500">
                      {name}
                    </ExternalLink>
                  </li>
                ))}
              </ul>
            </div>
          </article>
        </main>
      </FadeIn>
    </>
  )
}
