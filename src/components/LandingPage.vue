<template>
  <div>
    <!-- Navbar -->
    <b-navbar
      toggleable="lg"
      :class="{
        'bg-info': isScrolled,
        'bg-light': !isScrolled,
      }"
      class="py-1 sticky-top shadow-sm"
      @scroll="handleScroll"
    >
      <b-navbar-brand
        href="/"
        :class="{ 'text-light': isScrolled, 'text-dark': !isScrolled }"
        >My Portfolio</b-navbar-brand
      >
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-item href="/" exact>Home</b-nav-item>
          <b-nav-item href="#about">About</b-nav-item>
          <b-nav-item href="#projects">Projects</b-nav-item>
          <b-nav-item href="#blog">Blog</b-nav-item>
          <b-nav-item href="#contact">Contact</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>

    <!-- Hero Section -->
    <b-container id="home" class="text-left my-4 fade-in">
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
              <b-button href="#projects" variant="outline-dark">
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
      <b-container class="bg-light" fluid>
        <b-row>
          <b-col md="12" class="mt-5">
            <h1 class="text-center">About Me</h1>
            <p class="lead text-center">
              I’m a creative developer passionate about using technology to
              solve real-world problems and improve user experiences in the
              digital landscape.
            </p>
          </b-col>
        </b-row>
        <b-container>
          <hr />
          <b-row class="my-4">
            <b-col>
              <b-img
                src="https://static-00.iconduck.com/assets.00/web-developer-illustration-2048x1490-saofs07x.png"
                alt="Web Developer Illustration"
                class="mb-4"
                fluid
              >
              </b-img>
            </b-col>

            <b-col md="6" class="my-5">
              <h2 class="text-center">Frontend Developer</h2>
              <p class="text-center font-size">
                I am a frontend developer with expertise in creating intuitive
                and responsive user interfaces. I specialize in leveraging
                modern frameworks such as Bootstrap Vue, Vue.js, and more to
                craft seamless web experiences. My focus is on building
                efficient, accessible, and visually engaging solutions that meet
                user needs while ensuring top-notch performance and
                maintainability.
              </p>
              <div class="text-center my-4">
                <b-button to="/projects" variant="primary" class="mr-2">
                  Download CV <b-icon icon="cloud-arrow-down"></b-icon>
                </b-button>
                <b-button to="/projects" variant="dark">
                  More Info <b-icon icon="info-circle"></b-icon>
                </b-button>
              </div>
            </b-col>
            <b-col md="12" class="my-2">
              <h3 class="text-center">My Skills</h3>
              <div
                class="border bg-success mt-2 mx-auto"
                style="width: 10%; height: 3px"
              ></div>
              <p class="lead text-center">
                Creative web solutions utilizing design principles and coding
                expertise.
              </p>
            </b-col>

            <!-- Web Design Skills -->
            <b-col md="4" class="my-4">
              <b-card class="text-center skill-card">
                <h4 class="text-primary">Web Design</h4>
                <hr />
                <ul class="list-unstyled">
                  <li class="font-weight-bold display-5">UI/UX Design</li>
                  <li class="font-weight-bold display-5">Responsive Design</li>
                  <li class="font-weight-bold display-5">Wireframing</li>
                  <li class="font-weight-bold display-5">User Research</li>
                </ul>
              </b-card>
            </b-col>

            <!-- Frontend Skills -->
            <b-col md="4" class="my-4">
              <b-card class="text-center skill-card">
                <h4 class="text-primary">Frontend</h4>
                <hr />
                <ul class="list-unstyled">
                  <li class="font-weight-bold display-5">JavaScript</li>
                  <li class="font-weight-bold display-6">ReactJS</li>
                  <li class="font-weight-bold display-6">NextJS</li>
                  <li class="font-weight-bold display-6">CSS3</li>
                </ul>
              </b-card>
            </b-col>

            <!-- Backend Skills -->
            <b-col md="4" class="my-4">
              <b-card class="text-center skill-card">
                <h4 class="text-primary">Backend</h4>
                <hr />
                <ul class="list-unstyled">
                  <li class="font-weight-bold display-5">NodeJs</li>
                  <li class="font-weight-bold display-5">MongoDB</li>
                  <li class="font-weight-bold display-5">ExpressJS</li>
                  <li class="font-weight-bold display-5">Vercel</li>
                </ul>
              </b-card>
            </b-col>
          </b-row>
        </b-container>
      </b-container>
    </div>

    <!-- Projects Section -->
    <div id="projects" class="mt-5">
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
export default {
  name: "LandingPage",
  data() {
    return {
      isScrolled: false,
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
  methods: {
    handleScroll() {
      this.isScrolled = window.scrollY > 30; // Change this value as needed
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

/* this is for About Section font-size */
h1 {
  margin-bottom: 20px;
}
.font-size {
  font-size: 1.2rem; /* You can adjust the size as needed */
}

/* Hover effect for My Skill cards */
.skill-card {
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  background-image: radial-gradient(
    circle farthest-corner at 10% 20%,
    rgba(130, 205, 221, 1) 0%,
    rgba(255, 247, 153, 1) 90%
  );
}

.skill-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}
</style>
