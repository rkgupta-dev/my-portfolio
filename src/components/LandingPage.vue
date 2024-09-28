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
              <b-button href="#contact" variant="primary" class="mr-2">
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
            <h1 class="text-center">
              <span class="text-danger">—</span> About Me
              <span class="text-danger">—</span>
            </h1>
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
                <b-button
                  to="/projects"
                  variant="dark"
                  v-b-tooltip.hover
                  title="More information About Me."
                >
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
    <div id="projects">
      <b-container class="">
        <b-row>
          <b-col md="12" class="mt-5">
            <h1 class="text-center">
              <span class="text-danger">—</span> Projects
              <span class="text-danger">—</span>
            </h1>
          </b-col>
        </b-row>

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
              <b-button variant="primary" :href="project.link" target="_blank">
                View Project
              </b-button>
            </b-card>
          </b-col>
        </b-row>
      </b-container>
    </div>

    <!-- Projects Section -->
    <div id="projects" class="mt-5">
      <b-container>
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
    <div id="projects" class="mt-5">
      <b-container>
        <!-- My Story -->
        <div class="container my-4">
          <h1 class="text-center mb-2">MY LATEST BLOG</h1>
          <p class="text-center text-muted mb-4">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form.
          </p>
          <b-row>
            <b-col
              v-for="(post, index) in blogPosts"
              :key="index"
              md="4"
              class="mb-4"
            >
              <b-card>
                <b-img
                  :src="post.imageUrl"
                  :alt="post.title"
                  class="card-img-top"
                  height="200"
                />
                <b-card-header class="project-card">
                  <div class="text-muted">{{ post.date }}</div>
                  <h5 class="mb-0">{{ post.title }}</h5>
                </b-card-header>
                <b-card-body>
                  <p class="text-muted">{{ post.excerpt }}</p>
                </b-card-body>
              </b-card>
            </b-col>
          </b-row>
        </div>
      </b-container>
    </div>

    <!-- Contact Section -->
    <div id="contact">
      <b-container class="">
        <b-row>
          <b-col md="12" class="mt-5">
            <h1 class="text-center">
              <span class="text-danger">—</span> Contact Me
              <span class="text-danger">—</span>
            </h1>
          </b-col>
        </b-row>
        <!-- Grid Section -->
        <b-row>
          <!-- Contact Info Column -->
          <b-col md="6" class="mb-4">
            <b-card class="p-4 shadow-sm">
              <h3
                class="h5 font-weight-semibold border-left pl-2 border-danger mb-3"
              >
                Email
              </h3>
              <p>rohitkrgupta333@gmail.com</p>
              <!-- <p>support@domain.com</p> -->

              <h3
                class="h5 font-weight-semibold border-left pl-2 border-danger mb-3 mt-4"
              >
                Visit My Office
              </h3>
              <p>Ontrack Technologies Pvt. LTD.,</p>
              <p>Indiranagar, Bengaluru 560008</p>

              <h3
                class="h5 font-weight-semibold border-left pl-2 border-danger mb-3 mt-4"
              >
                Phone
              </h3>
              <p>+91 7079812442</p>

              <div class="d-flex justify-content-start mt-4">
                <b-icon icon="facebook" variant="dark" class="mr-2" />
                <b-icon icon="twitter" variant="dark" class="mr-2" />
                <b-icon icon="instagram" variant="dark" class="mr-2" />
                <b-icon icon="linkedin" variant="dark" />
              </div>
            </b-card>
          </b-col>

          <!-- Contact Form Column -->
          <b-col md="6" class="mb-4">
            <b-card class="p-4 shadow-sm">
              <h3
                class="h5 font-weight-semibold border-left pl-2 border-danger mb-3"
              >
                Get In Touch
              </h3>
              <b-form @submit.prevent="onSubmit">
                <b-row>
                  <b-col md="6" class="mb-2">
                    <b-form-input placeholder="Name *" required></b-form-input>
                  </b-col>
                  <b-col md="6">
                    <b-form-input
                      type="email"
                      placeholder="Email *"
                      required
                    ></b-form-input>
                  </b-col>
                </b-row>
                <b-form-input
                  placeholder="Subject *"
                  class="my-3"
                  required
                ></b-form-input>
                <b-form-textarea
                  placeholder="Your message *"
                  rows="4"
                  required
                ></b-form-textarea>
                <b-button type="submit" variant="danger" class="mt-3"
                  >Contact Me</b-button
                >
              </b-form>

              <!-- Toast -->
              <b-toast
                id="toast"
                variant="success"
                solid
                ref="toast"
                :auto-hide="true"
                :delay="3000"
              >
                Your message has been sent! We’ll review it and get back to you
                within 24 hours.
              </b-toast>
            </b-card>
          </b-col>

          <b-col class="my-4">
            <h3
              class="font-weight-semibold border-left pl-2 border-danger mb-3"
            >
              Our Location
            </h3>
            <b-card>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.995889009668!2d77.63960807412035!3d12.972114514868895!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae16a77f100f77%3A0xc5ec8c9958653929!2sOntrack%20%7C%20Bike%20Rentals%20in%20Bangalore%20-%20Corporate%20Office!5e0!3m2!1sen!2sin!4v1727532902695!5m2!1sen!2sin"
                width="100%"
                height="300"
                style="border: 0"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </b-card>
          </b-col>
        </b-row>
      </b-container>

      <footer class="bg-dark border-top">
        <div class="container py-4 py-md-5">
          <b-row>
            <!-- About Section -->
            <b-col md="4" class="mb-4 mb-md-0">
              <h3 class="h5 font-weight-bold text-info">Rohit Kr. Gupta</h3>
              <p class="text-light">
                A passionate web developer crafting beautiful and functional
                websites.
              </p>
            </b-col>

            <!-- Quick Links Section -->
            <b-col md="4" class="mb-4 mb-md-0">
              <h3 class="h5 font-weight-bold text-info">Quick Links</h3>
              <nav class="d-flex flex-row flex-wrap">
                <b-link href="/" class="text-light mr-3">Home</b-link>
                <b-link href="#about" class="text-light mr-3">About</b-link>
                <b-link href="#projects" class="text-light mr-3"
                  >Projects</b-link
                >
                <b-link href="#contact" class="text-light">Contact</b-link>
              </nav>
            </b-col>

            <!-- Contact Info Section -->
            <b-col md="4">
              <h3 class="h5 font-weight-bold text-info">Follow Me</h3>
              <div class="d-flex">
                <b-link
                  href="https://github.com/rkgupta-dev"
                  class="text-light mr-3"
                >
                  <b-icon icon="github" aria-hidden="true"></b-icon>
                  <span class="sr-only">GitHub</span>
                </b-link>
                <b-link
                  href="https://www.linkedin.com/in/rohit-kr-gupta-921760208/"
                  class="text-light mr-3"
                >
                  <b-icon icon="linkedin" aria-hidden="true"></b-icon>
                  <span class="sr-only">LinkedIn</span>
                </b-link>
                <b-link href="https://twitter.com" class="text-light mr-3">
                  <b-icon icon="twitter" aria-hidden="true"></b-icon>
                  <span class="sr-only">Twitter</span>
                </b-link>
                <b-link href="" class="text-light">
                  <b-icon icon="envelope" aria-hidden="true"></b-icon>
                  <span class="sr-only">Email</span>
                </b-link>
              </div>
            </b-col>
          </b-row>

          <!-- Footer Bottom Section -->
          <div class="mt-4 pt-4 border-top text-center text-light">
            <p>&copy; {{ currentYear }} Rohit Kr Gupta. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  </div>
