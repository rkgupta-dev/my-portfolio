<template>
  <div>
    <!-- Header Section with Background Image -->
    <b-container
      fluid
      class="text-center py-5 header-section"
      style="
        background-image: linear-gradient(180deg, rgba(21, 13, 107, 1) 1.1%, rgba(188, 16, 80, 1) 130.5%);
        color: white;
      "
    >
      <h1 class="display-4 font-weight-bold">
        PrimeBazaar - Redefining Your Shopping Experience
      </h1>
      <p class="lead text-white-50">
        PrimeBazaar isn’t just an e-commerce platform; it’s a shopping journey
        designed to connect customers to products they love in the most
        seamless, efficient, and enjoyable way possible.
      </p>
      <!-- View Website Button -->
      <b-button
        variant="primary"
        href="https://primebazaar.com"
        target="_blank"
        class="mt-3"
      >
        View Website
      </b-button>
    </b-container>

    <!-- Why PrimeBazaar Section with Icons -->
    <b-container class="my-5">
      <h2 class="text-center mb-4">Why PrimeBazaar?</h2>
      <b-row>
        <b-col cols="12" md="6" class="d-flex flex-column align-items-center">
          <b-icon icon="people" variant="primary" font-scale="3"></b-icon>
          <blockquote class="blockquote text-center mt-3">
            <p>
              “Our vision is to simplify, personalize, and elevate the way
              people shop online.”
            </p>
          </blockquote>
        </b-col>
        <b-col cols="12" md="6">
          <ul class="list-unstyled">
            <li>
              <b-icon icon="shop" class="mr-2"></b-icon
              ><strong>One-Stop Destination</strong> - Find everything you need
              in one place.
            </li>
            <li>
              <b-icon icon="check-circle" class="mr-2"></b-icon
              ><strong>Top-Tier Quality</strong> - Carefully selected suppliers
              ensure product quality.
            </li>
            <li>
              <b-icon icon="hand-thumbs-up" class="mr-2"></b-icon
              ><strong>Unmatched Convenience</strong> - An intuitive interface,
              from product discovery to checkout.
            </li>
            <li>
              <b-icon icon="tags" class="mr-2"></b-icon
              ><strong>Value for Money</strong> - Competitive pricing and deals
              that make your money go further.
            </li>
          </ul>
        </b-col>
      </b-row>
    </b-container>

    <!-- Exciting Features Section with Fixed Card Dimensions -->
    <b-container class="my-5">
      <h2 class="text-center mb-4">Exciting Features</h2>
      <b-row>
        <b-col cols="12" md="4">
          <b-card
            title="Curated Categories"
            class="mb-3"
            bg-variant="info"
            text-variant="white"
          >
            <p>Easy access to Electronics, Fashion, and Home & Living.</p>
          </b-card>
        </b-col>
        <b-col cols="12" md="4">
          <b-card
            title="Deals of the Day"
            class="mb-3"
            bg-variant="success"
            text-variant="white"
          >
            <p>Daily updates with exclusive discounts and special prices.</p>
          </b-card>
        </b-col>
        <b-col cols="12" md="4">
          <b-card
            title="Interactive Cart Modal"
            class="mb-3"
            bg-variant="primary"
            text-variant="white"
          >
            <p>
              View, adjust, and remove items seamlessly with a modern, modal
              interface.
            </p>
          </b-card>
        </b-col>
      </b-row>
      <b-row>
        <b-col cols="12" md="4">
          <b-card
            title="Admin Control Center"
            class="mb-3"
            bg-variant="danger"
            text-variant="white"
          >
            <p>
              Empowered admin dashboard for inventory control and user insights.
            </p>
          </b-card>
        </b-col>
        <b-col cols="12" md="4">
          <b-card
            title="Personalized Shopping"
            class="mb-3"
            bg-variant="warning"
            text-variant="white"
          >
            <p>
              Users see tailored recommendations and can manage their personal
              information, enhancing trust and ease.
            </p>
          </b-card>
        </b-col>
      </b-row>
    </b-container>

    <!-- Technology Stack Section with Icon Headers -->
    <b-container class="my-5">
      <h2 class="text-center mb-4">PrimeBazaar Technology Stack</h2>
      <ul class="list-unstyled">
        <li>
          <b-icon icon="cpu" variant="secondary" class="mr-2"></b-icon
          ><strong>Frontend:</strong> Vue.js + Bootstrap Vue for fast,
          responsive, and elegant user interfaces.
        </li>
        <li>
          <b-icon icon="server" variant="secondary" class="mr-2"></b-icon
          ><strong>Data Handling:</strong> LocalStorage for fast cart and user
          data retrieval.
        </li>
        <li>
          <b-icon icon="palette" variant="secondary" class="mr-2"></b-icon
          ><strong>Styling:</strong> Custom, sleek Bootstrap styling with Vue
          components.
        </li>
      </ul>
    </b-container>

    <!-- Future Vision Section with Hover Effect -->
    <b-container class="my-5">
      <h2 class="text-center mb-4">PrimeBazaar’s Future Vision</h2>
      <ul class="list-unstyled">
        <li>
          <b-icon icon="lightbulb" variant="info" class="mr-2"></b-icon
          ><strong>Smarter Shopping</strong> - AI-powered recommendations to
          enhance the user experience.
        </li>
        <li>
          <b-icon icon="graph-up" variant="info" class="mr-2"></b-icon
          ><strong>Real-Time Analytics</strong> - A data-driven approach to
          improve deals and user experience.
        </li>
        <li>
          <b-icon icon="credit-card" variant="info" class="mr-2"></b-icon
          ><strong>Secure, Flexible Payments</strong> - Expanding payment
          options for convenience and trust.
        </li>
        <li>
          <b-icon icon="arrows-fullscreen" variant="info" class="mr-2"></b-icon
          ><strong>Scalable and User-Driven Growth</strong> - Continuous
          improvements based on user feedback and growing demand.
        </li>
      </ul>
    </b-container>

    <!-- Closing Section with Call to Action -->
    <b-container class="text-center my-5">
      <h3>Discover PrimeBazaar: Shopping for a New Era</h3>
      <p>
        PrimeBazaar combines intelligent design with unbeatable value to create
        a modern marketplace that feels personalized, efficient, and delightful
        to use.
      </p>
    </b-container>
  </div>
</template>

<script>
export default {
  name: "PrimeBazaar",
};
</script>

<style scoped>
.card{
  height: 150px;
}
</style>
