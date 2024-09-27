<template>
  <b-container class="bg-light" fluid>
    <b-row>
      <b-col md="12" class="mt-5">
        <h1 class="text-center">About Me</h1>
        <p class="lead text-center">
          We are a team of passionate individuals dedicated to making a
          difference in the world through technology.
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
        <hr/>
        <b-col md="12" class="my-2">
          <h3 class="text-center text-success">My Skills</h3>
          <p class="lead text-center">
            We are a team of passionate individuals dedicated to making a
            difference in the world through technology.
          </p>
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
</style>
