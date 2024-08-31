<template>
  <b-container fluid class="py-5 bg-light text-center">
    <h2 class="h3 font-weight-bold">Get in Touch</h2>
    <p class="lead text-muted">
      Have a project in mind or just want to say hello? Fill out the form below
      and I'll get back to you as soon as I can.
    </p>
    <b-form @submit="onSubmit" class="mt-4 mx-auto" style="max-width: 600px">
      <b-form-group label="Name">
        <b-form-input type="text" placeholder="Name" required />
      </b-form-group>
      <b-form-group label="Email">
        <b-form-input type="email" placeholder="Email" required />
      </b-form-group>
      <b-form-group label="Message">
        <b-form-textarea placeholder="Message" rows="5" required />
      </b-form-group>
      <b-button type="submit" variant="primary" block>
        Submit
      </b-button>
    </b-form>
  </b-container>
</template>

<script>
export default {
  methods: {
    onSubmit(event) {
      event.preventDefault();
      // Handle form submission
    },
  },
};
</script>
