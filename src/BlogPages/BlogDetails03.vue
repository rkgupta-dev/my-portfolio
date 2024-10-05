<template>
  <div>
    <b-card-header>
      <h2 class="text-center">Top 5 Ways to Learn Web Development</h2>
    </b-card-header>
    <b-container>
      <b-row>
        <b-col cols="12">
          <p class="text-muted text-center my-4">
            Web development is a dynamic and rewarding field, with endless
            opportunities for those willing to learn. Whether you're a complete
            beginner or looking to enhance your skills, there are various
            resources and methods to help you on your journey. Here are the top
            five ways to learn web development effectively:
          </p>
        </b-col>
      </b-row>

      <div v-for="(method, index) in learningMethods" :key="index" class="my-4">
        <b-card class="shadow">
          <h4>{{ method.title }}</h4>
          <p>{{ method.description }}</p>
          <b-list-group>
            <b-list-group-item
              v-for="(course, courseIndex) in method.courses"
              :key="courseIndex"
            >
              <b>{{ course.name }}</b> - {{ course.platform }}
            </b-list-group-item>
          </b-list-group>
          <b-button variant="link" @click="showProjectIdeas(index)"
            >Project Ideas</b-button
          >
          <b-collapse
            :id="'project-ideas-' + index"
            class="mt-2"
            :visible="visibleProjectIndex === index"
          >
            <b-card class="mt-2">
              <ul>
                <li
                  v-for="(idea, ideaIndex) in method.projectIdeas"
                  :key="ideaIndex"
                >
                  {{ idea }}
                </li>
              </ul>
            </b-card>
          </b-collapse>
        </b-card>
      </div>

      <p>
        Learning web development is an exciting journey filled with
        opportunities for creativity and problem-solving. By leveraging online
        courses, interactive platforms, real-world projects, community support,
        and staying updated, you can develop the skills needed to thrive in this
        ever-evolving field. Start your journey today and unlock the endless
        possibilities of web development!
      </p>
    </b-container>
  </div>
</template>

<script>
export default {
  name: "BlogDetails03",
  data() {
    return {
      visibleProjectIndex: null,
      learningMethods: [
        {
          title: "1. Online Courses and Tutorials",
          description:
            "One of the best ways to kickstart your web development journey is through online courses. Platforms like Udemy, Coursera, and Codecademy offer comprehensive courses covering everything from HTML and CSS to JavaScript, front-end frameworks, and back-end development.",
          courses: [
            {
              name: "The Complete Web Development Bootcamp",
              platform: "Udemy",
            },
            { name: "Web Development Specialization", platform: "Coursera" },
          ],
          projectIdeas: [
            "Portfolio website to showcase your skills",
            "Blog using a static site generator",
          ],
        },
        {
          title: "2. Interactive Coding Platforms",
          description:
            "Interactive coding platforms like freeCodeCamp and LeetCode allow you to practice coding in a hands-on environment.",
          courses: [],
          projectIdeas: [
            "Complete the freeCodeCamp curriculum",
            "Participate in coding challenges on LeetCode",
          ],
        },
        {
          title: "3. Build Real Projects",
          description:
            "Nothing beats hands-on experience. Start by building your own projects, whether a personal website, a blog, or a web application.",
          courses: [],
          projectIdeas: [
            "Simple web applications like a to-do list or weather app",
            "Clone an existing website to practice",
          ],
        },
        {
          title: "4. Join Developer Communities",
          description:
            "Connecting with other web developers can provide valuable insights and support. Join online forums, social media groups, or local meetups.",
          courses: [],
          projectIdeas: [
            "Participate in discussions on Stack Overflow",
            "Join local tech events or webinars",
          ],
        },
        {
          title: "5. Stay Updated with Trends and Technologies",
          description:
            "Follow blogs, podcasts, and YouTube channels dedicated to web development to stay informed about the latest trends and technologies.",
          courses: [],
          projectIdeas: [
            "Subscribe to web development newsletters",
            "Follow popular YouTube channels for tutorials",
          ],
        },
      ],
    };
  },
  methods: {
    showProjectIdeas(index) {
      this.visibleProjectIndex =
        this.visibleProjectIndex === index ? null : index;
    },
  },
};
</script>

<style scoped>
/* Add any additional styles here */
</style>
