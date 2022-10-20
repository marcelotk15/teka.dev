import { Suspense } from 'react'
import useTranslation from 'next-translate/useTranslation'

import { Container } from '@components/Atoms/Container'
import { Text } from '@components/Atoms/Text'
import { Section } from '@components/Molecules/Sections'
import { SubSection } from '@components/Molecules/SubSection'
import { TopTracks } from '@components/Organisms/TopTracks'
import { MainLayout } from '@layouts/MainLayout'

export default function DashboardPage() {
  const { t } = useTranslation()

  return (
    <MainLayout
      title="Dashboard - teka • Marcelo Oliveira"
      description={t('dashboard:metaDescription')}
    >
      <Container>
        <Section title={'Dashboard'}>
          <Suspense fallback={false}>
            <SubSection title="Top Tracks">
              <Text>{t('dashboard:topTracksDescription')}</Text>

              <TopTracks />
            </SubSection>
          </Suspense>
        </Section>
      </Container>
    </MainLayout>
  )
}
