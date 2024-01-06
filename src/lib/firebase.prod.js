import Firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
// import { seedDatabase } from "../seed";

const config = {
  apiKey: "AIzaSyDKhFKZTvyyDDIrby9CFmfImgr6tuxvvF8",
  authDomain: "cinesync-project-kt.firebaseapp.com",
  projectId: "cinesync-project-kt",
  storageBucket: "cinesync-project-kt.appspot.com",
  messagingSenderId: "861314990180",
  appId: "1:861314990180:web:d65662bb6b122b1c2ddf71",
};

const firebase = Firebase.initializeApp(config);

// this is to seed the data from the seed file into the firestore.
// DO NOT UNCOMMENT if you have seeded the data once, because it will automatically seed the data as firebase has been exported in the end and we consume it in src/index.js.
// seedDatabase(firebase);

export { firebase };
