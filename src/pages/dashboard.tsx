import { Container } from '@components/Atoms/Container'
import { Text } from '@components/Atoms/Text'
import { Section } from '@components/Molecules/Sections'
import { SubSection } from '@components/Molecules/SubSection'
import { TopTracks } from '@components/Organisms/TopTracks'
import { MainLayout } from '@layouts/MainLayout'

export default function DashboardPage() {
  return (
    <MainLayout title="Dashboard | teka - Marcelo Oliveira">
      <Container>
        <Section title={'Dashboard'}>
          <SubSection title="Top Tracks">
            <Text>
              Curious what I&apos;m currently jamming to? Here&apos;s my top tracks on Spotify
              updated daily.
            </Text>

            <TopTracks />
          </SubSection>
        </Section>
      </Container>
    </MainLayout>
  )
}
