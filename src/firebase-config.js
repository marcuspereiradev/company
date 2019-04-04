const Rebase = require('re-base');
const firebase = require('firebase');

const FirebaseConfig = {
  apiKey: "AIzaSyDElP2aZgImZ2pSpjZbG-9ikfJvEh0TULM",
  authDomain: "mycompany-473c1.firebaseapp.com",
  databaseURL: "https://mycompany-473c1.firebaseio.com",
  projectId: "mycompany-473c1",
  storageBucket: "mycompany-473c1.appspot.com",
  messagingSenderId: "561977239608"
};

const app = firebase.initializeApp(config);
const config = Rebase.createClass(app.database())

export default config;
