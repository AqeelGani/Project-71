import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAryv_gPsN_l7KEPGdJiD2cYVPhZYDX4vg",
    authDomain: "e-ride-e12b3.firebaseapp.com",
    projectId: "e-ride-e12b3",
    storageBucket: "e-ride-e12b3.appspot.com",
    messagingSenderId: "105622405302",
    appId: "1:105622405302:web:03b4062f984f5b62d42617"
};

firebase.initializeApp(firebaseConfig);
export default firebase.firestore();