const firebaseConfig = {
  apiKey: "AIzaSyDPh8pUY4Bz36bd7R3irLEfYSZCck1ja7c",
  authDomain: "disenypls-clone.firebaseapp.com",
  projectId: "disenypls-clone",
  storageBucket: "disenypls-clone.appspot.com",
  messagingSenderId: "411572160292",
  appId: "1:411572160292:web:4d5851b50564cec284d5b1",
  measurementId: "G-Z263ECVHK1",
};

const firebaseApp = firebase.intializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
