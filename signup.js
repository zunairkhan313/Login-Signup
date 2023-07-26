
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";
  import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js";

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

  const btn = document.getElementById("signup")
  btn.addEventListener('click',()=>{

    const email = document.getElementById("em").value
    const password = document.getElementById("pass").value
      createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          console.log(user);
          window.location.href = ".//index.html"
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
            console.log(errorCode);
            console.log(errorMessage);
        });
    })