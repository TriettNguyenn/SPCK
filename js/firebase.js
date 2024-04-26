
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyA3ADjFqx2Yk0jPJlJxqM-IINFFkkVk5IY",
    authDomain: "summersport-c9ef0.firebaseapp.com",
    projectId: "summersport-c9ef0",
    storageBucket: "summersport-c9ef0.appspot.com",
    messagingSenderId: "937199112224",
    appId: "1:937199112224:web:b5a5f7c67ab71ad5806c45",
    measurementId: "G-KSVDTZ5YHE"
  };

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);