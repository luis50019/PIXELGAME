import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

/*
const firebaseConfig = {
  apiKey: "AIzaSyCXmiAf6gQ5bmkf4NYSdLz6QVUieCXgcK4",
  authDomain: "pixelgame-8efc9.firebaseapp.com",
  projectId: "pixelgame-8efc9",
  storageBucket: "pixelgame-8efc9.firebasestorage.app",
  messagingSenderId: "373563367605",
  appId: "1:373563367605:web:decb7eac4fa458c58a5efc"
};
*/
//salon
const firebaseConfig = {
  apiKey: "AIzaSyC4zmNlIgMN4P4YGMzWWrclc8j7Ot04g4E",
  authDomain: "basedeprueba-49737.firebaseapp.com",
  projectId: "basedeprueba-49737",
  storageBucket: "basedeprueba-49737.firebasestorage.app",
  messagingSenderId: "199974949927",
  appId: "1:199974949927:web:2a5c914c9aea04ae116a02",
  measurementId: "G-4E16TLFBJW"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
