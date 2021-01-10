import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyCofME7yzLkNEhy2ilFR888SHitkQbRlRo',
  authDomain: 'e-commerce-db-9130d.firebaseapp.com',
  projectId: 'e-commerce-db-9130d',
  storageBucket: 'e-commerce-db-9130d.appspot.com',
  messagingSenderId: '1098904684257',
  appId: '1:1098904684257:web:0da6a56b756732fdf719a0',
  measurementId: 'G-1M5EWVHK9R',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
