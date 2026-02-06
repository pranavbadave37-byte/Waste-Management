console.log("profile.js loaded ✅");

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

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

// Elements
const profileBtn = document.getElementById("profileBtn");
const profileDropdown = document.getElementById("profileDropdown");
const profileCircle = document.getElementById("profileCircle");

const dropdownName = document.getElementById("dropdownName");
const dropdownEmail = document.getElementById("dropdownEmail");
const logoutBtn = document.getElementById("logoutBtn");

// Toggle dropdown
profileBtn.addEventListener("click", () => {
  profileDropdown.classList.toggle("show");
});

// Close dropdown if click outside
document.addEventListener("click", (e) => {
  if (!e.target.closest(".profile-area")) {
    profileDropdown.classList.remove("show");
  }
});

// Auth check
onAuthStateChanged(auth, (user) => {
  if (user) {
    const name = user.displayName || "User";
    const email = user.email;

    dropdownName.innerText = name;
    dropdownEmail.innerText = email;

    // Circle first letter
    profileCircle.innerText = name.charAt(0).toUpperCase();
  } else {
    window.location.href = "Sign_in.html";
  }
});

// Logout
logoutBtn.addEventListener("click", async () => {
  await signOut(auth);
  window.location.href = "Sign_in.html";
});
