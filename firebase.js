// firebase.js
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyA_IMHpZxs9dqpQOmcw-NI2qJIbmjnjvKY",
  authDomain: "tsk81d-3fcf8.firebaseapp.com",
  projectId: "tsk81d-3fcf8",
  storageBucket: "tsk81d-3fcf8.appspot.com",
  messagingSenderId: "549618562798",
  appId: "1:549618562798:web:37e90ffbd37298da1ee5ff"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore and Storage
const firestore = getFirestore(app);
const storage = getStorage(app);

export { firestore, storage };
