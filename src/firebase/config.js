import firebase from "firebase/app"
import "firebase/firestore"
import "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyDqmL0TuM1TNwIW3Fw540XIrE3RkqUKO7k",
    authDomain: "vue-blog-system-main.firebaseapp.com",
    projectId: "vue-blog-system-main",
    storageBucket: "vue-blog-system-main.appspot.com",
    messagingSenderId: "423364489492",
    appId: "1:423364489492:web:a4242801d72aef71d25201"
};
firebase.initializeApp(firebaseConfig);
 let db=firebase.firestore();
 let auth=firebase.auth();
 let timestamp=firebase.firestore.FieldValue.serverTimestamp;
 export {db,timestamp,auth}