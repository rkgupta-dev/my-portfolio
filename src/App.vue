<template>
  <div id="app">
  
  <LandingPage/>
    <!-- Router View -->
    <!-- <router-view></router-view> -->
  </div>
</template>

<script>
import LandingPage from './components/LandingPage.vue';

export default {
  name: 'App',
  components: {
   LandingPage,
  }
}
</script>

<style scoped>
/* Additional styles can be added if necessary */
</style>
