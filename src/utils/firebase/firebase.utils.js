import { initializeApp } from "firebase/app";

import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDy0i20mCHAspW9bjU7BKGSrTbCLLS8R3U",
  authDomain: "crwn-clothing-db-347c9.firebaseapp.com",
  projectId: "crwn-clothing-db-347c9",
  storageBucket: "crwn-clothing-db-347c9.appspot.com",
  messagingSenderId: "1080977180881",
  appId: "1:1080977180881:web:5ada96fb3bbe072dcaddf0",
};

const app = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, "users", userAuth.uid);

  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date()

    try{
        await setDoc(userDocRef, {
            displayName,
            email,
            createdAt
        })
    }catch(error){
        console.log('Error creating user', error.message)
    }
  }

  return userDocRef
};
