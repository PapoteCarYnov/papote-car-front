<template>
  <v-form ref="form">
    <div>
      <h1 style="text-align: center; padding: 2em 0 0 0;">Créer votre trajet</h1>
      <div id="route">
        <div id="left">
          <h2>Trajet</h2>
          <p>Dîtes nous tout !</p>
        </div>
        <div id="card">
          <v-row>
            <v-col cols="1" md="1">
              <v-icon icon="mdi-map-marker" />
            </v-col>
            <v-col cols="8" md="8">
              <v-autocomplete
                  v-model="start"
                  :rules="startRules"
                  :items="startCities"
                  v-model:search="startSearch"
                  label="Départ"
                  variant="underlined"
                  required
              >
              </v-autocomplete>
            </v-col>
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
            <v-col cols="9" md="9">
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
          <MqResponsive target="sm-xl">
            <v-row>
              <v-col cols="1" md="1">
                <v-icon icon="mdi-calendar-blank" />
              </v-col>
              <v-col cols="4" md="4">
                Départ<Datepicker v-model="startDate" :locale="locale" inputFormat="dd-MM-yyyy" required></Datepicker>
              </v-col>
              <v-col cols="1" md="1">
                <v-icon icon="mdi-clock-outline" />
              </v-col>
              <v-col cols="4" md="4">
                Départ<VueTimePicker format="HH:mm:ss" v-model="startTime" required :class="`${errorStartTime ? 'errorInput' : 'time'}`"></VueTimePicker>
                <div v-if="errorStartTime" class="error">{{errorStartTime}}</div>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="1" md="1">
                <v-icon icon="mdi-calendar-blank" />
              </v-col>
              <v-col cols="4" md="4">
                Arrivée<Datepicker v-model="endDate" :locale="locale" inputFormat="dd-MM-yyyy" required></Datepicker>
              </v-col>
              <v-col cols="1" md="1">
                <v-icon icon="mdi-clock-outline" />
              </v-col>
              <v-col cols="4" md="4">
                Arrivée<VueTimePicker format="HH:mm:ss" v-model="endTime" required :class="`${errorStartTime ? 'errorInput' : 'time'}`"></VueTimePicker>
                <div v-if="errorEndTime" class="error">{{errorEndTime}}</div>
              </v-col>
            </v-row>
          </MqResponsive>
          <MqResponsive target="xs">
            <v-row>
              <v-col cols="1" md="1">
                <v-icon icon="mdi-calendar-blank" />
              </v-col>
              <v-col cols="9" md="9">
                Départ<Datepicker v-model="startDate" :locale="locale" inputFormat="dd-MM-yyyy" required></Datepicker>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="1" md="1">
                <v-icon icon="mdi-clock-outline" />
              </v-col>
              <v-col cols="9" md="9">
                Départ<VueTimePicker format="HH:mm:ss" v-model="startTime" required :class="`${errorStartTime ? 'errorInput' : 'time'}`"></VueTimePicker>
                <div v-if="errorStartTime" class="error">{{errorStartTime}}</div>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="1" md="1">
                <v-icon icon="mdi-calendar-blank" />
              </v-col>
              <v-col cols="9" md="9">
                Arrivée<Datepicker v-model="endDate" :locale="locale" inputFormat="dd-MM-yyyy" required></Datepicker>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="1" md="1">
                <v-icon icon="mdi-clock-outline" />
              </v-col>
              <v-col cols="9" md="9">
                Arrivée<VueTimePicker format="HH:mm:ss" v-model="endTime" required :class="`${errorStartTime ? 'errorInput' : 'time'}`"></VueTimePicker>
                <div v-if="errorEndTime" class="error">{{errorStartTime}}</div>
              </v-col>
            </v-row>
          </MqResponsive>
        </div>
      </div>
      <div id="route">
        <div id="left">
          <h2>Modalités</h2>
          <p>Détaillons plus précisément les conditions pour voyager avec toi.</p>
        </div>
        <div id="right">
          <div id="person">
            <v-select
                v-model="maxPassenger"
                :items="personSorting"
                label="Nombre de personnes"
                variant="underlined"
                :rules="passengerRules"
                required
            ></v-select>
          </div>
