import Vue from 'vue';
import Router from 'vue-router';
import LandingPage from './components/LandingPage.vue';
import AboutPage from './components/AboutPage.vue';
import BlogDetails01 from './BlogPages/BlogDetails01.vue';
import BlogDetails02 from './BlogPages/BlogDetails02.vue';
import BlogDetails03 from './BlogPages/BlogDetails03.vue';
import PrimeBazaar from './description/PrimeBazaar.vue';

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
    {
      path: '/primebazaar-details',
      name: 'primebazaar',
      component: PrimeBazaar,
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    // If there is a saved scroll position, return it (for navigating back)
    if (savedPosition) {
      return savedPosition;
    } else {
      // If not, scroll to the top
      return { x: 0, y: 0 };
    }
  },
});
