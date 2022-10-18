import { firestore } from 'firebase-admin'
import { NextApiRequest, NextApiResponse } from 'next'
import { getSession } from 'next-auth/react'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const session = await getSession({ req })

  const { id } = req.query
  const { email } = session?.user

  const entry = await firestore().collection('guestbook').where('id', '==', Number(id)).get()

  if (req.method === 'GET') {
    return res.json({
      id: entry.docs[0].get('id'),
      body: entry.docs[0].get('body'),
      created_by: entry.docs[0].get('created_by'),
      updated_at: entry.docs[0].get('updated_at'),
    })
  }

  if (!session || email !== entry.email) {
    return res.status(403).send('Unauthorized')
  }

  if (req.method === 'DELETE') {
    await firestore().collection('guestbook').doc(entry.docs[0].id).delete()

    return res.status(204).json({})
  }

  if (req.method === 'PUT') {
    const body = (req.body.body || '').slice(0, 500)

    await firestore().collection('guestbook').doc(entry.docs[0].id).set({
      body,
      updated_at: new Date().toISOString(),
    })

    return res.status(201).json({
      ...entry.docs[0],
      body,
    })
  }

  return res.send('Method not allowed.')
}
