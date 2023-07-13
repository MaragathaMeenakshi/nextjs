import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const app= initializeApp({
    apiKey: "AIzaSyAmSOH5w30JRvtonHD3qPlqlppW6Ofbz88",
    authDomain: "saas-66c40.firebaseapp.com",
    projectId: "saas-66c40",
    storageBucket: "saas-66c40.appspot.com",
    messagingSenderId: "6166030459",
    appId: "1:6166030459:web:a56a15d788f4bd70e5dade",
    measurementId: "G-JHZZMBPENW"
})

export const auth= getAuth(app);
