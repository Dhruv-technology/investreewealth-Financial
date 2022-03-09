npm install firebase
npm install - g firebase - tools
firebase login
firebase initfirebase deploy
// Import the functions you need from the SDKs you need
import {
	initializeApp
} from "firebase/app";
import {
	getAnalytics
} from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyBBRXCzQhpG4TPsOd1AaMoryodJkhjGLLM",
	authDomain: "investreewealth-e6407.firebaseapp.com",
	databaseURL: "https://investreewealth-e6407-default-rtdb.firebaseio.com",
	projectId: "investreewealth-e6407",
	storageBucket: "investreewealth-e6407.appspot.com",
	messagingSenderId: "18796723473",
	appId: "1:18796723473:web:911b60f612f43974a0e0b0",
	measurementId: "G-PY3WLLQCTL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyBBRXCzQhpG4TPsOd1AaMoryodJkhjGLLM",
	authDomain: "investreewealth-e6407.firebaseapp.com",
	databaseURL: "https://investreewealth-e6407-default-rtdb.firebaseio.com",
	projectId: "investreewealth-e6407",
	storageBucket: "investreewealth-e6407.appspot.com",
	messagingSenderId: "18796723473",
	appId: "1:18796723473:web:911b60f612f43974a0e0b0",
	measurementId: "G-PY3WLLQCTL"
}

FileInputStream serviceAccount =
	new FileInputStream("path/to/serviceAccountKey.json");

FirebaseOptions options = new FirebaseOptions.Builder()
	.setCredentials(GoogleCredentials.fromStream(serviceAccount))
	.setDatabaseUrl("https://investreewealth-e6407-default-rtdb.firebaseio.com")
	.build();

FirebaseApp.initializeApp(options);;

var admin = require("firebase-admin");

var serviceAccount = require("path/to/serviceAccountKey.json");

admin.initializeApp({
	credential: admin.credential.cert(serviceAccount),
	databaseURL: "https://investreewealth-e6407-default-rtdb.firebaseio.com"
}); {
	"rules": {
		".read": false,
		".write": false
	}
}
function.java{
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const auth = getAuth();
createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  })
	s;
	
}