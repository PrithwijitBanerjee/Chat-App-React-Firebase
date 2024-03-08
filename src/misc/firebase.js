// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
import { getStorage } from "firebase/storage";
// Your web app's Firebase configuration
// Sesitive information ...
const firebaseConfig = {
    apiKey: `${process.env.REACT_APP_FIREBASE_API_KEY}`,
    authDomain: `${process.env.REACT_APP_FIREBASE_AUTH_DOMAIN}`,
    projectId: `${process.env.REACT_APP_FIREBASE_PROJECT_ID}`,
    storageBucket: `${process.env.REACT_APP_FIREBASE_STORAGE_BUCKET}`,
    messagingSenderId: `${process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID}`,
    appId: `${process.env.REACT_APP_FIREBASE_APP_ID}`,
    databaseURL: `${process.env.REACT_APP_DATABASE_URL}`
};


// Initialize Firebase in your react application....
export const app = initializeApp(firebaseConfig);


// Initialize Firebase Authentication and get a reference to the service
// Auth Instance of Current Authenticated user created in firebase project
export const auth = getAuth(app);


// Initialize Realtime Database and get a reference to the service
export const database = getDatabase(app);

// Get a reference to the storage service, which is used to create references in your storage bucket
export const storage = getStorage(app);



