import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/storage";

const firebaseConfig = {
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
    firebase.initializeApp(firebaseConfig);
    this.auth = firebase.auth();
    this.db = firebase.firestore();
  }

  async signin(email, password) {
    const user = await firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .catch((err) => {
        console.log(err);
        alert("Sign Up Failed");
      });
    return user;
  }

  async login(email, password) {
    const user = await firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      alert("You are now logged in")
      .catch((err) => {
        console.log(err);
        alert("Login Failed")
      });
    return user;
  }

  async logout() {
    const logout = await firebase
      .auth()
      .signOut()
      .catch((err) => {
        console.log(err)
        alert("Something went wrong")
      });
    return logout;
  }



  async getUserState() {
    return new Promise((resolve) => {
      this.auth.onAuthStateChanged(resolve);
    });
  }
}

export default new Firebase();
