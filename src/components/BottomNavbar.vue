<template>
  <div>
    <div v-if="isNavVisible" class="fixed-bottom w-100">
      <div class="nav-main mx-auto gradient-bg">
        <div class="d-flex justify-content-between align-items-center">
          <!-- Collapse Button -->
          <div
            v-b-tooltip="'Collapse Menu'"
            class="p-2 nav-item"
            @click="toggleNav"
          >
            <i class="fa-solid fa-minus"></i>
          </div>
          <!-- Navigation Links -->
          <a
            tag="div"
            v-b-tooltip="'Home'"
            class="p-2 nav-item"
            exact-active-class="active"
            :class="{
              'text-warning': activeSection === 'home',
              'text-dark': activeSection !== 'home',
            }"
            @click="setActiveSection('home')"
            href="/"
          >
            <i class="fa-solid fa-house"></i>
          </a>
          <a
            tag="div"
            class="p-2 nav-item"
            exact-active-class="active"
            :class="{
              'text-success': activeSection === 'about',
              'text-dark': activeSection !== 'about',
            }"
            v-b-tooltip="'About'"
            @click="setActiveSection('about')"
            href="#about"
          >
            <i class="fa-solid fa-user"></i>
          </a>
          <a
            tag="div"
            class="p-2 nav-item"
            exact-active-class="active"
            :class="{
              'text-primary': activeSection === 'projects',
              'text-dark': activeSection !== 'projects',
            }"
            v-b-tooltip="'Projects'"
            @click="setActiveSection('projects')"
            href="#projects"
          >
            <i class="fa-solid fa-briefcase"></i>
          </a>
          <a
            tag="div"
            class="p-2 nav-item"
            exact-active-class="active"
            :class="{
              'text-danger': activeSection === 'blog',
              'text-dark': activeSection !== 'blog',
            }"
            v-b-tooltip="'Blog'"
            @click="setActiveSection('blog')"
            href="#blog"
          >
            <i class="fa-solid fa-blog"></i>
          </a>
          <a
            tag="div"
            class="p-2 nav-item"
            exact-active-class="active"
            :class="{
              'text-info': activeSection === 'contact',
              'text-dark': activeSection !== 'contact',
            }"
            v-b-tooltip="'Contact'"
            @click="setActiveSection('contact')"
            href="#contact"
          >
            <i class="fa-solid fa-address-book"></i>
          </a>
        </div>
      </div>
    </div>

    <!-- Show Button -->
    <div v-else class="fixed-bottom w-100 text-center">
      <div v-b-tooltip="'Expand Menu'" class="p-2 nav-item" @click="toggleNav">
        <i class="fas fa-arrow-up"></i>
      </div>
    </div>
  </div>
</template>

<script>
import "@fortawesome/fontawesome-free/css/all.min.css";

export default {
  data() {
    return {
      isNavVisible: true,
      activeSection: "", // Added property to track the active section
    };
  },
  methods: {
    toggleNav() {
      this.isNavVisible = !this.isNavVisible;
    },
    setActiveSection(section) {
      this.activeSection = section; // Update the active section
    },
    handleScroll() {
      const sections = ["home", "about", "projects", "blog", "contact"];
      let foundSection = "";

      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top >= 0 && rect.top <= window.innerHeight / 2) {
            foundSection = section;
          }
        }
      });

      this.activeSection = foundSection;
    },
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll);
  },
};
</script>

<style scoped>
.fixed-bottom {
  bottom: 0;
  left: 0;
  right: 0;
  position: fixed;
}

.nav-main {
  background-color: rgb(255, 255, 255, 0.8);
  border: 1px solid #eaeaec;
  backdrop-filter: blur(5px);
  border-radius: 10px 10px 0px 0px;
  padding: 10px;
  padding-bottom: calc(env(safe-area-inset-bottom) + 10px) !important;
  height: 58px;
}

.nav-item {
  text-align: center;
  flex-grow: 1;
  border-radius: 10px;
  transition: background-color 0.2s, color 0.2s;
  text-decoration: none; /* Remove underline */
}

.nav-item:hover {
  cursor: pointer;
}

/* Default icon color */
.text-dark {
  color: #343a40; /* Dark color (Bootstrap's dark color) */
}

.nav-item i {
  font-size: 1.3rem;
  display: block;
}

/* Responsive Design */
@media (min-width: 576px) {
  .nav-main {
    max-width: 400px;
  }
}

@media (max-width: 576px) {
  .tooltip.b-tooltip {
    display: none !important;
  }
}

@media (min-width: 768px) {
  .nav-main {
    max-width: 550px;
  }

  .nav-item i {
    font-size: 1.5rem;
  }
}
</style>
