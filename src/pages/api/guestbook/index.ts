import { NextApiRequest, NextApiResponse } from 'next'
import { getSession } from 'next-auth/react'

import { firestore } from '@lib/db'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    const entries = await firestore().collection('guestbook').orderBy('updated_at', 'desc').get()

    return res.json({
      entries: entries.docs.map((entry: any) => ({
        id: entry.get('id'),
        message: entry.get('message'),
        created_by: entry.get('created_by'),
        updated_at: entry.get('updated_at'),
      })),
    })
  }

  const session = await getSession({ req })

  if (!session?.user) {
    return res.status(403).send('Unauthorized')
  }

  const { email, name } = session.user

  if (req.method === 'POST') {
    const currentDate = new Date()

    const newEntry = await firestore()
      .collection('guestbook')
      .add({
        data: {
          email,
          message: (req.body.message || '').slice(0, 500),
          created_by: name,
          created_at: currentDate.toISOString(),
          updated_at: currentDate.toISOString(),
        },
      })

    return res.status(200).json({
      id: newEntry.id,
      message: (await newEntry.get()).get('message'),
      created_by: (await newEntry.get()).get('created_by'),
      updated_at: (await newEntry.get()).get('updated_at'),
    })
  }
}
