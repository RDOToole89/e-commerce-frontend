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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`user/${userAuth.uid}`);

  const snapShot = await userRef.get();

  // check if there is a user with this id in db
  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    // if not create new user
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  console.log('SNAP', snapShot);
  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
