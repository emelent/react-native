import * as firebase from 'firebase';

const config = {
  apiKey: "AIzaSyCk01PouP1Ak1PkIEKidch9ed_jxSLJNio",
  authDomain: "arbo-5d1ad.firebaseapp.com",
  databaseURL: "https://demo.firebaseio.com",
  storageBucket: "arbo-5d1ad.appspot.com",
};

firebase.initializeApp(config);

const database = firebase.database();
const storage = firebase.storage();
const auth = firebase.auth();

export database;
export storage;
export auth;
