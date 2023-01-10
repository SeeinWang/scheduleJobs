const firebase = require('firebase');

const firebaseConfig = {
  apiKey: "AIzaSyBWaLyhLSpQDlcfCnIMKff-oVASLGsNZyo",
  authDomain: "arcadequest-dev.firebaseapp.com",
  projectId: "arcadequest-dev",
  storageBucket: "arcadequest-dev.appspot.com",
  messagingSenderId: "549807820790",
  appId: "1:549807820790:web:dda38aa77b3356dda701d7",
  measurementId: "G-89XSZXHL5W",
};

const Firebase = firebase.initializeApp(firebaseConfig);

const authClient = Firebase.auth();

module.exports = {
  authClient
}