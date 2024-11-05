
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCTtPuc0gjTtIsI4dUcQ2BCYBivKUP8D60",
    authDomain: "backend-manu.firebaseapp.com",
    projectId: "backend-manu",
    storageBucket: "backend-manu.firebasestorage.app",
    messagingSenderId: "897651395299",
    appId: "1:897651395299:web:ce40ba3c7e3fc95f4453d6"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };