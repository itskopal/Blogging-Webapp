// Your web app's Firebase configuration
let firebaseConfig = {
    apiKey: "AIzaSyC5xy6WJt7Y1zZynn4eR50aKYTsSyW3j8g",
    authDomain: "blogging-website-c84a0.firebaseapp.com",
    projectId: "blogging-website-c84a0",
    storageBucket: "blogging-website-c84a0.appspot.com",
    messagingSenderId: "437557030109",
    appId: "1:437557030109:web:3cc628fd24ef1051b8ff34"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
let auth = firebase.auth();

const logoutUser = () => {
    auth.signOut();
    location.reload();
}

