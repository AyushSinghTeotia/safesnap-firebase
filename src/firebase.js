import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBH2BwoLLKQ7Vg6STDffK2_HCw-KOyQ44k",
    authDomain: "mywallet-f64d1.firebaseapp.com",
    databaseURL: "https://mywallet-f64d1-default-rtdb.firebaseio.com",
    projectId: "mywallet-f64d1",
    storageBucket: "mywallet-f64d1.appspot.com",
    messagingSenderId: "202931407699",
    appId: "1:202931407699:web:10e62aa7db6c7d86862fa6",
    measurementId: "G-S46BH1BBZN"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth();

export { app, auth };
