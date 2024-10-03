import Vue from 'vue';
import Router from 'vue-router';
import LandingPage from './components/LandingPage.vue';
import CricketScoring from './components/CricketScoring.vue'; // Import the component

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
      path: '/cricket-scoring',
      name: 'cricket-scoring',
      component: CricketScoring,
    },
  ],
});
