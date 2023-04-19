<template>
  <v-container>
    <div>
      <v-img
          aria-hidden=true
          :src="require('../assets/background.png')"
          cover
      ></v-img>
    </div>
    <section id="home">
      <div class="align">
        <div>
          <h2 id="destination">Où voulez-vous aller ?</h2>
        </div>
        <v-form v-model="valid" ref="form" style="width: 100%; margin-left: 100px;">
          <v-container>
            <MqResponsive target="md-xl">
              <v-row>
                <v-col cols="1" md="1">
                  <v-icon icon="mdi-map-marker" />
                </v-col>
                <v-col cols="4" md="4">
                  <v-autocomplete
                      v-model="start"
                      :rules="startRules"
                      :items="startCities"
                      v-model:search="startSearch"
                      label="Départ"
                      variant="underlined"
                      required
                  ></v-autocomplete>
                </v-col>
                <v-col cols="1" md="1">
                  <v-btn id="arrow" @click="changeDestination()">
                    <v-icon icon="mdi-arrow-left-right" />
                  </v-btn>
                </v-col>
                <v-col cols="1" md="1">
                  <v-icon icon="mdi-map-marker" />
                </v-col>
                <v-col cols="4" md="4">
                  <v-autocomplete
                      v-model="end"
                      :rules="endRules"
                      :items="endCities"
                      v-model:search="endSearch"
                      label="Arrivée"
                      variant="underlined"
                      required
                  ></v-autocomplete>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="1" md="1">
                  <v-icon icon="mdi-calendar-blank" />
                </v-col>
                <v-col cols="4" md="4">
                  <Datepicker v-model="date" :rules="dateRules" :locale="locale" inputFormat="dd-MM-yyyy" required></Datepicker>
                </v-col>
                <v-col id="col" cols="1" md="1">
                </v-col>
                <v-col cols="1" md="1">
                  <v-icon icon="mdi-account-multiple" />
                </v-col>
                <v-col cols="4" md="4">
                  <v-text-field v-model="nbPeople" :rules="nbPeopleRules" type="number" min="0" label="Nombre de personnes" placeholder="Nombre de personnes" variant="underlined" required></v-text-field>
                </v-col>
              </v-row>
            </MqResponsive>
            <MqResponsive target="xs-sm">
              <v-row>
                <v-col cols="1" md="1">
                  <v-icon icon="mdi-map-marker" />
                </v-col>
                <v-col cols="7" md="7">
                  <v-autocomplete
                      v-model="start"
                      :rules="startRules"
                      :items="startCities"
                      v-model:search="startSearch"
                      label="Départ"
                      variant="underlined"
                      required
                  ></v-autocomplete>                </v-col>
                <v-col cols="1" md="1" style="text-align:center;">
                  <v-btn id="arrow" @click="changeDestination()">
                    <v-icon icon="mdi-arrow-up-down" />
                  </v-btn>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="1" md="1">
                  <v-icon icon="mdi-map-marker" />
                </v-col>
                <v-col cols="8" md="8">
                  <v-autocomplete
                      v-model="end"
                      :rules="endRules"
                      :items="endCities"
                      v-model:search="endSearch"
                      label="Arrivée"
                      variant="underlined"
                      required
                  ></v-autocomplete>                    </v-col>
              </v-row>
              <v-row>
                <v-col cols="1" md="1">
                  <v-icon icon="mdi-calendar-blank" />
                </v-col>
                <v-col cols="8" md="8">
                  <Datepicker v-model="date" :rules="dateRules" :locale="locale" inputFormat="dd-MM-yyyy" required></Datepicker>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="1" md="1">
                  <v-icon icon="mdi-account-multiple" />
                </v-col>
                <v-col cols="8" md="8">
                  <v-text-field v-model="nbPeople" :rules="nbPeopleRules" type="number" min="0" label="Nombre de personnes" placeholder="Nombre de personnes" variant="underlined" required></v-text-field>
                </v-col>
              </v-row>
            </MqResponsive>
            <v-row>
              <v-btn id="button" @click="submitForm">Chercher</v-btn>
            </v-row>
          </v-container>
        </v-form>
      </div>
      <div id="filter">
        <div class="responsive">
          <div>
            <h3>Trier par</h3>
            <v-radio-group>
              <v-radio label="Prix le plus bas" value="price"></v-radio>
              <v-radio label="Départ le plus tôt" value="start"></v-radio>
            </v-radio-group>
          </div>
          <div  class="time">
            <v-row>
              <v-col cols="12" md="12">
                <h3>Heure de départ</h3>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="6" md="6">
                <v-select
                    v-model="zone"
                    label="Avant"
                    :items="['Avant', 'Après']"
                    variant="underlined"
                ></v-select>
              </v-col>
              <v-col cols="6" md="6">
                <v-select
                    v-model="hour"
                    label="7h"
                    :items="['0h', '1h', '2h', '3h', '4h', '5h', '6h', '7h', '8h', '9h', '10h', '11h', '12h', '13h', '14h', '15h', '16h', '17h', '18h', '19h', '20h', '21h', '22h', '23h']"
                    variant="underlined"
                ></v-select>
              </v-col>
            </v-row>
          </div>
        </div>
        <div class="results">
          <div style="padding-bottom: 10%;">
            <h3>Heure de départ</h3>
            <p>Heure de départ</p>
            <p>Heure de départ</p>
          </div>
          <div>
            <v-card class="card" @click="router.push(`/booking/2`);">
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
                  <p style="font-weight: bold;">7€10</p>
                  <p>2 places restantes</p>
                </div>
              </div>
              <div style="padding: 2% 0 0 2%;">
                <p>Paul</p>
              </div>
            </v-card>
          </div>
        </div>
      </div>
    </section>
  </v-container>
