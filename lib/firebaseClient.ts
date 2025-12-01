import { initializeApp, getApps } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCHf_FbROtggTw9e1KiW1djreM6lMTgUQU",
  authDomain: "rupesafe.firebaseapp.com",
  projectId: "rupesafe",
  storageBucket: "rupesafe.firebasestorage.app",
  messagingSenderId: "1072783609808",
  appId: "1:1072783609808:web:55760966f85dc7e95ff3d5",
  measurementId: "G-B4F2YVXRKT"
};

export function getFirebaseClient() {
  if (!getApps().length) {
    initializeApp(firebaseConfig);
  }
  return getAuth();
}

export async function signInWithGoogle() {
  const auth = getFirebaseClient();
  const provider = new GoogleAuthProvider();
  const result = await signInWithPopup(auth, provider);
  const idToken = await result.user.getIdToken();
  return idToken;
}