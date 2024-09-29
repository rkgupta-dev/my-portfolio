<template>
  <div id="app">

    
    <LandingPage/>
    <BottomNavbar/>
    
    <!-- <router-view></router-view> -->
  </div>
</template>

<script>
import LandingPage from './components/LandingPage.vue';
import BottomNavbar from './components/BottomNavbar.vue';

export default {
  name: 'App',
  components: {
   LandingPage,
   BottomNavbar,
  }
}
</script>

<style scoped>
/* Additional styles can be added if necessary */
</style>
