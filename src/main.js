import { createApp } from 'vue';
import Antd from 'ant-design-vue';
import VueTheMask from 'vue-the-mask';
import Home from './Home.vue';
import { router } from './routes';
import 'ant-design-vue/dist/antd.css';

const app = createApp(Home);
app
.use(router)
.use(VueTheMask)
.use(Antd).mount('#app');