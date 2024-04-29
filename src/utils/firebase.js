import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCpOwIqH8CRruezJIL2xZlaP0Jyqxlqc-k",
  authDomain: "elektronika-3d0b3.firebaseapp.com",
  projectId: "elektronika-3d0b3",
  storageBucket: "elektronika-3d0b3.appspot.com",
  messagingSenderId: "512014158855",
  appId: "1:512014158855:web:461eb85abc5a9bbb652ea2",
  measurementId: "G-W73D72XEGY",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const analytics = getAnalytics(app);
