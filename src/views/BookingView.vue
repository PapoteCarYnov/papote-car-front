<template>
  <div>
    <h1>Vendredi 4 février</h1>
  </div>
  <div id="booking-content">

    <div id="steps">
      <v-row class="center-row">
        <div class="flex-div">
          <ul class="no-bullet">
            <li v-for="step in stepsToShow" :key="step.id" class="time-step">
              {{ step.time }}
            </li>
          </ul>
          <ul class="ride-steps no-bullet">
            <li 
              v-for="step in stepsToShow" 
              :key="step.id"
              :class="{ greyBullet: !step.check }"
            >
              {{ step.city }}
            </li>
          </ul>
        </div>
      </v-row>
    </div>

    <v-divider :thickness="5"></v-divider>

    <div id="price_area">

      <MqResponsive target="sm+">
        <v-row>
          <v-col>
            <v-row>
              Prix total pour:
            </v-row>
            <v-row>
              <v-col cols="1" md="1">
                <v-icon icon="mdi-account-multiple" />
              </v-col>
              <v-col>
                <v-select 
                  :items="personSorting"
                  label="Nombre de personnes" 
                  variant="underlined"
                  required
                ></v-select>
              </v-col>
            </v-row>
          </v-col>
          
          <v-col class="col-right price">
            9€
          </v-col>
        </v-row>  
      </MqResponsive>

      <MqResponsive target="xs">
        <v-row>
          <v-col>
            Prix total pour:
          </v-col>
          <v-col class="price">
            9€
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="1" md="1">
            <v-icon icon="mdi-account-multiple" />
          </v-col>
          <v-col>
            <v-select 
              :items="personSorting"
              label="Nombre de personnes" 
              variant="underlined"
              required
            ></v-select>
          </v-col>
        </v-row>
      </MqResponsive>
    </div>

    <v-divider :thickness="5"></v-divider>

    <div id="driver">

      <MqResponsive target="sm+">
        <v-row>
          <v-col id="driver-info">
            Votre conducteur
          </v-col>
          <v-spacer/>
          <v-col id="car-info">
            La voiture
          </v-col>
        </v-row>
      </MqResponsive>

      <MqResponsive target="xs">
        <v-row class="center-row">
          <v-col id="driver-info">
            Votre conducteur
          </v-col>
          <v-spacer/>
          <v-col id="car-info">
            La voiture
          </v-col>
        </v-row>
      </MqResponsive>

    </div>

    <v-row class="center-row">
      <v-btn class="continue-button" @click="router.push({ path: 'login' });"> Continuer </v-btn>
    </v-row>

  </div>
</template>
<script>
import { MqResponsive } from "vue3-mq";
import router from "@/router";

export default {
  name: 'BookingView',
  components: {
    MqResponsive,
  },
  data() {
    return {
      stepsToShow: [
        {
          id: 1,
          time: '6h00',
          city: 'Nantes',
          check: true,
        }, {
          id: 2,
          time: '7h10',
          city: 'Rennes',
          check: true,
        }, {
          id: 3,
          time: '',
          city: 'St Malo',
          check: false,
        }
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
  computed: {
    router() {
      return router
    }
  },
}
</script>
<style scoped>
h1 {
  font-weight: 700;
  text-align: center;
  padding-top: 0.5em;
}
.center-row {
  justify-content: center;
}
v-divider {
  margin-top: 20px;
  margin-bottom: 20px;
  border: 1px solid gray;
}
#steps {
  margin: 30px auto;
}
.continue-button {
  background-color: #f58926;
  color: white;
  text-align: center;
  justify-content: center;
  margin: 20px auto;
}
#booking-content {
  margin: 0 25%; 
}
.col-right {
  text-align: right;
}
.price {
  font-weight: 700;
  font-size: 30px;
  margin-top: 17px;
  margin-bottom: 17px;
}
#price_area {
  margin-top: 30px;
}
.flex-div {
  display: flex;
}
.time-step {
  margin: 4px 0;
}
.no-bullet {
  list-style: none;
}
.ride-steps>li {
  position: relative;
}
.ride-steps>li:before {
  content: '\25CF';
  margin-right: 10px;
  font-size: 20px;
}
.ride-steps>li:after {
  position: absolute;
  left: 0;
  top: 0;
  content: '';
  border-left: 2px solid black;
  margin-left: 5px;
  height: 100%;
}
.ride-steps>li.greyBullet:before, .ride-steps>li.greyBullet {
  color: gray;
}
.ride-steps>li.greyBullet:after {
  border-color: gray;
}
#driver {
  margin-top: 15px;
}
</style>
