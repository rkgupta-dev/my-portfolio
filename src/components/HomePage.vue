<template>
  <div>
    <!-- Hero Section -->
    <b-container class="text-left my-4 fade-in ">
      <b-row>
        <b-col md="6" class="d-flex align-items-center">
          <div>
            <h1 class="text-muted">Welcome to My Portfolio</h1>
            <div class="my-4">
              <h5>Hey, I'm Rohit 👋🏻</h5>
              <h1 class="display-4">
                <strong><span class="text-success">Front</span>end</strong>
              </h1>
              <h1 class="display-4"><strong>Developer</strong></h1>
              <p class="lead">
                <strong>
                  Hi, I'm Rohit Kumar Gupta, a passionate frontend developer
                  who loves creating interactive and responsive web
                  applications.
                </strong>
              </p>
              <!-- Buttons -->
              <b-button to="/contact" variant="primary" class="mr-2">
                Get in Touch
              </b-button>
              <b-button to="/projects" variant="outline-dark">
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
    <hr/>

    <!-- Projects Section -->
    <ProjectsPage />
  </div>
</template>

<script>
import ProjectsPage from '@/components/ProjectsPage.vue'; // Adjust the path accordingly

export default {
  name: 'HomePage',
  components: {
    ProjectsPage
  }
};
</script>

<style scoped>
.fade-in {
  animation: fadeIn 2s;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
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
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