</template>

<script>
import { MqResponsive } from "vue3-mq";
import Datepicker from 'vue3-datepicker';
import { ref } from 'vue'
const date = ref(new Date())
import { fr } from 'date-fns/locale';
import router from "@/router";
import rideService from "@/services/rideService";
import { config } from '@/services/axios';

export default {
  name: 'SearchView',
  components: {MqResponsive, Datepicker},
  created() {
    this.start = window.history.state.homeStart
    this.end = window.history.state.homeEnd
    this.date = window.history.state.homeDate
    this.nbPeople = window.history.state.homeNbPeople
  },
  mounted() {
    if (this.start != null && this.end != null && this.nbPeople != null) {
      this.getRide();
    }
  },
  data() {
    return {
      open: false,
      valid: false,
      start: null,
      end: null,
      locale: fr,
      date: date,
      nbPeople: null,
      startCities: [],
      endCities: [],
      allEndCities: [],
      allStartCities: [],
      startSearch: null,
      endSearch: null,
      startRules: [
        v => !!v || 'Ce champ est requis'
      ],
      endRules: [
        v => !!v || 'Ce champ est requis'
      ],
      dateRules: [
        v => !!v || "Ce champs est requis"
      ],
      nbPeopleRules: [
        v => !!v || "Ce champ est requis"
      ],
      showResult: false,
      zone: null,
      hour: null
    }
  },
  computed: {
    router() {
      return router
    }
  },
  methods: {
    async getRide() {
      await this.startQuerySelections(this.start);
      let start = '';
      for (let i = 0; i < JSON.parse(JSON.stringify(this.allStartCities)).data.length; i++) {
        if (JSON.parse(JSON.stringify(this.allStartCities)).data[i]['name'] === this.start) {
          start = JSON.parse(JSON.stringify(this.allStartCities)).data[i]['id']
        }
      }
      await this.endQuerySelections(this.end);
      let end = '';
      for (let i = 0; i < JSON.parse(JSON.stringify(this.allEndCities)).data.length; i++) {
        if (JSON.parse(JSON.stringify(this.allEndCities)).data[i]['name'] === this.end) {
          end = JSON.parse(JSON.stringify(this.allEndCities)).data[i]['id']
        }
      }
      let date = this.date.getTime();
      date = new Date(date);
      date = date.toISOString().split('T')[0];
      await rideService.getRides({
        config,
        params: {
          startCityId: start,
          endCityId: end,
          date: date,
          status: "A_VENIR",
        }
      }).then((r) => {
        console.log(r)
      }).catch((e) => {
        console.log("Erreur :", e);
      });
    },
    async submitForm() {
      await this.$refs.form.validate();
      await this.getRide();
      this.showResult = true;
    },
    changeDestination() {
      const start = this.start;
      this.start = this.end;
      this.end = start;
    },
    async startQuerySelections(v) {
      this.allStartCities = await rideService.getCities(v);
      for (const key in (JSON.parse(JSON.stringify(this.allStartCities.data)))) {
        this.startCities[key] = JSON.parse(JSON.stringify(this.allStartCities.data))[key]['name']
      }
    },
    async endQuerySelections(v) {
      this.allEndCities = await rideService.getCities(v);
      for (const key in (JSON.parse(JSON.stringify(this.allEndCities.data)))) {
        this.endCities[key] = JSON.parse(JSON.stringify(this.allEndCities.data))[key]['name']
      }
    }
  },
  watch: {
    startSearch(val) {
      val && val !== this.start && this.startQuerySelections(val)
    },
    endSearch(val) {
      val && val !== this.start && this.endQuerySelections(val)
    },
  }
}
</script>
<style scoped>
#home {
  width: 60%;
  margin-left: 20%;
  margin-top: -20%;
  z-index: 5;
  position: relative;
}

