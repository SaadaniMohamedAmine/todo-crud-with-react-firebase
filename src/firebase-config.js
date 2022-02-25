import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBhnfTCpZRN6NKFJXjecF0vcPLSbhzRcfk",
  authDomain: "crud-todo-react-firebase.firebaseapp.com",
  projectId: "crud-todo-react-firebase",
  storageBucket: "crud-todo-react-firebase.appspot.com",
  messagingSenderId: "573329157448",
  appId: "1:573329157448:web:9a5fe9247816237fbb977d",
  measurementId: "G-CZKQS92Z1F",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
