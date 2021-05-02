import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyDHNJLm69MlCuE7fPIXZ2DqS4hfFDp5QhU',
  authDomain: 'sql-demos-tutorial.firebaseapp.com',
  projectId: 'sql-demos-tutorial',
  storageBucket: 'sql-demos-tutorial.appspot.com',
  messagingSenderId: '928217568185',
  appId: '1:928217568185:web:7aebc1572a5935f51b1c68',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
