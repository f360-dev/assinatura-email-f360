import { createApp } from 'vue';
import { initializeApp } from "firebase/app";
import Antd from 'ant-design-vue';
import VueTheMask from 'vue-the-mask';
import App from './App';
import 'ant-design-vue/dist/antd.css';

const app = createApp(App);

const firebaseConfig = {
  apiKey: "AIzaSyBLmOl4_ZWCD-2u8r6-zu0Joz-1GRVrTIc",
  authDomain: "f360-meail.firebaseapp.com",
  projectId: "f360-meail",
  storageBucket: "f360-meail.appspot.com",
  messagingSenderId: "486308645517",
  appId: "1:486308645517:web:1e05528b08c73ae80d70c4"
};

initializeApp(firebaseConfig);

app
.use(VueTheMask)
.use(Antd).mount('#app');