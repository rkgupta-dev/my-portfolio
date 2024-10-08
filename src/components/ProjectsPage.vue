<template>
  <div>
    <!-- Navbar -->
    <b-navbar
      :variant="navVariant"
      toggleable="lg"
      class="py-1 sticky-top shadow-sm"
    >
      <b-navbar-brand to="/" class="text-dark">My Portfolio</b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-item to="/">Home</b-nav-item>
          <b-nav-item to="#about">About</b-nav-item>
          <b-nav-item to="#projects">Projects</b-nav-item>
          <b-nav-item to="#blog">Blog</b-nav-item>
          <b-nav-item to="#contact">Contact</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>

    <!-- Hero Section -->
    <b-container class="text-left my-4 fade-in">
      <b-row>
        <b-col md="6" class="d-flex align-items-center">
          <div>
            <h1 class="text-muted">Welcome to My Portfolio</h1>
            <div class="my-4">
              <h5 class="text-primary">Hey, I'm Rohit 👋🏻</h5>
              <h1 class="display-4">
                <strong><span class="text-success">Front</span>end</strong>
              </h1>
              <h1 class="display-4"><strong>Developer</strong></h1>
              <p class="lead">
                <strong>
                  Hi, I'm Rohit Kumar Gupta, a passionate frontend developer who
                  loves creating interactive and responsive web applications.
                </strong>
              </p>
              <!-- Buttons -->
              <b-button to="#contact" variant="primary" class="mr-2">
                Get in Touch
              </b-button>
              <b-button to="#projects" variant="outline-dark">
                Browse Projects
              </b-button>
            </div>
          </div>
        </b-col>
        <b-col md="6" class="d-flex justify-content-center">
          <b-img
            :src="require('@/assets/dp1.png')"
            alt="Web Developer"
            style="max-width: 90%; height: auto"
          />
        </b-col>
      </b-row>
    </b-container>

    <hr />

    <!-- About Section -->
    <div id="about">
      <AboutPage />
    </div>

    <!-- Projects Section -->
    <div id="projects">
      <b-container>
        <div class="my-5">
          <h1 class="text-center fade-in">Projects</h1>
          <b-row>
            <b-col
              md="4"
              v-for="(project, index) in projects"
              :key="index"
              class="mb-4 fade-in"
            >
              <b-card
                :title="project.title"
                :img-src="project.img"
                :img-alt="project.title"
                img-top
                class="fade-in my-4 project-card"
              >
                <b-card-text>
                  {{ project.description }}
                </b-card-text>
                <b-button
                  variant="primary"
                  :href="project.link"
                  target="_blank"
                >
                  View Project
                </b-button>
              </b-card>
            </b-col>
          </b-row>
        </div>

        <!-- My Skills -->
        <div>
          <b-container fluid>
            <h1 class="text-center mb-4">My Skills</h1>
            <b-row>
              <b-col md="4" class="mb-3">
                <b-card class="text-center skill-card">
                  <h4 class="text-info">Web Design</h4>
                  <hr />
                  <ul class="list-unstyled">
                    <li>UI/UX Design</li>
                    <li>Responsive Design</li>
                    <li>Wireframing</li>
                    <li>User Research</li>
                  </ul>
                </b-card>
              </b-col>

              <b-col md="4" class="mb-3">
                <b-card class="text-center skill-card">
                  <h4 class="text-info">Frontend</h4>
                  <hr />
                  <ul class="list-unstyled">
                    <li>JavaScript</li>
                    <li>ReactJS</li>
                    <li>NextJS</li>
                    <li>CSS3</li>
                  </ul>
                </b-card>
              </b-col>

              <b-col md="4" class="mb-3">
                <b-card class="text-center skill-card">
                  <h4 class="text-info">Backend</h4>
                  <hr />
                  <ul class="list-unstyled">
                    <li>NodeJs</li>
                    <li>MongoDB</li>
                    <li>ExpressJS</li>
                    <li>Vercel</li>
                  </ul>
                </b-card>
              </b-col>
            </b-row>
          </b-container>
        </div>

        <!-- My Story -->
        <div>
          <b-container fluid class="p-4">
            <h1 class="text-center mb-4">My Story</h1>
            <b-row>
              <b-col md="12">
                <b-card class="p-3">
                  <p>
                    My journey as a front-end developer started back in 2018,
                    working as a freelancer for clients all over the world.
                  </p>
                  <p>
                    After being on my own for a while, I decided to enter the
                    corporate world, and I started working as a software
                    developer at Ontrack Technology Pvt. Ltd.
                  </p>
                  <p>
                    After some exciting months of work, I transitioned to
                    Stripe, returning to what I love: front-end development.
                  </p>
                  <p>
                    My success quickly compounded, and I started receiving job
                    offers from the biggest names in the industry.
                  </p>
                  <p>
                    All these opportunities led me to travel the world.
                    Eventually, however, I decided to settle down for a calmer
                    routine, and I'm now working at Apple. And you know what? I
                    love what I do! 💜
                  </p>
                </b-card>
              </b-col>
            </b-row>
          </b-container>
        </div>
      </b-container>
    </div>
  </div>
</template>

<script>
import AboutPage from "@/components/AboutPage.vue";

export default {
  name: "LandingPage",
  components: {
    AboutPage,
  },
  data() {
    return {
      navVariant: "light", // Adjust as necessary
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
      projects: [
        {
          title: "Portfolio Website",
          description:
            "A personal portfolio website built with Vue.js and BootstrapVue.",
          img: require("@/assets/dp1.png"),
          link: "#",
        },
        {
          title: "Travel Blog",
          description:
            "A travel blog showcasing beautiful destinations around the world.",
          img: require("@/assets/dp1.png"),
          link: "/travel-blog",
        },
        {
          title: "Cricket Scoring Dashboard",
          description: "To create a cricket scoring system using BootstrapVue.",
          img: require("@/assets/dp1.png"),
          link: "/cricket-scoring",
        },
        // Add more projects here
      ],
    };
  },
};
</script>

<style scoped>
.fade-in {
  animation: fadeIn 1s ease-in-out;
}

@keyframes fadeIn {
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

.skill-card {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.skill-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

.project-card img {
  transition: transform 0.3s ease-in-out;
}

.project-card img:hover {
  transform: scale(1.05);
}
</style>
