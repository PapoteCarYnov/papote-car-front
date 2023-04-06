<template>
  <div style="margin-bottom: 1em;">
    <div>
      <div>
        <h1 style="text-align: center; padding: 2em 0 0 0;">Fixer vos prix</h1>
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
              <v-btn id="less" @click="less">-</v-btn>
              <v-text-field v-model="price" class="inputPrice" type="number" id="price" variant="underlined"></v-text-field>
              <v-btn id="more" @click="more">+</v-btn>
            </div>
          </div>
        </v-card>
        <div class="button">
          <v-btn id="previous" @click="router.push({ path: 'create-route' });">Précédent</v-btn>
          <v-btn id="next" @click="submit()">Suivant</v-btn>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import router from "@/router";
import { useRoute } from 'vue-router'
import rideService from "@/services/rideService";
import moment from 'moment';

export default {
  name: 'PriceView',
  async mounted() {
    const route = useRoute();
    this.id = route.params.id;
    const ride = await rideService.getRide(this.id);
    this.step1 = ride.data.steps[0]['city']['name'];
    this.startStepId = ride.data.steps[0]['id'];
    this.step2 = ride.data.steps[1]['city']['name'];
    this.endStepId = ride.data.steps[1]['id'];
    moment.locale('fr')
    this.date = moment(ride.data.steps[0]['date'], 'Y/M/D').format('dddd D MMMM Y');
    this.startTime = ride.data.steps[0]['time'];
    this.endTime = ride.data.steps[1]['time'];
  },
  computed: {
    router() {
      return router
    }
  },
  data() {
    return {
      price: 0,
      step1: null,
      step2: null,
      startStepId: null,
      endStepId: null,
      id: null,
      date: null,
      startTime: null,
      endTime: null
    }
  },
  methods: {
    less() {
      if (this.price <= 0) this.price = 0;
      else this.price = this.price - 1;
    },
    more() {
      this.price = this.price + 1;
    },
    async submit() {
      await rideService.updatePrice(
          {
            price: this.price,
            startStepId: this.startStepId,
            endStepId: this.endStepId,
          }
      )
      await router.push({name: 'summary', params: {id: this.id}});
    }
  }
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

.inputPrice >>> input[type="number"] {
  -moz-appearance: textfield;
}
.inputPrice >>> input::-webkit-outer-spin-button,
.inputPrice >>> input::-webkit-inner-spin-button {
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
}

.inputPrice >>> input {
  text-align: right;
  width: 50px;
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
}

#less {
  box-shadow: none;
  border: 1px solid black;
  border-radius: 10em;
  width: 30px;
  height: 30px;
  min-width: 30px;
  padding: 0;
  margin-right: 1em;
}

#more {
  box-shadow: none;
  border: 1px solid black;
  border-radius: 28px;
  width: 30px;
  height: 30px;
  min-width: 30px;
  padding: 0;
  margin-left: 1em;
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

  .contentCard {
    flex-direction: column;
  }

  .lastItem {
    margin-left: 0;
    padding-right: 0;
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
    margin-left: 0;
    padding-right: 0;
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
