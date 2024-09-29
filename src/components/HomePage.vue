<template>
  <div class="social-icons">
    <a href="https://github.com" target="_blank" rel="noopener noreferrer">
      <b-icon icon="fab fa-github" class="icon" />
    </a>
    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
      <b-icon icon="fab fa-linkedin" class="icon" />
    </a>
    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
      <b-icon icon="fab fa-instagram" class="icon" />
    </a>
    <a href="mailto:youremail@example.com">
      <b-icon icon="fas fa-envelope" class="icon" />
    </a>
  </div>
</template>

<script>
import "@fortawesome/fontawesome-free/css/all.min.css";
export default {
  name: 'SocialMediaIcons',
};
</script>

<style scoped>
.social-icons {
  display: flex;
  gap: 15px; /* Space between icons */
}

.icon {
  font-size: 24px; /* Size of icons */
  color: #333; /* Default icon color */
  transition: color 0.3s; /* Smooth color transition */
}

.icon:hover {
  color: #007bff; /* Color change on hover */
}
</style>
