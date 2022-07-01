import { createApp } from 'vue';
import Antd from 'ant-design-vue';
import VueTheMask from 'vue-the-mask';
import App from './App';
import 'ant-design-vue/dist/antd.css';

const app = createApp(App);
app
.use(VueTheMask)
.use(Antd).mount('#app');