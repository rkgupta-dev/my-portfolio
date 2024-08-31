<template>
  <b-container fluid class="py-5 bg-light text-center">
    <b-row>
      <b-col lg="4" class="d-flex flex-column align-items-center">
        <b-avatar   :src="require('@/assets/dp1.png')" size="8rem" />
        <b-button variant="primary" class="mt-3">Download Resume</b-button>
      </b-col>
      <b-col lg="8" class="d-flex flex-column justify-content-center">
        <h2 class="h3 font-weight-bold">About Me</h2>
        <p class="lead text-muted">
          Hi, I'm Rohit Kr. Gupta, a passionate web developer with a love for creating
          beautiful and functional websites. I have several years of experience
          in the industry, working with a variety of technologies and
          frameworks. I'm always eager to learn and grow, and I'm excited to
          bring my skills to your next project.
        </p>
      </b-col>
    </b-row>
  </b-container>
</template>


<script>
export default {
  name: 'AboutPage',
};
</script>
