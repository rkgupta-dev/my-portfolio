<!-- <template>
  <b-container class="d-flex justify-content-center align-items-center">
    <b-list-group horizontal>
      <b-list-group-item v-for="(item, index) in socialMediaLinks" :key="index" class="icon-content">
        <b-button 
          :href="item.link" 
          aria-label="item.label" 
          variant="link" 
          class="social-button" 
          v-b-tooltip.hover="'Click to visit ' + item.label"
        >
          <div class="filled"></div>
          <b-icon :icon="item.icon" class="icon" />
        </b-button>
      </b-list-group-item>
    </b-list-group>
  </b-container>
</template>

<script>
export default {
  data() {
    return {
      socialMediaLinks: [
        { label: 'LinkedIn', link: 'https://linkedin.com/', icon: 'linkedin' },
        { label: 'GitHub', link: 'https://github.com/', icon: 'github' },
        { label: 'Instagram', link: 'https://instagram.com/', icon: 'instagram' },
        { label: 'YouTube', link: 'https://youtube.com/', icon: 'youtube' },
      ],
    };
  },
};
</script>

<style scoped>
.icon-content {
  position: relative;
}
.social-button {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  position: relative;
  overflow: hidden;
  color: #4d4d4d;
  transition: all 0.3s ease-in-out;
}

.social-button:hover {
  color: white;
}

.social-button:hover .filled {
  height: 100%;
}

.filled {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 0;
  background-color: #000;
  transition: all 0.3s ease-in-out;
}

.icon {
  width: 30px;
  height: 30px;
}

.icon-content a[data-social="linkedin"] .filled {
  background-color: #0274b3;
}

.icon-content a[data-social="github"] .filled {
  background-color: #24262a;
}

.icon-content a[data-social="instagram"] .filled {
  background: linear-gradient(45deg, #405de6, #5b51db, #b33ab4, #c135b4, #e1306c, #fd1f1f);
}

.icon-content a[data-social="youtube"] .filled {
  background-color: #ff0000;
}
</style>
