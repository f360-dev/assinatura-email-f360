import {createRouter, createWebHashHistory} from 'vue-router';
import App from '../src/Views/App.vue';
import Settings from '../src/Views/Settings.vue';
import Logos from '../src/Views/Logos.vue';

const routes = [
  { path: '/', name:'home', component: App },
  { path: '/settings', name:'settings', component: Settings },
  { path: '/logos', name:'logos', component: Logos },
];

export const router = createRouter({
  history: createWebHashHistory(),
  routes,
})