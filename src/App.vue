<template>
  <div id="app">
    <!-- Navbar -->
    <b-navbar :variant="navVariant" toggleable="lg" class="py-1 sticky-top shadow-sm">
      <b-navbar-brand to="/" class="text-dark">My Portfolio</b-navbar-brand>
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
  data() {
    return {
      navVariant: "light", // Default variant
    };
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      if (window.scrollY > 30) {
        // Change variant when scrolled more than 100px
        this.navVariant = "info";
      } else {
        // Revert to primary variant
        this.navVariant = "light";
      }
    },
  },
};
</script>

<style scoped>
/* Additional styles can be added if necessary */
</style>
