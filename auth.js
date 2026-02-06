// auth.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import {
  getAuth,
  signInWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

console.log("Login script loaded ✅");

const firebaseConfig = {
  apiKey: "AIzaSyBlRPjiuVNFUxa5sr1Wly45zo2BB-mmIug",
  authDomain: "waste-management-cacfb.firebaseapp.com",
  projectId: "waste-management-cacfb",
  storageBucket: "waste-management-cacfb.firebasestorage.app",
  messagingSenderId: "198304892572",
  appId: "1:198304892572:web:b8ec69ee3183eafc1d4f59"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  try {
    await signInWithEmailAndPassword(auth, email, password);

    alert("Login Successful ✅");
    window.location.href = "index.html";

  } catch (error) {
    alert("Login Failed ❌ " + error.message);
    console.error(error);
  }
});
