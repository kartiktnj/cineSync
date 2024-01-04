import Firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const config = {
  apiKey: "AIzaSyDKhFKZTvyyDDIrby9CFmfImgr6tuxvvF8",
  authDomain: "cinesync-project-kt.firebaseapp.com",
  projectId: "cinesync-project-kt",
  storageBucket: "cinesync-project-kt.appspot.com",
  messagingSenderId: "861314990180",
  appId: "1:861314990180:web:d65662bb6b122b1c2ddf71",
};

const firebase = Firebase.initializeApp(config);

export { firebase };
