<template>
  <div id="cricket-scoring">
    <!-- Navigation Bar -->
    <b-navbar toggleable="lg" type="dark" variant="dark">
      <b-navbar-brand href="#">Cricket Scoring</b-navbar-brand>
      <b-navbar-nav class="ml-auto">
        <b-nav-item href="#">Home</b-nav-item>
        <b-nav-item href="#">Scoreboard</b-nav-item>
        <b-nav-item href="#">Teams</b-nav-item>
        <b-nav-item href="#">Settings</b-nav-item>
      </b-navbar-nav>
    </b-navbar>

    <!-- Name Entry Section -->
    <b-container class="mt-4">
      <b-row v-if="!namesEntered">
        <b-col>
          <b-form @submit.prevent="startMatch">
            <b-form-group label="Batsman 1 Name">
              <b-form-input v-model="batsmen[0].name" required></b-form-input>
            </b-form-group>
            <b-form-group label="Batsman 2 Name">
              <b-form-input v-model="batsmen[1].name" required></b-form-input>
            </b-form-group>
            <b-form-group label="Bowler Name">
              <b-form-input v-model="bowler.name" required></b-form-input>
            </b-form-group>
            <b-button type="submit" variant="primary">Start Match</b-button>
          </b-form>
        </b-col>
      </b-row>
    </b-container>

    <!-- New Bowler Entry -->
    <b-container class="mt-4" v-if="overCompleted && namesEntered">
      <b-row>
        <b-col>
          <b-form @submit.prevent="addNewBowler">
            <b-form-group label="New Bowler Name">
              <b-form-input v-model="bowler.name" required></b-form-input>
            </b-form-group>
            <b-button type="submit" variant="primary">Add Bowler</b-button>
          </b-form>
        </b-col>
      </b-row>
    </b-container>

    <!-- New Batsman Entry -->
    <b-container class="mt-4" v-if="newBatsmanRequired && namesEntered">
      <b-row>
        <b-col>
          <b-form @submit.prevent="addNewBatsman">
            <b-form-group label="New Batsman Name">
              <b-form-input v-model="batsmen[currentBatsmanIndex].name" required></b-form-input>
            </b-form-group>
            <b-button type="submit" variant="primary">Add Batsman</b-button>
          </b-form>
        </b-col>
      </b-row>
    </b-container>

    <!-- Scoring Section -->
    <b-container v-if="namesEntered && !overCompleted && !newBatsmanRequired" class="mt-4">
      <b-row>
        <b-col>
          <h3>Current Score: {{ runs }}/{{ wickets }}</h3>
          <h5>Overs: {{ overs }}.{{ balls }}</h5>
        </b-col>
      </b-row>

      <!-- Batsmen and Bowler Info -->
      <b-row class="mt-4">
        <b-col md="6">
          <h4>Batsmen</h4>
          <ul>
            <li v-for="(batsman, index) in batsmen" :key="index">
              {{ batsman.name }}: {{ batsman.runs }} ({{ batsman.balls }} balls)
            </li>
          </ul>
          <h5>Dismissed Batsmen</h5>
          <ul>
            <li v-for="(batsman, index) in dismissedBatsmen" :key="index">
              {{ batsman.name }}: {{ batsman.runs }} runs ({{ batsman.balls }} balls)
            </li>
          </ul>
        </b-col>
        <b-col md="6">
          <h4>Bowler</h4>
          <p>{{ bowler.name }}: {{ bowler.overs }} overs, {{ bowler.runsConceded }} runs, {{ bowler.wickets }} wicket(s)</p>
          <h5>Dismissed Bowlers</h5>
          <ul>
            <li v-for="(bowler, index) in dismissedBowlers" :key="index">
              {{ bowler.name }}: {{ bowler.overs }} overs, {{ bowler.runsConceded }} runs, {{ bowler.wickets }} wicket(s)
            </li>
          </ul>
        </b-col>
      </b-row>

      <!-- Scoring Buttons -->
      <b-row class="mt-4">
        <b-col>
          <b-button variant="success" @click="addRun(1)">1 Run</b-button>
          <b-button variant="success" @click="addRun(2)">2 Runs</b-button>
          <b-button variant="success" @click="addRun(3)">3 Runs</b-button>
          <b-button variant="success" @click="addRun(4)">4 Runs</b-button>
          <b-button variant="success" @click="addRun(6)">6 Runs</b-button>
          <b-button variant="danger" @click="addWicket()">Wicket</b-button>
          <b-button variant="primary" @click="addBall()">Next Ball</b-button>
        </b-col>
      </b-row>

      <!-- Summary Section -->
      <b-row class="mt-5">
        <b-col>
          <h4>Match Summary</h4>
          <b-list-group>
            <b-list-group-item v-for="(entry, index) in summary" :key="index">
              Over {{ entry.over }}: {{ entry.runs }} runs, {{ entry.wickets }} wicket(s)
            </b-list-group-item>
          </b-list-group>
        </b-col>
      </b-row>
    </b-container>

    <!-- Footer -->
    <b-footer class="text-center mt-4">
      &copy; 2024 Cricket Scoring by Rohit Kumar Gupta
    </b-footer>
  </div>
