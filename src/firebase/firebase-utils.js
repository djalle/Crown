import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBANT-MrEr3NhIJCqXGSH2KJclgg0gyOsU",
    authDomain: "crown-1.firebaseapp.com",
    databaseURL: "https://crown-1.firebaseio.com",
    projectId: "crown-1",
    storageBucket: "crown-1.appspot.com",
    messagingSenderId: "441750833429",
    appId: "1:441750833429:web:301ecf7f00090f3d33411c",
    measurementId: "G-GM8X48RS2W"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({promp: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;
  