<!--          <p>Ajoutez des précisions sur votre véhicule afin de vous retrouver plus facilement.</p>-->
<!--          <div class="car">-->
<!--            <div class="car left">-->
<!--              <v-icon icon="mdi-car" />-->
<!--              <div class="model">-->
<!--                <v-text-field v-model="model" label="Modèle du véhicule" placeholder="Modèle du véhicule" variant="underlined" required></v-text-field>-->
<!--              </div>-->
<!--            </div>-->
<!--            <div class="right">-->
<!--              <v-text-field v-model="color" label="Couleur du véhicule" placeholder="Couleur du véhicule" variant="underlined" required></v-text-field>-->
<!--            </div>-->
<!--          </div>-->
        </div>
      </div>
      <div style="text-align: center;">
        <v-btn id="button" @click="next()">SUIVANT</v-btn>
      </div>
    </div>
  </v-form>
</template>
<script>
  import Datepicker from 'vue3-datepicker';
  import {fr} from "date-fns/locale";
  import {ref} from "vue";
  import VueTimePicker from "vue3-timepicker";
  import "vue3-timepicker/dist/VueTimepicker.css";
  const date = ref(new Date());
  import router from "@/router";
  import rideService from "@/services/rideService";
  import { MqResponsive } from "vue3-mq";

  export default {
    name: "CreateRideView",
    computed: {
      router() {
        return router
      }
    },
    components: {Datepicker, VueTimePicker, MqResponsive,},
    data() {
      return {
        start: null,
        end: null,
        startDate: date,
        endDate: date,
        locale: fr,
        startTime: null,
        endTime: null,
        color: null,
        model: null,
        step: false,
        numberStep: 0,
        maxPassenger: null,
        startCities: [],
        endCities: [],
        allEndCities: [],
        allStartCities: [],
        cities: [],
        address: [],
        errorStartTime: null,
        errorEndTime: null,
        startSearch: null,
        endSearch: null,
        startRules: [
          v => !!v || 'Ce champ est requis'
        ],
        endRules: [
          v => !!v || 'Ce champ est requis'
        ],
        passengerRules: [
          v => !!v || "Ce champ est requis"
        ],
        addressRules: [
          v => !!v || "Ce champ est requis"
        ],
        personSorting: [
          '1 personne',
          '2 personnes',
          '3 personnes',
          '4 personnes',
          '5 personnes',
          '6 personnes',
          '7 personnes',
          '8 personnes',
        ]
      }
    },
    methods: {
      changeDestination() {
        const start = this.start;
        this.start = this.end;
        this.end = start;
      },

      async next() {
        let errorStep = false;
        this.errorStartTime = this.startTime === null ? 'Ce champ est requis' : null;
        this.errorEndTime = this.endTime === null ? 'Ce champ est requis' : null;
        this.$refs.form.validate();
        if (this.startTime != null && this.endTime != null && !errorStep) {
          let startTime = this.startDate.getTime();
          const startHours = JSON.parse(JSON.stringify(this.startTime))['HH'] === '' ? '00' : JSON.parse(JSON.stringify(this.startTime))['HH'];
          const startMinutes = JSON.parse(JSON.stringify(this.startTime))['mm'] === '' ? '00' : JSON.parse(JSON.stringify(this.startTime))['mm'];
          const startSeconds = JSON.parse(JSON.stringify(this.startTime))['ss'] === '' ? '00' : JSON.parse(JSON.stringify(this.startTime))['ss'];
          const startDate = new Date(startTime);

          let endTime = this.endDate.getTime();
          const endHours = JSON.parse(JSON.stringify(this.endTime))['HH'] === '' ? '00' : JSON.parse(JSON.stringify(this.endTime))['HH'];
          const endMinutes = JSON.parse(JSON.stringify(this.endTime))['mm'] === '' ? '00' : JSON.parse(JSON.stringify(this.endTime))['mm'];
          const endSeconds = JSON.parse(JSON.stringify(this.endTime))['ss'] === '' ? '00' : JSON.parse(JSON.stringify(this.endTime))['ss'];
          const endDate = new Date(endTime);
          let start = '';
          for (let i = 0; i < JSON.parse(JSON.stringify(this.allStartCities)).data.length; i++) {
            if (JSON.parse(JSON.stringify(this.allStartCities)).data[i]['name'] === this.start) {
              start = JSON.parse(JSON.stringify(this.allStartCities)).data[i]['id']
            }
          }
          let end = '';
          for (let i = 0; i < JSON.parse(JSON.stringify(this.allEndCities)).data.length; i++) {
            if (JSON.parse(JSON.stringify(this.allEndCities)).data[i]['name'] === this.end) {
              end = JSON.parse(JSON.stringify(this.allEndCities)).data[i]['id']
            }
          }
          let allSteps = [];
          allSteps.push({
            date: startDate.toISOString().split('T')[0],
            time: startHours + ':' + startMinutes + ':' + startSeconds,
            position: 1,
            cityId: start
          });
          allSteps.push({
            date: endDate.toISOString().split('T')[0],
            time: endHours + ':' + endMinutes + ':' + endSeconds,
            position: 2,
            cityId: end
          });
          let id = '';
          await rideService.createRide({
            maxPassenger: this.maxPassenger.charAt(0),
            steps: allSteps
          }).then((r) => {
            id = r.data.id;
          }).catch((e) => {
            console.log("Erreur :", e);
          });
          router.push({name: 'price', params: {id: id}});
        }
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
      startSearch (val) {
        val && val !== this.start && this.startQuerySelections(val)
      },
      endSearch (val) {
        val && val !== this.start && this.endQuerySelections(val)
      },
    },
  }
</script>
<style scoped>
#route {
  display: flex;
  flex-direction: row;
  width: 70%;
  margin-left: 15%;
  padding: 3em;
  justify-content: space-between;
}