#col {
  flex: 0 0 65px;
}

.v-row {
  align-items: center;
}

.v-col-1 {
  flex: 0 0 30px;
  padding: 0;
}

.align {
  align-items: center;
  display: flex;
  flex-direction: column;
  padding-bottom: 50px;
  background-color: white;
  text-align: center;
  box-shadow: rgba(0, 0, 0, 0.2) 0 12px 28px 0, rgba(0, 0, 0, 0.1) 0 2px 4px 0, rgba(255, 255, 255, 0.05) 0 0 0 1px inset;
}

#destination {
  font-size: 40px;
  font-weight: 700;
  padding-top: 2em;
}

input[type="date"]::-webkit-inner-spin-button,
input[type="date"]::-webkit-calendar-picker-indicator {
  display: none;
  -webkit-appearance: none;
}

#button {
  background-color: #F58926;
  color: white;
  margin-left: 5px;
  margin-top: 5px;
}

.v-container {
  max-width: 100%;
  padding: 0;
}

#arrow {
  background: none;
  box-shadow: none;
}

.v3dp__datepicker {
  border-bottom: 1px #b4b4b4 solid;
}

#filter {
  padding-top: 2em;
  display: flex;
}

.results {
  padding-left: 10%;
  width: 70%;
  display: flex;
  flex-direction: column;
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

.card {
  padding: 2%;
  margin-bottom: 5%;
  box-shadow: rgba(0, 0, 0, 0.2) 0 12px 28px 0, rgba(0, 0, 0, 0.1) 0 2px 4px 0, rgba(255, 255, 255, 0.05) 0 0 0 1px inset;
}

.time {
  width: 100%;
}

@media (min-width: 750px) and (max-width: 1250px) {
  #filter {
    flex-direction: column;
  }

  .results {
    padding: 0;
    width: 100%;
  }

  .responsive {
    display: flex;
    justify-content: space-between;
  }

  .time {
    width: 40%;
  }
}

@media (max-width: 750px) {
  #filter {
    flex-direction: column;
  }

  .results {
    padding: 0;
    width: 100%;
  }

  .responsive {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  #destination {
    font-size: 25px;
    font-weight: 700;
  }

  .time {
    width: 100%;
  }
}

</style>
