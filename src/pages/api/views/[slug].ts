import { NextApiRequest, NextApiResponse } from 'next'

import { firestore } from '@lib/db'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const slug = req.query.slug?.toString() || ''

    if (req.method === 'POST') {
      const newOrUpdatedViews = await firestore()
        .collection('views')
        .doc(slug)
        .set(
          {
            count: firestore.FieldValue.increment(1),
            slug,
          },
          { merge: true },
        )

      return res.status(200).json({
        total: newOrUpdatedViews,
      })
    }

    if (req.method === 'GET') {
      const { docs, empty } = await firestore()
        .collection('views')
        .where('slug', '==', slug)
        .limit(1)
        .get()

      if (empty) return res.status(404).json({})

      return res.status(200).json({ total: docs[0].get('count') })
    }
  } catch (e: any) {
    return res.status(500).json({ message: e.message })
  }
}
