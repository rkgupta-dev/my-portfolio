<template>
  <div id="app">
    <!-- Navbar -->
    <b-navbar toggleable="lg" variant="primary" class="py-1 sticky-top">
      <!-- <div class="mr-2">
      <b-img
        rounded="circle"
        :src="require('@/assets/dp1.png')"
        alt="my image"
        style="width: 40px; height: 40px"
      ></b-img>
      </div> -->
      <b-navbar-brand to="/" class="text-light">My Portfolio</b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-item to="/">Home</b-nav-item>
          <b-nav-item to="/about">About </b-nav-item>
          <b-nav-item to="/projects">Projects </b-nav-item>
          <b-nav-item to="/contact">Contact</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>

    <!-- Router View -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style scoped>
/* body {
  font-family: "Arial", sans-serif;
  background-color: red;
} */

</style>