</template>

<script>
export default {
  name: "LandingPage",
  data() {
    return {
      isScrolled: false,
      currentYear: new Date().getFullYear(),
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

      blogPosts: [
        {
          date: "22 Aug 2020",
          title: "We have announced our new product.",
          excerpt:
            "Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum Has Been The Industry's Standard.",
          imageUrl:
            "data:image/png;base64,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",
        },
        {
          date: "15 Jul 2020",
          title: "Top five ways for learning web development.",
          excerpt:
            "Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum Has Been The Industry's Standard.",
          imageUrl: "data:image/jpeg;base64,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",
        },
        {
          date: "05 Jan 2020",
          title: "We provide highly business solutions.",
          excerpt:
            "Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum Has Been The Industry's Standard.",
          imageUrl: "data:image/jpeg;base64,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",
        },
      ],
    };
  },
  methods: {
    handleScroll() {
      this.isScrolled = window.scrollY > 30; // Change this value as needed
    },
    onSubmit() {
      // Show toast notification on form submission
      this.$refs.toast.show();
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

/* Hover effect for projects cards */
.project-card {
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  background-image: radial-gradient(
    circle 993px at 0.5% 50.5%,
    rgba(137, 171, 245, 0.37) 0%,
    rgba(245, 247, 252, 1) 100.2%
  );
}

.project-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}
</style>
