<template>
  <div style="margin-bottom: 1em;">
    <div>
      <div>
        <h1 style="text-align: center; padding: 2em 0 0 0;">Récapitulatif</h1>
      </div>
      <div class="content">
        <h2 style="padding: 1em 0;">Vendredi 10 mars 2023</h2>
        <v-card class="card">
          <div class="contentCard">
            <div class="ul">
              <ul class="padding">
                <li>6h</li>
                <li>7h</li>
              </ul>
              <ul class="bar">
                <li>step 1</li>
                <li>step 2</li>
              </ul>
            </div>
            <div class="lastItem">
              <p>9€</p>
            </div>
          </div>
        </v-card>
        <div style="margin-bottom: 2em;">
          <span><span>Prix total pour 1 pasager sur tout le trajet: </span><span style="font-weight: bold; font-size: 24px;">18.50€</span></span>
          <hr style="margin: 2em 0; height: 2px; background-color: #333;">
          <div style="display: flex; flex-direction: row; justify-content: space-between;">
            <span>Votre véhicule:</span>
            <div style="display: flex; flex-direction: column; text-align: right;">
              <span>OPEL GRANLAND X</span>
              <span>Blanc</span>
            </div>
          </div>
        </div>
        <div class="button">
          <v-btn id="previous" @click="router.push({ path: 'price' });">Précédent</v-btn>
          <v-btn id="next" @click="router.push({ path: 'roadmap' });">Publier</v-btn>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import router from "@/router";

export default {
  name: 'SummaryView',
  computed: {
    router() {
      return router
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
