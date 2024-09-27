<template>
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
            class="fade-in my-4  project-card"
          >
            <b-card-text>
              {{ project.description }}
            </b-card-text>
            <b-button variant="primary" :href="project.link" target="_blank"
              >View Project</b-button
            >
          </b-card>
        </b-col>
      </b-row>
    </div>
  
    <!-- Start My Skills Page in ProjectPage.vue-->
    <div>
      <b-container fluid class="p-4">
        <div>
          <h1 class="text-center mb-4">My Skills</h1>
          <b-row>
            <!-- Web Design Skills -->
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

            <!-- Frontend Skills -->
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

            <!-- Backend Skills -->
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
        </div>
      </b-container>
    </div>

    <!-- Start My Story Page in ProjectPage.vue-->
    <div>
    <b-container fluid class="p-4">
      <h1 class="text-center mb-4">My Story</h1>
      <b-row>
        <b-col md="12">
          <b-card class="p-3">
            <p>
              My journey as a front-end developer started back in 2018, working as a freelancer for clients all over the world for several years.
            </p>
            <p>
              After being on my own for a while, I decided to enter the corporate world, and I started working as a software developer at Ontrack Technology Pvt. Ltd., the same platform I was using with my freelance clients.
            </p>
            <p>
              After some exciting months of work at Ontrack Technology Pvt. Ltd., I decided to transition to Stripe, where I returned to what I love: front-end development.
            </p>
            <p>
              My success quickly compounded, and I started receiving job offers from the biggest names in the industry.
            </p>
            <p>
              All these opportunities led me to travel the world. Eventually, however, I decided to settle down for a more calm and simple routine, and I'm now working at Apple. And you know what? I love what I do! 💜
            </p>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
  </div>

  </b-container>
</template>

<script>
export default {
  name: "ProjectsPage",
  data() {
    return {
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
h1 {
  font-size: 2.5rem;
  font-weight: bold;
}

p {
  font-size: 1.2rem;
  line-height: 1.6;
  margin-bottom: 1rem;
}

ul {
  list-style-type: none;
  padding-left: 0;
}

li {
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
}

/* Hover effect for cards */
.skill-card {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.skill-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

.fade-in {
  animation: fadeIn 1s ease-in-out;
}

@keyframes fadeIn {
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 3;
    transform: translateY(0);
  }
}
/* Image zoom effect on hover */
.project-card img {
  transition: transform 0.3s ease-in-out; /* Smooth transition */
}

.project-card img:hover {
  transform: scale(1.05); /* Slight zoom effect */
}
</style>
