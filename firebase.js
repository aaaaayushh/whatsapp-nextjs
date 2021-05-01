import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBYIs9oCUf6NAufEht1Y_DKzKuK3lJvTyo",
  authDomain: "whatsapp-44b80.firebaseapp.com",
  projectId: "whatsapp-44b80",
  storageBucket: "whatsapp-44b80.appspot.com",
  messagingSenderId: "177498957035",
  appId: "1:177498957035:web:29f4f31d655d982b418aae",
};
//for server side rendering
//if it's already initialized use the existing app
//because of fast reload
const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();
const auth = app.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
