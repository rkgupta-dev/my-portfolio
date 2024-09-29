<!-- <template>
  <div>
    <!-- Button to open the camera -->
    <b-button @click="openCamera" variant="primary">Open Camera</b-button>

    <!-- Hidden file input for capturing the image -->
    <input
      ref="cameraInput"
      type="file"
      accept="image/*"
      capture="environment"
      @change="captureImage"
      style="display: none;"
    />

    <!-- Display the captured image -->
    <div v-if="imageData">
      <h5>Captured Image:</h5>
      <b-img :src="imageData" alt="Captured Image" fluid />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      imageData: null, // Stores the captured image data
    };
  },
  methods: {
    // This method triggers the hidden input when the button is clicked
    openCamera() {
      this.$refs.cameraInput.click();
    },
    // This method handles the image selection and renders it
    captureImage(event) {
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
          this.imageData = e.target.result;
        };
        reader.readAsDataURL(file);
      }
    },
  },
};
</script>

<style scoped>
/* Add any custom styles here */
</style> -->
