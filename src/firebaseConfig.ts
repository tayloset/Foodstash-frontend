import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDqsZjvC8NHpLj_5z4kOdYCBvPuHbztFL4",
  authDomain: "foodstash-1325f.firebaseapp.com",
  projectId: "foodstash-1325f",
  storageBucket: "foodstash-1325f.appspot.com",
  messagingSenderId: "676230186958",
  appId: "1:676230186958:web:d785376cd72915e26ecd9f",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

const authProvider = new GoogleAuthProvider();

export function signInWithGoogle(): void {
  signInWithPopup(auth, authProvider);
}
export function signOut(): void {
  auth.signOut();
}

export const storage = getStorage(app);
