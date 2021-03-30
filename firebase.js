import * from firebase as "firebase";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDwkG_LhajN7bYHDujPGXupX2mSp5AxgBU",
  authDomain: "signal-clone-79aad.firebaseapp.com",
  projectId: "signal-clone-79aad",
  storageBucket: "signal-clone-79aad.appspot.com",
  messagingSenderId: "908900372675",
  appId: "1:908900372675:web:346a2df40a0839619d5276"
};

let app;
if(firebase.app.length === 0){
  app = firebaseApp = firebase.initializeApp(firebaseConfig);
}
else{
  app=firebase.app();
}

const db = app.firestore();
const auth = firebase.auth();
export {db,auth} ;
