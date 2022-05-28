import firebase from 'firebase';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyA-nZ3Q6An52G9fqic2Ifc9mpFfV4wzMrY',
  authDomain: 'todo-list-app-e05ab.firebaseapp.com',
  projectId: 'todo-list-app-e05ab',
  storageBucket: 'todo-list-app-e05ab.appspot.com',
  messagingSenderId: '779295508222',
  appId: '1:779295508222:web:cce79c30f1081b4a4b07af',
};

// init firebase
firebase.initializeApp(firebaseConfig);

// init services
export const projectFirestore = firebase.firestore();
export const projectAuth = firebase.auth();
export const projectStorage = firebase.storage();

// timestamp
export const timestamp = firebase.firestore.Timestamp;
