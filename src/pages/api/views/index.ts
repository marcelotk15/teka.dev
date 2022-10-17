import { NextApiRequest, NextApiResponse } from 'next'

import { firestore } from '@/src/lib/db'

export default async function handler(_req: NextApiRequest, res: NextApiResponse) {
  try {
    const total = await firestore()
      .collection('views')
      .get()
      .then((snapshot) => {
        return snapshot.docs.reduce((acc, act) => acc + act.get('count'), 0)
      })

    return res.status(200).json({ total })
  } catch (e: any) {
    return res.status(500).json({ message: e.message })
  }
}
