import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBCokYfLeuJrgIxe4j9bV4Y18yamxX2x2k",
    authDomain: "master-project-e6424.firebaseapp.com",
    databaseURL: "https://master-project-e6424.firebaseio.com",
    projectId: "master-project-e6424",
    storageBucket: "master-project-e6424.appspot.com",
    messagingSenderId: "94337892778",
    appId: "1:94337892778:web:026f053439f23d37"
  };
  const fire = firebase.initializeApp(firebaseConfig);
  export default fire;