<template>
  <div id="ridedetail">
    <h1 style="text-align: center; padding: 2em 0;">Votre plan de route</h1>
    <div class="center-column">
      <div id="details">
        <h2>Détail de votre trajet</h2><br />

        <MqResponsive target="sm+">
          <v-card class="card">
            <div style="display: flex; flex-direction: row; padding-left: 2%;">
              <ul class="padding">
                <li>{{ startTime }}</li>
                <li>{{ endTime }}</li>
              </ul>
              <ul class="bar">
                <li>{{ startCity }}</li>
                <li>{{ endCity }}</li>
              </ul>
              <div class="lastItem">
                <p style="font-weight: bold;">9€</p><br/>
                <p>2 places restantes</p>
              </div>
            </div>
          </v-card>
        </MqResponsive>

        <MqResponsive target="xs">
          <v-card class="card">
            <div style="display: flex; flex-direction: row; padding-left: 2%;">
              <ul class="padding">
                <li>{{ startTime }}</li>
                <li>{{ endTime }}</li>
              </ul>
              <ul class="bar">
                <li>{{ startCity }}</li>
                <li>{{ endCity }}</li>
              </ul>
            </div>
            <div style="padding-top: 5%;">
              <p style="font-weight: bold;">9€</p>
              <p>2 places restantes</p>
            </div>
          </v-card>
        </MqResponsive>

      </div>
      <v-divider :thickness="5" class="divider"></v-divider>
      <div id="passengers">
        <h2>Passagers</h2><br />

        <v-divider :thickness="2" class="divider"></v-divider>

        <MqResponsive target="sm+">
          <v-row class="passenger-line">
            <v-col>
              Passager
            </v-col>
            <v-col>
              {{ startCity }}
            </v-col>
            <v-col cols="2">
              <v-icon icon="mdi-arrow-right" aria-hidden="true" />
            </v-col>
            <v-col>
              {{ endCity }}
            </v-col>
          </v-row>
        </MqResponsive>

        <MqResponsive target="xs">
          <v-row>
            <v-col>
              Passager
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              {{ startCity }}
            </v-col>
            <v-col>
              <v-icon icon="mdi-arrow-down" aria-hidden="true" />
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              {{ endCity }}
            </v-col>
          </v-row>
        </MqResponsive>

        <v-divider :thickness="2" class="divider"></v-divider>

        <div class="center-button">
          <v-btn class="button" @click="console.log('papote');">
            <MqResponsive target="sm+">
              PAPOTER AVEC LE GROUPE
            </MqResponsive>
            <MqResponsive target="xs">
              PAPOTER
            </MqResponsive>
          </v-btn>
        </div>
      </div>
      <v-divider :thickness="5" class="divider"></v-divider>
      <div id="joining">
        <h2>Futurs passagers</h2><br />
        <v-card class="card">
          <span style="font-weight: bold;">Eric</span> veut rejoindre votre trajet.<br/>
          {{ startCity }} <v-icon icon="mdi-arrow-right" aria-hidden="true" /> {{ endCity }}
        </v-card>
        <v-row class="valide-buttons">
          <v-col class="center-button">
            <v-btn class="button" @click="console.log('accepter');">ACCEPTER</v-btn>
          </v-col>
          <v-col class="center-button">
            <v-btn class="button-red" @click="console.log('valider');">VALIDER</v-btn>
          </v-col>
        </v-row>
      </div>
      <v-divider :thickness="5" class="divider"></v-divider>
      <div id="lastpart">
        <v-row>
          <v-col>Votre véhicule</v-col>
          <v-spacer/>
          <v-col>Nom du véhicule</v-col>
        </v-row>
        <v-row>
          <v-col>Prix total pour 1 passager</v-col>
          <v-spacer/>
          <v-col class="price">{{ price }}€</v-col>
        </v-row>
      </div>
      <v-divider :thickness="5" class="divider"></v-divider>
      <div id="cancel">
        <div class="center-button">
          <v-btn class="button-red" @click="console.log('petit test');">
            <MqResponsive target="sm+">
              ANNULER LE TRAJET
            </MqResponsive>
            <MqResponsive target="xs">
              ANNULER
            </MqResponsive>
          </v-btn>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { MqResponsive } from "vue3-mq";
import router from "@/router";
import {useRoute} from "vue-router";
import rideService from '../services/rideService.js';

export default {
  name: 'RideDetailView',
  components: {
    MqResponsive,
  },
  data() {
    return  {
      id: null,
      startTime: null,
      endTime: null,
      startCity: null,
      endCity: null,
      price: null,
    }
  },
  computed: {
    router() {
      return router
    }
  },
  mounted() {
    const route = useRoute();
    this.id = route.params.id;
    rideService.getRide(this.id).then((r) => {
      console.log(r.data);
      this.startTime = r.data.steps[0].time;
      this.endTime = r.data.steps[1].time;
      this.startCity = r.data.steps[0].city.name;
      this.endCity = r.data.steps[1].city.name;
      this.price = r.data.steps[0].prices[0].price;
    }).catch((e) => {
      console.log("Erreur : ", e);
    });
  }
}
</script>
<style scoped>

.center-column {
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

.price {
  font-weight: 700;
  font-size: 30px;
  margin-top: 17px;
  margin-bottom: 17px;
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
  width: 45%;
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

.button {
  background-color: #F58926;
  color: #FFFBF7;
}

.button-red {
  background-color: red;
  color:#FFFBF7;
}

.center-button {
  text-align: center;
}

.divider {
  margin: 25px 0;
}

#ridedetail {
  padding-bottom: 45px;
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
