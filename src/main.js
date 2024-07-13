import { createRouter, createWebHistory } from 'vue-router';
import { createApp } from 'vue';
import App from './App.vue';
import vuetify from './plugins/vuetify';
import { loadFonts } from './plugins/webfontloader';
import '@/assets/global.css';

loadFonts();

import UserPage from './components/users/pages/UserPage.vue';
import PageIndex from './components/users/pages/PageIndex.vue'; 
import Registro from './components/users/pages/Registro.vue'; 

// Configuración de Vue Router
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: App 
    },
    {
      path: '/usuarios',
      name: 'users',
      component: UserPage 
    },
    {
      path: '/index',
      name: 'PageIndex',
      component: PageIndex 
    },
    {
      path: '/registro', 
      name: 'Registro',
      component: Registro 
    }
   
  ]
});

createApp(App).use(router).use(vuetify).mount('#app');
