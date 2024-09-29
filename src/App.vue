<template>
  <div id="app">
  
    <LandingPage/>
    <BottomNavbar/>
    <HomePage />
    <!-- Router View -->
    <!-- <router-view></router-view> -->
  </div>
</template>

<script>
import LandingPage from './components/LandingPage.vue';
import HomePage from './components/HomePage.vue';
import BottomNavbar from './components/BottomNavbar.vue';

export default {
  name: 'App',
  components: {
   LandingPage,
   HomePage,
   BottomNavbar,
  }
}
</script>

<style scoped>
/* Additional styles can be added if necessary */
</style>