#left {
  width: 30%;
  padding-right: 5%;
}

#right {
  width: 70%;
}

#card {
  background-color: white;
  border-radius: 5px;
  box-shadow: rgb(0 0 0 / 20%) 0 12px 28px 0, rgb(0 0 0 / 10%) 0 2px 4px 0, rgb(255 255 255 / 5%) 0 0 0 1px inset;
  padding: 2em 0;
  width: 70%;
}

#step {
  width: 100%;
  background-color: white;
  border-radius: 5px;
  box-shadow: rgb(0 0 0 / 20%) 0 12px 28px 0, rgb(0 0 0 / 10%) 0 2px 4px 0, rgb(255 255 255 / 5%) 0 0 0 1px inset;
  padding: 2em 0;
  margin-bottom: 2em;
}

#close {
  margin-left: 15%;
  margin-top: -50px;
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

.v3dp__datepicker {
  border-bottom: 1px #b4b4b4 solid;
}

:deep .vue__time-picker {
  width: 100%;
}

:deep .time {
  border: none;
  border-bottom: 1px #b4b4b4 solid;
  height: auto;
  padding: 0;
  width: 100%;
}

:deep .time input {
  border: none;
}

#arrow {
  background: none;
  box-shadow: none;
  padding: 0;
}

.v-row {
  align-items: center;
  padding-left: 2em;
}

#button {
  background-color: #F58926;
  color: #FFFBF7;
  margin-bottom: 1em;
}

.car {
  display: flex;
  flex-direction: row;
  align-items: center;
}

#person {
  width: 50%;
}

.left {
  width: 40%;
}

.right {
  width: 40%;
}

.model {
  width: 100%; padding: 0 1em;
}

.error {
  color: #B00020;
  font-size: 12px;
  padding-top: 5px;
}

:deep .errorInput {
  border: none;
  border-bottom: 1px #B00020 solid;
  height: auto;
  padding: 0;
  width: 100%;
}

:deep .errorInput input {
  border: none;
}

:deep .errorInput ::placeholder {
  color: #B00020;
  opacity: 1;
}

@media (min-width: 750px) and (max-width: 1250px) {
  #route {
    flex-direction: column;
    width: 100%;
    align-items: center;
    margin-left: 0;
  }

  #step {
    width: 70%;
    margin-left: 15%;
  }

  #left {
    text-align: center;
    width: 100%;
    padding-right: 0;
  }

  #right {
    width: 100%;
    text-align: center;
  }

  #person {
    width: 30%;
    margin-left: 35%;
  }

  .car {
    flex-direction: column;
  }

  .left {
    display: flex;
    flex-direction: row;
  }

  .model {
    padding: 0 0 0 1em;
  }
}

@media (max-width: 750px) {
  #route {
    flex-direction: column;
    width: 100%;
    align-items: center;
    margin-left: 0;
  }

  #left {
    text-align: center;
    width: 100%;
    padding-right: 0;
  }

  #right {
    width: 100%;
    text-align: center;
  }

  #person {
    width: 100%;
  }

  .car {
    flex-direction: column;
  }

  .left {
    display: flex;
    flex-direction: row;
    width: 100%;
  }

  .right {
    width: 100%;
  }

  .model {
    padding: 0 0 0 1em;
  }

  #card {
    width: 100%;
  }
}
</style>
