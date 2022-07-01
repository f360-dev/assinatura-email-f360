
import { getStorage, uploadBytes, listAll, ref as storageRef } from 'firebase/storage';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBI9jtYLZbYkeQqmHLn6MOqrJcRiVchZAg",
  authDomain: "assinatura-email-f360.firebaseapp.com",
  projectId: "assinatura-email-f360",
  storageBucket: "assinatura-email-f360.appspot.com",
  messagingSenderId: "201906170698",
  appId: "1:201906170698:web:88446e250283e23f33afb3"
};

initializeApp(firebaseConfig);

const defaultAvatar = 'https://firebasestorage.googleapis.com/v0/b/assinatura-email-f360.appspot.com/o/cs%2Fdeafult.png?alt=media';
const storage = getStorage();

export const firebase = {
  defaultAvatar,
  storage,
  uploadBytes,
  listAll,
  storageRef
};

