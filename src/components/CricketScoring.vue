<template>
  <div>
    <!-- Header -->
    <b-navbar toggleable="lg" type="light" variant="info">
      <b-navbar-brand href="#">Cricket Dashboard</b-navbar-brand>
    </b-navbar>

    <!-- Match Info -->
    <b-card class="my-4" header="Match Details" header-bg-variant="info" header-text-variant="white">
      <b-row>
        <b-col>
          <b-card-text>
            <strong>Team A: {{ teamA }}</strong> | <strong>Team B: {{ teamB }}</strong>
          </b-card-text>
          <b-card-text>Overs: {{ overs }} | Wickets: {{ wickets }} | Runs: {{ runs }}</b-card-text>
        </b-col>
      </b-row>
    </b-card>

    <!-- Player Info -->
    <b-card class="my-4">
      <b-card-header>Player Details</b-card-header>
      <b-table striped hover :items="players" :fields="fields">
        <template #cell(actions)="row">
          <b-button size="sm" @click="addRun(row.index)" variant="success">Add Run</b-button>
          <b-button size="sm" @click="addWicket(row.index)" variant="danger">Out</b-button>
          <b-button size="sm" @click="removePlayer(row.index)" variant="warning">Remove</b-button>
        </template>
      </b-table>
      
      <b-input-group class="mt-3">
        <b-form-input v-model="newPlayerName" placeholder="Add Player Name"></b-form-input>
        <b-input-group-append>
          <b-button @click="addPlayer" variant="primary">Add Player</b-button>
        </b-input-group-append>
      </b-input-group>
    </b-card>

    <!-- Score Controls -->
    <b-row class="my-4">
      <b-col>
        <b-button variant="success" @click="incrementRuns">Add 1 Run</b-button>
        <b-button variant="danger" @click="incrementWicket">Add 1 Wicket</b-button>
        <b-button variant="warning" @click="incrementOvers">Next Over</b-button>
        <b-button variant="secondary" @click="resetMatch">Reset Match</b-button>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      teamA: 'Team A',
      teamB: 'Team B',
      runs: 100,
      wickets: 3,
      overs: 12,
      newPlayerName: '',
      players: [
        { name: 'Player 1', runs: 50, status: 'Not Out' },
        { name: 'Player 2', runs: 30, status: 'Not Out' },
        { name: 'Player 3', runs: 10, status: 'Out' }
      ],
      fields: ['name', 'runs', 'status', { key: 'actions', label: 'Actions' }]
    };
  },
  methods: {
    incrementRuns() {
      this.runs++;
    },
    incrementWicket() {
      this.wickets++;
    },
    incrementOvers() {
      this.overs++;
    },
    resetMatch() {
      this.runs = 0;
      this.wickets = 0;
      this.overs = 0;
      this.players = [];
    },
    addRun(index) {
      this.players[index].runs++;
    },
    addWicket(index) {
      this.players[index].status = 'Out';
    },
    addPlayer() {
      if (this.newPlayerName) {
        this.players.push({ name: this.newPlayerName, runs: 0, status: 'Not Out' });
        this.newPlayerName = '';
      }
    },
    removePlayer(index) {
      this.players.splice(index, 1);
    }
  }
};
</script>

<style>
/* Add any custom styling here */
</style>
