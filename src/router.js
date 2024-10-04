import Vue from 'vue';
import Router from 'vue-router';
import LandingPage from './components/LandingPage.vue';
import AboutPage from './components/AboutPage.vue';

Vue.use(Router);

export default new Router({
  mode: 'history', // Use 'history' mode to remove the hash from URLs
  routes: [
    {
      path: '/',
      name: 'landing-page',
      component: LandingPage,
    },
    {
      path: '/more-information',
      name: 'about-me',
      component: AboutPage,
    },
  ],
});
