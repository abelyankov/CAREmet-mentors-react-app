import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import { store } from './helpers';
import { App } from './App';
import firebase from 'firebase';
// setup fake backend
import { configureFakeBackend } from './helpers';
configureFakeBackend();

firebase.initializeApp({
    apiKey: "AIzaSyC39253iaDQ6ucMPq_nHz0NXRff8KeseBA",
    authDomain: "caremet-server.firebaseapp.com",
    databaseURL: "https://caremet-server.firebaseio.com",
    projectId: "caremet-server",
    storageBucket: "caremet-server.appspot.com",
    messagingSenderId: "742385271952",
    appId: "1:742385271952:web:906e544c111a558c188415"
});

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('app')
);