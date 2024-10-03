<template>
  <div>
    <b-container>
      <b-row class="mb-4 mt-4">
        <b-col>
          <h1 class="text-center">About Me</h1>
        </b-col>
      </b-row>

      <b-row>
        <!-- Story Section -->
        <b-col md="12">
          <b-card>
            <h3
              class="h5 font-weight-semibold border-left pl-2 border-danger mb-3"
            >
              My Story
            </h3>
            <p>
              My journey as a front-end developer started back in 2018, working
              as a freelancer for clients all over the world.
            </p>
            <p>
              After being on my own for a while, I decided to enter the
              corporate world, and I started working as a software developer at
              Ontrack Technology Pvt. Ltd.
            </p>
            <p>
              After some exciting months of work, I transitioned to Stripe,
              returning to what I love: front-end development.
            </p>
            <p>
              My success quickly compounded, and I started receiving job offers
              from the biggest names in the industry.
            </p>
            <p>
              All these opportunities led me to travel the world. Eventually,
              however, I decided to settle down for a calmer routine, and I'm
              now working at Apple. And you know what? I love what I do! 💜
            </p>
          </b-card>
        </b-col>

        <!-- Qualifications Section -->
        <b-col md="6">
          <b-card title="My Qualifications" class="mb-4">
            <ul>
              <li>Master's in Computer Science</li>
              <li>Bachelor's in Information Technology</li>
              <li>Certified in Full-Stack Web Development</li>
            </ul>
          </b-card>
        </b-col>
      </b-row>

      <b-row>
        <!-- Skills Section -->
        <b-col md="6">
          <b-card title="My Skills" class="mb-4">
            <b-list-group>
              <b-list-group-item
                >Frontend Development: HTML, CSS, JavaScript, Vue.js,
                React</b-list-group-item
              >
              <b-list-group-item
                >Backend Development: Node.js, Express,
                Python</b-list-group-item
              >
              <b-list-group-item
                >Database Management: MySQL, MongoDB</b-list-group-item
              >
              <b-list-group-item
                >Version Control: Git, GitHub</b-list-group-item
              >
            </b-list-group>
          </b-card>
        </b-col>

        <!-- Contact Section -->
        <b-col md="6">
          <b-card title="Contact Me" class="mb-4">
            <p>
              If you’d like to collaborate or discuss opportunities, feel free
              to reach out to me!
            </p>
            <b-button href="mailto:example@email.com" variant="primary"
              >Email Me</b-button
            >
          </b-card>
        </b-col>
      </b-row>

      <b-row>
        <!-- Footer Section -->
        <b-col>
          <b-card class="text-center">
            <p>&copy; 2024 My Portfolio. All rights reserved.</p>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: "CricketScoring",
};
</script>

<style scoped>
h1 {
  font-family: "Arial", sans-serif;
  color: #007bff;
}
</style>
