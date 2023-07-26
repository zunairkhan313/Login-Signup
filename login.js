import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyC_Edub0NwYQkyLzlVdfObo0mNLjGTT7XE",
  authDomain: "login-1c704.firebaseapp.com",
  projectId: "login-1c704",
  storageBucket: "login-1c704.appspot.com",
  messagingSenderId: "142692331618",
  appId: "1:142692331618:web:65ee320e68d66f5bd0613b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const btn1 = document.getElementById("login2")
btn1.addEventListener('click',()=>{
const email1 = document.getElementById("em").value
const password1 = document.getElementById("pass").value
    
    signInWithEmailAndPassword(auth, email1, password1)
    .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log(user);
        window.location.href = "./home.html"
        // ...
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode,errorMessage);
        alert("Wrong Email and password");
    });
})
    
