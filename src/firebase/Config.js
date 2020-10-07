import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const config = {
  apiKey: "AIzaSyAYxpRmNZirNG_EsQzTYFwUi4KjhVrIH2Q",
  authDomain: "vehicle-application-6b264.firebaseapp.com",
  databaseURL: "https://vehicle-application-6b264.firebaseio.com",
  projectId: "vehicle-application-6b264",
  storageBucket: "vehicle-application-6b264.appspot.com",
  messagingSenderId: "422603042964",
  appId: "1:422603042964:web:dc23e2dbe3b4f330d48481",
  measurementId: "G-E6GXR3EWR6",
};

class Firebase {
  constructor() {
    firebase.initializeApp(config);
    this.auth = firebase.auth();
    this.db = firebase.firestore();
  }

  //sign-in
  async signin(email, password) {
    const user = await firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .catch((err) => {
        console.log(err);
      });
    return user;
  }

  //log-in
  async login(email, password) {
    const user = await firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch((err) => {
        console.log(err);
      });
    console.log(user);
    return user;
  }

  //log-out
  async logout() {
    const logout = await firebase
      .auth()
      .signOut()
      .catch((err) => console.log(err));
    return logout;
  }

  async getUserState() {
    return new Promise((resolve) => {
      this.auth.onAuthStateChanged(resolve);
    });
  }
}

export default new Firebase();
