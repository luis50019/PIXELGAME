import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCXmiAf6gQ5bmkf4NYSdLz6QVUieCXgcK4",
  authDomain: "pixelgame-8efc9.firebaseapp.com",
  projectId: "pixelgame-8efc9",
  storageBucket: "pixelgame-8efc9.firebasestorage.app",
  messagingSenderId: "373563367605",
  appId: "1:373563367605:web:decb7eac4fa458c58a5efc"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
