<template>
  <b-container class="mt-5">
    <b-row>
      <b-col md="12">
        <h1 class="text-center">About Us</h1>
        <p class="lead text-center">
          We are a team of passionate individuals dedicated to making a difference in the world through technology.
        </p>
      </b-col>
    </b-row>

    <b-row class="mt-5">
      <b-col md="4" v-for="(member, index) in teamMembers" :key="index">
        <b-card :title="member.name" :img-src="member.image" img-alt="Image" img-top>
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
          name: "John Doe",
          image: "https://via.placeholder.com/150",
          description: "A passionate developer with a love for coding and innovation."
        },
        {
          name: "Jane Smith",
          image: "https://via.placeholder.com/150",
          description: "A creative designer focused on user experience and visual storytelling."
        },
        {
          name: "Alice Johnson",
          image: "https://via.placeholder.com/150",
          description: "A project manager dedicated to ensuring timely delivery."
        }
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
