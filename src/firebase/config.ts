import firebase from 'firebase/app';
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBMYtBh-4pLmH4ldS1g2ssksuBFdwaL49c",
    authDomain: "sql-demos-640f4.firebaseapp.com",
    databaseURL: "https://sql-demos-640f4-default-rtdb.firebaseio.com",
    projectId: "sql-demos-640f4",
    storageBucket: "sql-demos-640f4.appspot.com",
    messagingSenderId: "989591505859",
    appId: "1:989591505859:web:170ac8f5522f4dae24cb76",
    measurementId: "G-Z8Z4RSNE0J"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();