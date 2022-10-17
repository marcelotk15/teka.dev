import { NextApiRequest, NextApiResponse } from 'next'

import { firestore } from '@/src/lib/db'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    const entries = await firestore().collection('guestbook').orderBy('updated_at', 'desc').get()

    return res.json({
      entries: entries.docs.map((entry: any) => ({
        id: entry.get('id'),
        body: entry.get('body'),
        created_by: entry.get('created_by'),
        updated_at: entry.get('updated_at'),
      })),
    })
  }
}
