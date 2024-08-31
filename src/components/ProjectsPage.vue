<template>
  <b-container class="mt-5">
    <h2 class="text-center fade-in">Projects</h2>
    <b-row>
      <b-col
        md="4"
        v-for="(project, index) in projects"
        :key="index"
        class="mb-4 fade-in"
      >
        <b-card
          :title="project.title"
          img-src="project.img"
          img-alt="project.title"
          img-top
          class="fade-in"
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
  </b-container>
</template>

<script>
export default {
  name: 'ProjectsPage',
  data() {
    return {
      projects: [
        {
          title: 'Portfolio Website',
          description:
            'A personal portfolio website built with Vue.js and BootstrapVue.',
          img: '@/assets/rohit.jpg',
          link: '#',
        },
        {
          title: 'Travel Blog',
          description:
            'A travel blog showcasing beautiful destinations around the world.',
          img: 'https://via.placeholder.com/300',
          link: '#',
        },
        {
          title: 'Travel Blog',
          description:
            'A travel blog showcasing beautiful destinations around the world.',
          img: 'https://via.placeholder.com/300',
          link: '#',
        },
        {
          title: 'Travel Blog',
          description:
            'A travel blog showcasing beautiful destinations around the world.',
          img: 'https://via.placeholder.com/300',
          link: '#',
        },
        // Add more projects here
      ],
    };
  },
};
</script>

<style>
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
