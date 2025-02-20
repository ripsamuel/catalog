import { initializeApp } from 'firebase/app';
import { getFirestore, 
  // connectFirestoreEmulator 
} from 'firebase/firestore';
import { getAnalytics } from "firebase/analytics";
import { getFunctions, 
  // connectFunctionsEmulator 
} from 'firebase/functions';
import { getAuth, 
  // connectAuthEmulator 
} from 'firebase/auth';
import { getStorage } from 'firebase/storage';

// const baseUrlEmulators = "http://127.0.0.1:4000";
const firebaseConfig = {
    apiKey: "AIzaSyCxSzz8yW_6o4rCjUVxTPpUKr1py-lxgCs",
    authDomain: "portfolio-bedf9.firebaseapp.com",
    projectId: "portfolio-bedf9",
    storageBucket: "portfolio-bedf9.firebasestorage.app",
    messagingSenderId: "196552046695",
    appId: "1:196552046695:web:22605a326bc023eba67cc2",
    measurementId: "G-S67HBSL9DD"
  };

const app = initializeApp(firebaseConfig, "portfolio");
export const db = getFirestore(app);
export const analytics = getAnalytics(app);
export const functions = getFunctions(app);
export const auth = getAuth(app);
export const storage = getStorage(app);