</template>

<script>
export default {
  name: "CricketScoring",
  data() {
    return {
      runs: 0,
      wickets: 0,
      overs: 0,
      balls: 0,
      summary: [],
      batsmen: [
        { name: "", runs: 0, balls: 0 },
        { name: "", runs: 0, balls: 0 }
      ],
      dismissedBatsmen: [],
      dismissedBowlers: [],
      bowler: {
        name: "",
        overs: 0,
        runsConceded: 0,
        wickets: 0
      },
      currentBatsmanIndex: 0,
      namesEntered: false,
      overCompleted: false,
      newBatsmanRequired: false
    };
  },
  methods: {
    startMatch() {
      this.namesEntered = true;
    },
    addRun(run) {
      this.runs += run;
      this.batsmen[this.currentBatsmanIndex].runs += run;
      this.batsmen[this.currentBatsmanIndex].balls += 1;
      this.bowler.runsConceded += run;

      if (run % 2 !== 0) {
        this.rotateStrike();
      }

      this.addBall();
    },
    addWicket() {
      this.wickets += 1;
      this.bowler.wickets += 1;

      // Save the dismissed batsman's data
      this.dismissedBatsmen.push({
        ...this.batsmen[this.currentBatsmanIndex]
      });

      // Reset the current batsman data
      this.batsmen[this.currentBatsmanIndex] = {
        name: "",
        runs: 0,
        balls: 0
      };

      this.newBatsmanRequired = true;
      this.addBall();
    },
    addBall() {
      this.balls += 1;
      if (this.balls === 6) {
        this.overs += 1;
        this.balls = 0;

        // Save the dismissed bowler's data
        this.dismissedBowlers.push({
          ...this.bowler
        });

        // Reset the bowler's data for the new over
        this.bowler = {
          name: this.bowler.name, // Keep the same bowler's name
          overs: 0,
          runsConceded: 0,
          wickets: 0
        };

        // Save the over summary
        this.summary.push({
          over: this.overs,
          runs: this.runs,
          wickets: this.wickets
        });

        // Change strike after an over
        this.rotateStrike();

        this.overCompleted = true;
      }
    },
    rotateStrike() {
      this.currentBatsmanIndex = this.currentBatsmanIndex === 0 ? 1 : 0;
    },
    addNewBowler() {
      this.bowler.overs = 0;
      this.bowler.runsConceded = 0;
      this.bowler.wickets = 0;
      this.overCompleted = false;
    },
    addNewBatsman() {
      this.newBatsmanRequired = false;
      // Change strike when a new batsman comes in
      this.rotateStrike();
    }
  }
};
</script>

<style>
#cricket-scoring {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

b-container {
  flex: 1;
}

b-footer {
  background-color: #343a40;
  color: white;
  padding: 10px;
}
</style>
