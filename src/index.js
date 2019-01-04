import React from 'react';
import ReactDOM from 'react-dom';
import firebase from 'firebase'
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

firebase.initializeApp({
    apiKey: "AIzaSyDnJuXVG4T_Rp-5WaGTTVOnCr4IhEmMrUo",
    authDomain: "instagramfirebase-b5d61.firebaseapp.com",
    databaseURL: "https://instagramfirebase-b5d61.firebaseio.com",
    projectId: "instagramfirebase-b5d61",
    storageBucket: "instagramfirebase-b5d61.appspot.com",
    messagingSenderId: "566576094514"
});

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
