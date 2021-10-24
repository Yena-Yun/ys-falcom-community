// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyAETr1srdM5aATgr-jxwOfprVhihLYQayY',
  authDomain: 'ys-falcom-lounge.firebaseapp.com',
  projectId: 'ys-falcom-lounge',
  storageBucket: 'ys-falcom-lounge.appspot.com',
  messagingSenderId: '752713310968',
  appId: '1:752713310968:web:38a12f6e9e7b6be2bb510d',
  measurementId: 'G-LGR4W70D1B',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
