import {createRouter, createWebHashHistory} from 'vue-router';
import App from '../src/Views/App.vue';
import Settings from '../src/Views/Settings.vue';

const routes = [
  { path: '/', name:'home', component: App },
  { path: '/settings', name:'settings', component: Settings },
];

export const router = createRouter({
  history: createWebHashHistory(),
  routes,
})