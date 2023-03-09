<template>
  <div id="roadmap">
    <h1 style="text-align: center; padding: 2em 0;">Votre plan de route</h1>
    <div v-if="!empty" class="results">
      <h2>A venir</h2><br />
      <p style="font-weight: bold;">Vendredi 10 mars</p>
      <v-card :class="`${driver ? 'driver' : 'card'}`">
        <div style="display: flex; flex-direction: row; padding-left: 2%;">
          <ul class="padding">
            <li>6h</li>
            <li>7h</li>
          </ul>
          <ul class="bar">
            <li>step 1</li>
            <li>step 2</li>
          </ul>
          <div class="lastItem">
            <p style="font-weight: bold;">9€</p>
          </div>
        </div>
        <div style="padding: 2% 0 0 2%;">
          <p v-if="driver" style="font-weight: bold;">Vous conduisez ce trajet</p>
          <p v-else>Jess</p>
        </div>
      </v-card>
    </div>
    <div v-if="!empty" class="results">
      <h2>En cours</h2><br />
      <v-card :class="`${driver ? 'driver' : 'card'}`">
        <div style="display: flex; flex-direction: row; padding-left: 2%;">
          <ul class="padding">
            <li>6h</li>
            <li>7h</li>
          </ul>
          <ul class="bar">
            <li>step 1</li>
            <li>step 2</li>
          </ul>
          <div class="lastItem">
            <p style="font-weight: bold;">9€</p>
          </div>
        </div>
        <div style="padding: 2% 0 0 2%;">
          <p v-if="driver" style="font-weight: bold;">Vous conduisez ce trajet</p>
          <p v-else>Jess</p>
        </div>
      </v-card>
    </div>
    <div v-if="empty" class="empty">
      <v-img style="margin: auto; display: block;" :src="require('../assets/first_car.svg')" width="500px" id="car"></v-img>
      <h2>Aucun voyage prévu !</h2><br />
      <v-btn id="button">TROUVER UN TRAJET</v-btn>
    </div>
    <v-card id="driver">
      <v-img :src="require('../assets/car.svg')" width="200px" id="car"></v-img>
      <div class="create">
        <h2>Vous êtes conducteur ?</h2>
        <p>Trouvez votre compagnon de route pour papoter avec vous sur le trajet. Déposez votre annonce et vous n’aurez plus qu’à choisir votre covoitureur !</p><br />
        <v-btn id="button">CRÉER VOTRE ANNONCE</v-btn>
      </div>
    </v-card>
    <div v-if="!empty" class="results">
      <h2>Vos anciens trajets</h2><br />
      <p style="font-weight: bold;">Jeudi 2 mars</p>
      <v-card :class="`${driver ? 'driver' : 'card'}`">
        <div style="display: flex; flex-direction: row; padding-left: 2%;">
          <ul class="padding">
            <li>6h</li>
            <li>7h</li>
          </ul>
          <ul class="bar">
            <li>step 1</li>
            <li>step 2</li>
          </ul>
          <div class="lastItem">
            <p style="font-weight: bold;">9€</p>
          </div>
        </div>
        <div style="padding: 2% 0 0 2%;">
          <p v-if="driver" style="font-weight: bold;">Vous conduisez ce trajet</p>
          <p v-else>Jess</p>
        </div>
      </v-card>
    </div>
    <AppFooter />
  </div>
</template>

<script>

import AppFooter from "@/components/AppFooter.vue";

export default {
  name: 'RoadmapView',
  components: {AppFooter},
  data() {
    return {
      driver: false,
      empty: true
    }
  }
}
</script>
<style scoped>
.results {
  padding-left: 30%;
  width: 70%;
  display: flex;
  flex-direction: column;
}

.card {
  padding: 2%;
  margin-bottom: 5%;
  box-shadow: rgba(0, 0, 0, 0.2) 0 12px 28px 0, rgba(0, 0, 0, 0.1) 0 2px 4px 0, rgba(255, 255, 255, 0.05) 0 0 0 1px inset;
}

.driver {
  padding: 2%;
  margin-bottom: 5%;
  box-shadow: rgba(0, 0, 0, 0.2) 0 12px 28px 0, rgba(0, 0, 0, 0.1) 0 2px 4px 0, rgba(255, 255, 255, 0.05) 0 0 0 1px inset;
  border-left: 10px solid #F58926;
}

.bar {
  list-style: none;
  padding-left: 2%;
}

.bar >li {
  position: relative;
}

.bar>li:before {
  content: '\25CF';
  margin-right: 10px;
  font-size: 20px;
}

.bar>li:after {
  position: absolute;
  left: 0;
  top: 0;
  content: '';
  border-left: 2px solid black;
  margin-left: 5px;
  height: 100%;
}

.padding {
  line-height: 2em;
  list-style-type: none;
  font-weight: bold;
}

.lastItem {
  margin-left: auto;
  padding-right: 2%;
  text-align: right;
}

#driver {
  border-radius: 5px;
  width: 60%;
  margin: 2em 0 2em 20%;
  padding: 3em;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.create {
  padding-left: 5em;
}

#button {
  background-color: #F58926;
  color: #FFFBF7;
}

.empty {
  text-align: center;
}

@media (max-width: 1250px) {
  .results {
    padding-left: 10%;
    width: 90%;
    display: flex;
    flex-direction: column;
  }

  #driver {
    flex-direction: column;
    align-items: center;
    margin: 2em 0 2em 10%;
    width: 80%;
  }

  .create {
    padding: 2em;
  }
}
</style>
