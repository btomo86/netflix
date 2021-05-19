import Firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import { seedDatabase } from "../seed";

const config = {
  apiKey: "AIzaSyA9aOaNRuSUxHOMBJgPGc9iR_dKrwsHsQ8",
  authDomain: "netflix-ab5cb.firebaseapp.com",
  databaseURL: "https://netflix-ab5cb.firebaseio.com",
  projectId: "netflix-ab5cb",
  storageBucket: "netflix-ab5cb.appspot.com",
  messagingSenderId: "1086117752180",
  appId: "1:1086117752180:web:a09c28a588ee55f5df5021",
};
const firebase = Firebase.initializeApp(config);

// seedDatabase(firebase);

export { firebase };
