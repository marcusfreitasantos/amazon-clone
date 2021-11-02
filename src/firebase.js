import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyASO9mXcKHc3DJtjSWdy2wQy1Rz9pcBTFU',
  authDomain: 'clone-a384b.firebaseapp.com',
  projectId: 'clone-a384b',
  storageBucket: 'clone-a384b.appspot.com',
  messagingSenderId: '866216482581',
  appId: '1:866216482581:web:8873004cb1a893be6ffb1c',
  measurementId: 'G-SPFNEPBJY8',
};

const app = firebase.initializeApp(firebaseConfig);

const db = app.firestore();
const auth = firebase.auth();
export { db, auth };
