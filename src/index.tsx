import React, {createContext} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth";
import { getFirestore} from 'firebase/firestore/lite';

//import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
// Follow this pattern to import other Firebase services
// import { } from 'firebase/<service>';

type FirebaseConfigType = {
    apiKey: string
    authDomain: string
    projectId: string
    storageBucket: string
    messagingSenderId: string
    appId: string
    measurementId: string
}


const firebaseConfig: FirebaseConfigType = {
    apiKey: "AIzaSyDU14QKKet7fZYSDiCeB1EhE_ivXfk5vEg",
    authDomain: "react-chat-f003c.firebaseapp.com",
    projectId: "react-chat-f003c",
    storageBucket: "react-chat-f003c.appspot.com",
    messagingSenderId: "208776658105",
    appId: "1:208776658105:web:04f6b9d1f75a19bb90af68",
    measurementId: "G-S0YTCW3NJ8"
};

type AppType = {
    app: () => FirebaseConfigType
    auth: () => boolean
    firestore: () => any
}


export const Context = createContext({} as any || null);

export const app = initializeApp(firebaseConfig);
const auth = getAuth();
const firestore =getFirestore()


ReactDOM.render(
 <Context.Provider value={{
     app,
     auth: auth,
     firestore
 }}>
    <App />
 </Context.Provider>,
  document.getElementById('root')
);


reportWebVitals();
