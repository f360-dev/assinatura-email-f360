import { createApp } from 'vue';
import { initializeApp } from "firebase/app";
import Antd from 'ant-design-vue';
import VueTheMask from 'vue-the-mask';
import App from './App';
import 'ant-design-vue/dist/antd.css';

const app = createApp(App);

const firebaseConfig = {
  apiKey: "AIzaSyBI9jtYLZbYkeQqmHLn6MOqrJcRiVchZAg",
  authDomain: "assinatura-email-f360.firebaseapp.com",
  projectId: "assinatura-email-f360",
  storageBucket: "assinatura-email-f360.appspot.com",
  messagingSenderId: "201906170698",
  appId: "1:201906170698:web:88446e250283e23f33afb3"
};

initializeApp(firebaseConfig);

app
.use(VueTheMask)
.use(Antd).mount('#app');