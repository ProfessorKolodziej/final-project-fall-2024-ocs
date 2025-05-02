// Firebase SDKs - make sure these <script> tags are in your login.html:
// <script type="module" src="js/auth.js"></script>

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-auth.js";

// 🔐 Replace this with your actual Firebase config from the Firebase Console
const firebaseConfig = {
	apiKey: "AIzaSyA6ofK-0N_OIL0Y8kpa2kPiKQqe810UkUM",
	authDomain: "ocarchive-9aab8.firebaseapp.com",
	projectId: "ocarchive-9aab8",
	storageBucket: "ocarchive-9aab8.firebasestorage.app",
	messagingSenderId: "862269049814",
	appId: "1:862269049814:web:3684ec16b36698ab41b277",
	measurementId: "G-B36MY3CGZP"
};


// ✅ Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Sign up function
function registerUser(email, password) {
	createUserWithEmailAndPassword(auth, email, password)
		.then(userCredential => {
			console.log("User registered:", userCredential.user);
			alert("Account created!");
		})
		.catch(error => {
			console.error(error.message);
			alert(error.message);
		});
}

function handleSignupForm(event) {
	// Prevent default form submission
	event.preventDefault();

	// Show the parent element so we can get to other items in the form
	console.log(event.target.parentElement);

	// Now, get the email
	const email = event.target.parentElement[0].value;

	// and the password (there is probably a more secure way to do this but I don't know it)
	const password = event.target.parentElement[1].value;

	registerUser(email, password);
}

const registerBtn = document.querySelector('#js-signup');
registerBtn?.addEventListener("click", handleSignupForm);

// Login function
/*
function loginUser(email, password) {
	auth.signInWithEmailAndPassword(email, password)
		.then(userCredential => {
			console.log("User logged in:", userCredential.user);
			window.location.href = "explore.html";
		})
		.catch(error => {
			console.error(error.message);
			alert(error.message);
		});
}
*/

// ✅ Listen for login form submission
const loginForm = document.getElementById("login-form");

if (loginForm) {
	loginForm.addEventListener("submit", (e) => {
		e.preventDefault();

		const email = document.getElementById("login-email").value;
		const password = document.getElementById("login-password").value;

		signInWithEmailAndPassword(auth, email, password)
			.then((userCredential) => {
				console.log("Logged in:", userCredential.user);

				// ✅ Redirect to profile page
				window.location.href = "profile.html";
			})
			.catch((error) => {
				console.error("Login error:", error.message);
				alert("Login failed: " + error.message);
			});
	});
}
