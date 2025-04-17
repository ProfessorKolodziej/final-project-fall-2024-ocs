// This is where you should write all JavaScript
// for your project. Remember a few things as you start!
// - Use let or const for all variables
// - Do not use jQuery - use JavaScript instead
// - Do not use onclick - use addEventListener instead
// - Run npm run test regularly to check autograding
// - You'll need to link this file to your HTML :)

// src/js/auth.js

console.log("auth.js loaded");


// 🔧 Replace with your Firebase config
const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
    projectId: "YOUR_PROJECT_ID",
    appId: "YOUR_APP_ID"
  };
  
  firebase.initializeApp(firebaseConfig);
  const auth = firebase.auth();
  
  // Sign up function
  function registerUser(email, password) {
    auth.createUserWithEmailAndPassword(email, password)
      .then(userCredential => {
        console.log("User registered:", userCredential.user);
        alert("Account created!");
      })
      .catch(error => {
        console.error(error.message);
        alert(error.message);
      });
  }
  
  // Login function
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
  