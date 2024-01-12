import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAEloDnszYiE-TwzyRweW3Sq4_s8Ocb_Qk",
    authDomain: "portfolio-835be.firebaseapp.com",
    projectId: "portfolio-835be",
    storageBucket: "portfolio-835be.appspot.com",
    messagingSenderId: "501794978518",
    appId: "1:501794978518:web:8c1b4211ec96bc57d5a777",
    measurementId: "G-F7L0RDZ4LC"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app);
