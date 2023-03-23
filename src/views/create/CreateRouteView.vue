<template>
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
            <v-text-field v-model="start" :rules="startRules" label="Départ" placeholder="Départ" variant="underlined" required></v-text-field>
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
            <v-text-field v-model="end" :rules="endRules" label="Arrivée" placeholder="Arrivée" variant="underlined" required></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="1" md="1">
            <v-icon icon="mdi-calendar-blank" />
          </v-col>
          <v-col cols="4" md="4">
            <Datepicker v-model="date" :rules="dateRules" :locale="locale" inputFormat="dd-MM-yyyy" required></Datepicker>
          </v-col>
          <v-col cols="1" md="1">
            <v-icon icon="mdi-clock-outline" />
          </v-col>
          <v-col cols="4" md="4">
            <VueTimePicker id="time" :rules="timeRules" format="HH:mm:ss" v-model="time" required></VueTimePicker>
          </v-col>
        </v-row>
      </div>
    </div>
    <div id="route">
      <div id="left">
        <h2>Etape</h2>
        <p>Les petites pauses c'est essentielles !</p>
      </div>
      <div id="right">
        <div v-for="index in steps" :key="index">
          <div v-if="step" id="step">
            <v-row>
              <v-col cols="1" md="1">
                <v-icon icon="mdi-map-marker" />
              </v-col>
              <v-col cols="8" md="8">
                <v-text-field v-model="address[index]" label="Adresse" placeholder="Adresse" variant="underlined" required></v-text-field>
              </v-col>
              <v-icon id="close" icon="mdi-close" @click="close(index)" />
            </v-row>
            <v-row>
              <v-col cols="1" md="1">
                <v-icon icon="mdi-clock-outline" />
              </v-col>
              <v-col cols="4" md="4">
                <VueTimePicker id="time" format="HH:mm:ss" v-model="stepTime[index]" required></VueTimePicker>
              </v-col>
            </v-row>
          </div>
        </div>
        <v-btn id="button" @click="add()">AJOUTER UNE ETAPE</v-btn>
        <p v-if="!step">Tu pourras récupérer d'autres compagnons de voyage.</p>
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
              :items="personSorting"
              label="Nombre de personnes"
              variant="underlined"
              required
          ></v-select>
        </div>
        <p>Ajoutez des précisions sur votre véhicule afin de vous retrouver plus facilement.</p>
        <div class="car">
          <div class="car left">
            <v-icon icon="mdi-car" />
            <div class="model">
              <v-text-field v-model="model" :rules="modelRules" label="Modèle du véhicule" placeholder="Modèle du véhicule" variant="underlined" required></v-text-field>
            </div>
          </div>
          <div class="right">
            <v-text-field v-model="color" :rules="colorRules" label="Couleur du véhicule" placeholder="Couleur du véhicule" variant="underlined" required></v-text-field>
          </div>
        </div>
      </div>
    </div>
    <div style="text-align: center;">
      <v-btn id="button" @click="router.push({ path: 'price' });">SUIVANT</v-btn>
    </div>
  </div>
</template>
<script>
  import Datepicker from 'vue3-datepicker';
  import {fr} from "date-fns/locale";
  import {ref} from "vue";
  import VueTimePicker from "vue3-timepicker";
  import "vue3-timepicker/dist/VueTimepicker.css";
  const date = ref(new Date());
  import router from "@/router";

  export default {
    name: "CreateRouteView",
    computed: {
      router() {
        return router
      }
    },
    components: {Datepicker, VueTimePicker},
    data() {
      return {
        start: null,
        end: null,
        date: date,
        locale: fr,
        time: null,
        color: null,
        model: null,
        step: false,
        numberStep: 0,
        steps: [],
        address: [],
        stepTime: [],
        startRules: [
          v => !!v || 'Ce champ est requis'
        ],
        endRules: [
          v => !!v || 'Ce champ est requis'
        ],
        dateRules: [
          v => !!v || "Ce champs est requis"
        ],
        timeRules: [
          v => !!v || "Ce champ est requis"
        ],
        modelRules: [
          v => !!v || "Ce champ est requis"
        ],
        colorRules: [
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

      add() {
        this.step = true;
        this.numberStep = this.numberStep + 1;
        this.steps.push(this.numberStep);
      },

      close(id) {
        this.steps.splice(this.steps.indexOf(id), 1);
      }
    }
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

:deep #time {
  border: none;
  border-bottom: 1px #b4b4b4 solid;
  height: auto;
  padding: 0;
  width: 100%;
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
