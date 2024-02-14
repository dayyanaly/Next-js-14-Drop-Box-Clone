import { getApp, getApps, initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
const firebaseConfig = {
    apiKey: "AIzaSyC1C8gVY7PQS2e399W54oKpDUGq4g2VKj8",
    authDomain: "dropbox-clone-1894f.firebaseapp.com",
    projectId: "dropbox-clone-1894f",
    storageBucket: "dropbox-clone-1894f.appspot.com",
    messagingSenderId: "795237932398",
    appId: "1:795237932398:web:37b7022b78762ebeba757f"
  };
  const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage }