// src/firebase.ts
import { initializeApp, FirebaseApp } from "firebase/app";
import { getAnalytics, Analytics } from "firebase/analytics";
import { getAuth, Auth } from "firebase/auth";
import { getFirestore, Firestore } from "firebase/firestore";
import { getStorage, FirebaseStorage } from "firebase/storage";

// Firebase configuration with TypeScript interface
interface FirebaseConfig {
  apiKey: string;
  authDomain: string;
  projectId: string;
  storageBucket: string;
  messagingSenderId: string;
  appId: string;
  measurementId?: string;
}

const firebaseConfig: FirebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY || "AIzaSyBABVR2HnoPW_6C9E5s8EOyQatqc0vFhNk",
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || "e-commerce-1d5d1.firebaseapp.com",
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || "e-commerce-1d5d1",
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || "e-commerce-1d5d1.firebasestorage.app",
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || "686781846020",
  appId: import.meta.env.VITE_FIREBASE_APP_ID || "1:686781846020:web:0cf6cafe63d481b60d9b51",
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID || "G-RPL5YEJZ8H"
};

// Initialize Firebase
const app: FirebaseApp = initializeApp(firebaseConfig);

// Initialize services with TypeScript types
const analytics: Analytics = getAnalytics(app);
const auth: Auth = getAuth(app);
const db: Firestore = getFirestore(app);
const storage: FirebaseStorage = getStorage(app);

// Export services
export { app, analytics, auth, db, storage };

// Export types for easier usage in components
export type { User } from "firebase/auth";
export type { DocumentData } from "firebase/firestore";