import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

var firebaseConfig = {
  apiKey: "AIzaSyDX_zSA_s_wqxbwyQhxwdLZTLeOtIdck1I",
  authDomain: "dad-joke-project.firebaseapp.com",
  databaseURL: "https://dad-joke-project.firebaseio.com",
  projectId: "dad-joke-project",
  storageBucket: "dad-joke-project.appspot.com",
  messagingSenderId: "471741642079",
  appId: "1:471741642079:web:ad79d86040e95199e7f2ea",
  measurementId: "G-ZE8XX9KBVR"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.analytics();
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;