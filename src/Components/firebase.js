import {initializeApp} from "firebase/app";
import {getFirestore} from "firebase/firestore";
import {getStorage, uploadBytes} from "firebase/storage";

const config = {
  apiKey: "AIzaSyBrHv6ed8XQ8TgKaXr5XW_uM5WGIV_5INw",
  authDomain: "image-upload-preview-9d4b9.firebaseapp.com",
  projectId: "image-upload-preview-9d4b9",
  storageBucket: "image-upload-preview-9d4b9.appspot.com",
  messagingSenderId: "117765453994",
  appId: "1:117765453994:web:4ceadd9725053276a238d3",
};
const app = initializeApp(config);
const db = getFirestore(app);
const storage = getStorage();

export {db, storage as default};
