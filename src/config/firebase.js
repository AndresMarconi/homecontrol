import firebase from "firebase/app"
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyCg6LkOhYttgGAxLbJsVZ1Q2lt30Oj_KK8",
    authDomain: "homecontrol-ar.firebaseapp.com",
    projectId: "homecontrol-ar",
    storageBucket: "homecontrol-ar.appspot.com",
    messagingSenderId: "758620182203",
    appId: "1:758620182203:web:1f1c5887a3e5fe65277b9e",
    measurementId: "G-J7YK05PKZ2"
};

firebase.initializeApp(firebaseConfig);

export default firebase;