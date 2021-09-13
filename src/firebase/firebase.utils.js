import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
    apiKey: "AIzaSyA4P-JuDdZoKj2nL3cVSDbauhChdhtA-uA",
    authDomain: "crwn-db-63b78.firebaseapp.com",
    projectId: "crwn-db-63b78",
    storageBucket: "crwn-db-63b78.appspot.com",
    messagingSenderId: "431769176716",
    appId: "1:431769176716:web:8baa17a45e08e2b03009a9",
    measurementId: "G-NNN89E4811"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;