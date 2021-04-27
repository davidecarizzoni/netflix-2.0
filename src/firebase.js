import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyD92m_1TedmFStfZoP-1i-PRsmw9uC17vs",
    authDomain: "netflix-clone-31e18.firebaseapp.com",
    projectId: "netflix-clone-31e18",
    storageBucket: "netflix-clone-31e18.appspot.com",
    messagingSenderId: "404555204545",
    appId: "1:404555204545:web:f5e2b6e696478540869140"
};

// Initialize firebase db and autentication
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;