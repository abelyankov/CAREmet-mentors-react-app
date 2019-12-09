import firebase from "firebase";

export const config = {
    apiKey: "AIzaSyC39253iaDQ6ucMPq_nHz0NXRff8KeseBA",
    authDomain: "caremet-server.firebaseapp.com",
    databaseURL: "https://caremet-server.firebaseio.com",
    projectId: "caremet-server",
    storageBucket: "caremet-server.appspot.com",
    messagingSenderId: "742385271952",
    appId: "1:742385271952:web:906e544c111a558c188415"
};


export const firebaseAuth = firebase.auth;

export default firebase