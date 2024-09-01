// src/router.js

import Vue from 'vue';
import Router from 'vue-router';
import HomePage from './components/HomePage.vue';
import AboutPage from './components/AboutPage.vue';
import ProjectsPage from './components/ProjectsPage.vue';
import ContactPage from './components/ContactPage.vue';
import TravelBlog from './components/TravelBlog.vue';
import CricketScoring from './components/CricketScoring.vue';

Vue.use(Router);

export default new Router({
  mode: 'history', // Use 'history' mode to remove the hash from URLs
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage,
    },
    {
      path: '/about',
      name: 'about',
      component: AboutPage,
    },
    {
      path: '/projects',
      name: 'projects',
      component: ProjectsPage,
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactPage,
    },
    {
      path: '/travel-blog',
      name: 'travel-blog',
      component: TravelBlog,
    },
    {
      path: '/cricket-scoring',
      name: 'cricket-scoring',
      component: CricketScoring,
    },
  ],
});
