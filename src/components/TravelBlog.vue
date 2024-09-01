<template>
    <div id="travel-blog">
      <!-- Navigation Bar -->
      <b-navbar toggleable="lg" type="light" variant="light">
        <b-navbar-brand href="#">Travel Blog</b-navbar-brand>
        <b-navbar-nav class="ml-auto">
          <b-nav-item href="#">Home</b-nav-item>
          <b-nav-item href="#">About</b-nav-item>
          <b-nav-item href="#">Blog</b-nav-item>
          <b-nav-item href="#">Contact</b-nav-item>
        </b-navbar-nav>
      </b-navbar>
  
      <!-- Hero Section -->
      <b-jumbotron header="Welcome to My Travel Blog" lead="Discover my travel experiences, tips, and guides.">
        <b-button variant="primary" href="#blog">Explore Blog</b-button>
      </b-jumbotron>
  
      <!-- Blog Post Previews -->
      <b-container>
        <h2 class="text-center">Latest Posts</h2>
        <b-row>
          <b-col md="4" v-for="post in posts" :key="post.id">
            <b-card :title="post.title" :img-src="post.image" img-alt="Post Image" img-top>
              <b-card-text>
                {{ post.excerpt }}
              </b-card-text>
              <b-button variant="primary" @click="viewPost(post.id)">Read More</b-button>
            </b-card>
          </b-col>
        </b-row>
      </b-container>
  
      <!-- Footer -->
      <b-footer class="text-center">
        &copy; 2024 Travel Blog by Rohit Kumar Gupta
      </b-footer>
    </div>
  </template>
  
  <script>
  export default {
    name: "TravelBlog",
    data() {
      return {
        posts: [
          { id: 1, title: "My Trip to Paris", image: "paris.jpg", excerpt: "An amazing journey through the city of light..." },
          { id: 2, title: "Exploring the Alps", image: "alps.jpg", excerpt: "Hiking through the breathtaking mountains..." },
          { id: 3, title: "A Weekend in New York", image: "nyc.jpg", excerpt: "The city that never sleeps and always amazes..." },
        ]
      };
    },
    methods: {
      viewPost(id) {
        alert(`Viewing post with ID: ${id}`);
        // You can navigate to a post detail page or show the full post content here
      }
    }
  };
  </script>
  
  <style>
  #travel-blog {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }
  
  b-container {
    flex: 1;
  }
  
  b-footer {
    background-color: #f8f9fa;
    padding: 1rem 0;
  }
  
  .text-center {
    text-align: center;
  }
  </style>
  