import Vue from 'vue';
import Router from 'vue-router';
import LandingPage from './components/LandingPage.vue';
import AboutPage from './components/AboutPage.vue';
import CricketScoring from './components/CricketScoring.vue';
import BlogDetails01 from './BlogPages/BlogDetails01.vue';
import BlogDetails02 from './BlogPages/BlogDetails02.vue';
import BlogDetails03 from './BlogPages/BlogDetails03.vue';

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
    {
      path: '/cricket-scoring',
      name: 'cricket',
      component: CricketScoring,
    },
    {
      path: '/blog-01',
      name: 'blog',
      component: BlogDetails01,
    },
    {
      path: '/blog-02',
      name: 'blog',
      component: BlogDetails02,
    },
    {
      path: '/blog-03',
      name: 'blog',
      component: BlogDetails03,
    },
  ],
});
