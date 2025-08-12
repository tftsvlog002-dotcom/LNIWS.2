// Firebase configuration and initialization

// Import the Firebase scripts in your HTML before this file:
// <script src="https://www.gstatic.com/firebasejs/9.23.0/firebase-app-compat.js"></script>
// <script src="https://www.gstatic.com/firebasejs/9.23.0/firebase-database-compat.js"></script>
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBru43uggU-YLevZ7mv2rp3EKXGKNR_i1Q",
  authDomain: "getoe-9f34f.firebaseapp.com",
  projectId: "getoe-9f34f",
  storageBucket: "getoe-9f34f.firebasestorage.app",
  messagingSenderId: "770333082221",
  appId: "1:770333082221:web:dfdeebbed43e6494feb564",
  measurementId: "G-Q4GDQDV8VE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Get a reference to the database
const db = firebase.database();

// Example: Save a comment
function saveComment(pinId, comment) {
  db.ref('comments/' + pinId).push({
    text: comment,
    timestamp: Date.now()
  });
}

// Example: Listen for comments
function listenForComments(pinId, callback) {
  db.ref('comments/' + pinId).on('child_added', snapshot => {
    callback(snapshot.val());
  });
}

// Example: Save a rating
function saveRating(pinId, rating) {
  db.ref('ratings/' + pinId).push({
    value: rating,
    timestamp: Date.now()
  });
}

// Example: Save a photo (base64 string)
function savePhoto(pinId, photoDataUrl) {
  db.ref('photos/' + pinId).push({
    image: photoDataUrl,
    timestamp: Date.now()
  });
}

// Export functions if using modules
// export { saveComment, listenForComments, saveRating, savePhoto };
