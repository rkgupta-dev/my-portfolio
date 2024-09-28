<template>
  <b-container class="bg-light" fluid>
    <b-row>
      <b-col md="12" class="mt-5">
        <h1 class="text-center">About Me</h1>
        <p class="lead text-center">
          I’m a creative developer passionate about using technology to solve
          real-world problems and improve user experiences in the digital
          landscape.
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
            I am a frontend developer with expertise in creating intuitive and
            responsive user interfaces. I specialize in leveraging modern
            frameworks such as Bootstrap Vue, Vue.js, and more to craft seamless
            web experiences. My focus is on building efficient, accessible, and
            visually engaging solutions that meet user needs while ensuring
            top-notch performance and maintainability.
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
            Creative web solutions utilizing design principles and coding expertise.
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
</template>

<script>
export default {
  name: "AboutPage",
  data() {
    return {
      teamMembers: [
        {
          name: "About Me",
          image: "https://via.placeholder.com/150",
          description:
            "A passionate developer with a love for coding and innovation.",
        },
      ],
    };
  },
};
</script>

<style scoped>
h1 {
  margin-bottom: 20px;
}
.font-size {
  font-size: 1.2rem; /* You can adjust the size as needed */
}

/* Hover effect for cards */
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
</style>
