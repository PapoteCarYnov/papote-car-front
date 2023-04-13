<template>
  <div style="margin-bottom: 1em;">
    <div>
      <div>
        <h1 style="text-align: center; padding: 2em 0 0 0;">Récapitulatif</h1>
      </div>
      <div class="content">
        <h2 style="padding: 1em 0;">{{ date }}</h2>
        <v-card class="card">
          <div class="contentCard">
            <div class="ul">
              <ul class="padding">
                <li>{{ startTime }}</li>
                <li>{{ endTime }}</li>
              </ul>
              <ul class="bar">
                <li>{{ step1 }}</li>
                <li>{{ step2 }}</li>
              </ul>
            </div>
            <div class="lastItem">
              <p>{{ price }}€</p>
            </div>
          </div>
        </v-card>
        <div style="margin-bottom: 2em;">
          <span><span>Prix total pour {{passenger}}</span><span v-if="passenger === 1">  passager</span><span v-else> passagers</span><span> sur tout le trajet: </span><span style="font-weight: bold; font-size: 24px;">{{ totalPrice }}</span></span>
          <hr style="margin: 2em 0; height: 2px; background-color: #333;">
          <div style="display: flex; flex-direction: row; justify-content: space-between;">
            <span>Votre véhicule:</span>
            <div style="display: flex; flex-direction: column; text-align: right;">
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
        <div class="button">
          <v-btn id="previous" @click="router.push({ name: 'price', params: {id: this.id} });">Précédent</v-btn>
          <v-btn id="next" @click="router.push({ name: 'roadmap' });">Publier</v-btn>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import router from "@/router";
import {useRoute} from "vue-router";
import rideService from "@/services/rideService";
import moment from "moment/moment";

export default {
  name: 'SummaryView',
  async mounted() {
    const route = useRoute();
    this.id = route.params.id;
    const ride = await rideService.getRide(this.id);
    this.step1 = ride.data.steps[0]['city']['name'];
    this.step2 = ride.data.steps[1]['city']['name'];
    moment.locale('fr');
    this.date = moment(ride.data.steps[0]['date'], 'Y/M/D').format('dddd D MMMM Y');
    this.startTime = ride.data.steps[0]['time'];
    this.endTime = ride.data.steps[1]['time'];
    this.price = ride.data.steps[0]['prices'][0]['price'];
  },
  data() {
    return {
      price: 0,
      step1: null,
      step2: null,
      id: null,
      date: null,
      startTime: null,
      endTime: null,
      passenger: 0
    }
  },
  computed: {
    router() {
      return router
    },

    totalPrice() {
      return this.price * this.passenger;
    }
  },
}
</script>
<style scoped>
.content {
  width: 30%;
  margin-left: 35%;
}

.card {
  margin-bottom: 5%;
  padding: 1em;
  display: flex;
  flex-direction: column;
  box-shadow: rgba(0, 0, 0, 0.2) 0 12px 28px 0, rgba(0, 0, 0, 0.1) 0 2px 4px 0, rgba(255, 255, 255, 0.05) 0 0 0 1px inset;
}

.contentCard {
  display: flex;
  flex-direction: row;
  padding-left: 2%;
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

.ul {
  display: flex;
  flex-direction: row;
  width: 70%;
}

.lastItem {
  margin-left: auto;
  padding-right: 2%;
  text-align: right;
  display: flex;
  flex-direction: row;
  align-items: center;
  font-weight: bold;
  margin-top: -40px;
}

.button {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

#previous {
  background-color: transparent;
  color: #F58926;
  text-align: center;
  border: 2px solid #F58926;
  border-radius: 5px;
}

#next {
  background-color: #f58926;
  color: white;
  text-align: center;
}

@media (min-width: 750px) and (max-width: 1250px) {
  .content {
    width: 50%;
    margin-left: 25%;
  }

  .ul {
    width: 100%;
  }
}

@media (max-width: 750px) {
  .content {
    width: 50%;
    margin-left: 25%;
  }

  .contentCard {
    flex-direction: column;
  }

  .lastItem {
    margin-top: 0;
  }

  .ul {
    width: 100%;
  }

  .button {
    display: flex;
    flex-direction: column;
  }

  #previous {
    margin-bottom: 1em;
  }
}
</style>
