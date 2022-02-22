import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCbMUXim6Z-ODpnAory4PGD541Ykq5QHbg",
  authDomain: "crud-react-firebase-4cf59.firebaseapp.com",
  projectId: "crud-react-firebase-4cf59",
  storageBucket: "crud-react-firebase-4cf59.appspot.com",
  messagingSenderId: "230743172070",
  appId: "1:230743172070:web:f6efd483fc100fa84fec27",
  measurementId: "G-87GWS66Q2V",
};

// Initialize Firebase application
const app = initializeApp(firebaseConfig);

// Initialize Firebase firestore database
const db = getFirestore(app);

export default db;
