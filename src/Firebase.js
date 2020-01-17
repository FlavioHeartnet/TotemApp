import * as firebase from 'firebase';
import firestore from 'firebase/firestore'

const settings = {timestampsInSnapshots: true};

const config = {
    apiKey: "AIzaSyBm8vnCZwQ9KHN9a0WJOKygzViae2nnk9g",
    authDomain: "totemapp-6c45d.firebaseapp.com",
    databaseURL: "https://totemapp-6c45d.firebaseio.com",
    projectId: "totemapp-6c45d",
    storageBucket: "totemapp-6c45d.appspot.com",
    messagingSenderId: "267977724094",
    appId: "1:267977724094:web:48f6b52c4504bae8338eef",
    measurementId: "G-WNH9TXMYW8"
};
firebase.initializeApp(config);

firebase.firestore().settings(settings);

export default firebase;