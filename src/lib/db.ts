import admin from 'firebase-admin'

const { FIREBASE_SERVICE_ACCOUNT_KEY } = process.env

if (!admin.apps.length) {
  try {
    admin.initializeApp({
      credential: admin.credential.cert(JSON.parse(FIREBASE_SERVICE_ACCOUNT_KEY as string)),
    })
  } catch (error) {
    console.log('Firebase admin initialization error', error)
  }
}

export const firestore = admin.firestore
