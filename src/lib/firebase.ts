import { initializeApp } from "firebase/app";
import { doc, getFirestore, onSnapshot } from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { derived, writable, type Readable } from "svelte/store";
import type { User } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBOXeApxXCcV6R46PW2tjefK1jcZSbRpdE",
  authDomain: "web-profile-svkit.firebaseapp.com",
  projectId: "web-profile-svkit",
  storageBucket: "web-profile-svkit.appspot.com",
  messagingSenderId: "59611371453",
  appId: "1:59611371453:web:90d98f5ce396cc22e3e4d4",
  measurementId: "G-GM87Q6FQEN"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore();
export const auth = getAuth();
export const storage = getStorage();

function userStore() {
  let unsubscribe: () => void;

  if (!auth || !globalThis.window) {
    console.warn("Auth is not initialized or not in browser");
    const { subscribe } = writable<User | null>(null);
    return {
      subscribe,
    };
  }

  const { subscribe } = writable(auth?.currentUser ?? null, (set) => {
    unsubscribe = onAuthStateChanged(auth, (user) => {
      set(user);
    });
    return () => unsubscribe();
  });
  return {
    subscribe,
  };
}

export const user = userStore();

export function docStore<T>(path: string) {
  let unsubscribe: () => void;
  const docRef = doc(db, path);
  const { subscribe } = writable<T | null>(null, (set) => {
    unsubscribe = onSnapshot(docRef, (snapshot) => {
      set((snapshot.data() as T) ?? null);
    });
    return () => unsubscribe
  });
  return {
    subscribe,
    ref: docRef,
    id: docRef.id
  }
}

interface UserData {
  username: string,
  bio: string,
  photoUrl: string,
  links: any[]
}

export const userData: Readable<UserData | null> = derived(user, ($user, set) => {
  if ($user) {
    // console.log("USR",$user)
    return docStore<UserData>(`users/${$user.uid}`).subscribe(data => set(data))
  }
  else {
    set(null)
  }
})
