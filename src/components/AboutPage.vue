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
          <b-card class="bg-light">
            <h3
              class="h5 font-weight-semibold border-left pl-2 border-danger mb-3"
            >
              My Story
            </h3>
            <p>
              My journey as a front-end developer started back in 2020, working
              as a freelancer for clients all over the world.
            </p>
            <p>
              After being on my own for a while, I decided to enter the
              corporate world, and I started working as a front-end developer at
              Ontrack Technology Pvt. Ltd, Bengaluru.
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
        <b-col md="12" class="my-4">
          <b-card class="project-card">
            <h3
              class="h5 font-weight-semibold border-left pl-2 border-danger mb-3"
            >
              My Qualifications
            </h3>

            <b-row class="mt-4">
              <b-col cols="12" md="6" lg="6" class="my-2">
                <b-card class="study">
                  <i class="fa-solid fa-graduation-cap fa-2x"></i>
                  <b-badge variant="success">2015-2016</b-badge>
                  <h3>Matriculation Passout</h3>
                  <p>
                    I completed 10th with 62% from Utkarmita High School,
                    Bairiya, Giridih.
                  </p>
                </b-card>
              </b-col>

              <b-col cols="12" md="6" lg="6" class="my-2">
                <b-card class="study">
                  <i class="fa-solid fa-graduation-cap fa-2x"></i>
                  <b-badge variant="success">2016-2018</b-badge>
                  <h3>Intermediate Passout</h3>
                  <p>
                    I completed 12th with 64% from Jagdish Prasad Kushwaha
                    College of Competence, Dhanwar, Giridih.
                  </p>
                </b-card>
              </b-col>

              <b-col cols="12" md="6" lg="6" class="my-2">
                <b-card class="study">
                  <i class="fa-solid fa-graduation-cap fa-2x"></i>
                  <b-badge variant="success">2018-2021</b-badge>
                  <h3>College Student</h3>
                  <p>
                    I completed BCA with 75% from Doranda College Ranchi,
                    Jharkhand.
                  </p>
                </b-card>
              </b-col>

              <b-col cols="12" md="6" lg="6" class="my-2">
                <b-card class="study">
                  <i class="fa-solid fa-graduation-cap fa-2x"></i>
                  <b-badge variant="success">2020-Present</b-badge>
                  <h3>Founder & CEO of RK_Tech 7</h3>
                  <p>
                    RK_Tech 7 is a YouTube channel where I help with programming
                    languages.
                  </p>
                </b-card>
              </b-col>
            </b-row>
          </b-card>
        </b-col>
      </b-row>

      <div class="text-center mb-4">
        <h1 class="education_heading">Education</h1>
      </div>

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
  name: "AboutPage",
};
</script>

<style scoped>
.project-card {
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  background-image: radial-gradient(
    circle 993px at 0.5% 50.5%,
    rgba(137, 171, 245, 0.37) 0%,
    rgba(245, 247, 252, 1) 100.2%
  );
}

.study {
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  
}

.study:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}
</style>
