<template>
  <div id="app">
    <!-- Navbar -->
    <b-navbar toggleable="lg" variant="primary" class="bg-primary">
      <div class="mr-2">
      <b-img
        rounded="circle"
        :src="require('@/assets/dp1.png')"
        alt="my image"
        style="width: 40px; height: 40px"
      ></b-img>
      </div>
      <b-navbar-brand to="/" class="text-light" >My Portfolio</b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-item
            ><router-link to="/" class="text-light"
              >Home</router-link
            ></b-nav-item
          >
          <b-nav-item
            ><router-link to="/about" class="text-light"
              >About</router-link
            ></b-nav-item
          >
          <b-nav-item>
            <router-link to="/projects" class="text-light"
              >Projects</router-link
            ></b-nav-item
          >
          <b-nav-item
            ><router-link to="/contact" class="text-light"
              >Contact</router-link
            ></b-nav-item
          >
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
body {
  font-family: "Arial", sans-serif;
  background-color: red;
}
/* Add this to App.vue or your global CSS file */
.router-link-active {
  font-weight: bold;
  color: #f7f5fa;
}
</style>
