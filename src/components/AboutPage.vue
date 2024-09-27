<template>
  <b-container class="mt-5" fluid>
  <b-row>
    <b-col md="12">
      <h1 class="text-center">About Me</h1>
      <p class="lead text-center">
        We are a team of passionate individuals dedicated to making a difference in the world through technology.
      </p>
    </b-col>
  </b-row>

  <b-row class="my-5 md-4">
    <b-col v-for="(member, index) in teamMembers" :key="index" md="6">
      <b-card :title="member.name" :img-src="member.image" img-alt="Image" img-left>
        <b-card-text>
          {{ member.description }}
        </b-card-text>
        <b-button variant="primary">Learn More</b-button>
      </b-card>
    </b-col>
  </b-row>
</b-container>

</template>

<script>
export default {
  name: 'AboutPage',
  data() {
    return {
      teamMembers: [
        {
          name: "About Me",
          image: "https://via.placeholder.com/150",
          description: "A passionate developer with a love for coding and innovation."
        },
        {
          name: "About Me",
          image: "https://via.placeholder.com/150",
          description: "A passionate developer with a love for coding and innovation."
        },
      
        
      ]
    };
  }
};
</script>

<style scoped>
h1 {
  margin-bottom: 20px;
}
</style>
