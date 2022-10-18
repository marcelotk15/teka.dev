import { InferGetStaticPropsType } from 'next'

import { Container } from '@components/Atoms/Container'
import { Text } from '@components/Atoms/Text'
import { Guestbook } from '@components/Molecules/Guestbook'
import { Section } from '@components/Molecules/Sections'
import { MainLayout } from '@layouts/MainLayout'
import { firestore } from '@lib/db'

export default function GuestbookPage({
  fallbackData,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <MainLayout
      title="Guestbook | teka - Marcelo Oliveira"
      description="Sign my digital guestbook and share some wisdom."
    >
      <Container>
        <Section title="Guestbook">
          <Text>
            Leave a comment below. It could be anything – appreciation, information, wisdom, or even
            humor. Surprise me!
          </Text>

          <Guestbook fallbackData={fallbackData} />
        </Section>
      </Container>
    </MainLayout>
  )
}

export async function getStaticProps() {
  const entries = await firestore().collection('guestbook').orderBy('updated_at', 'desc').get()

  const fallbackData = entries.docs.map((entry) => ({
    id: entry.id.toString(),
    body: entry.get('body'),
    created_by: entry.get('created_by'),
    updated_at: entry.get('updated_at'),
  }))

  return {
    props: {
      fallbackData,
    },
    revalidate: 60,
  }
}
