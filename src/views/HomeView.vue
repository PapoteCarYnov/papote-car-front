<template>
  <v-container>
    <section id="home">
      <div id="content">
        <div>
          <div>
            <h1 id="title">PapoteCar</h1>
            <p id="slogan">Ne parlez pas tout seul avec votre chien :)</p>
          </div>
          <div>
            <h2 id="destination">Où voulez-vous aller ?</h2>
          </div>
        </div>
        <div>
          <v-form v-model="valid" ref="form">
            <v-container>
              <MqResponsive target="md-xl">
                <v-row>
                  <v-col cols="1" md="1">
                    <v-icon icon="mdi-map-marker" />
                  </v-col>
                  <v-col cols="4" md="4">
                    <v-text-field v-model="start" :rules="startRules" label="Départ" placeholder="Départ" variant="underlined" required></v-text-field>
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
                  <v-col cols="9" md="9">
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
                  <v-col cols="10" md="10">
                    <v-text-field v-model="end" :rules="endRules" label="Arrivée" placeholder="Arrivée" variant="underlined" required></v-text-field>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col cols="1" md="1">
                    <v-icon icon="mdi-calendar-blank" />
                  </v-col>
                  <v-col cols="10" md="10">
                    <Datepicker v-model="date" :rules="dateRules" :locale="locale" inputFormat="dd-MM-yyyy" required></Datepicker>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col cols="1" md="1">
                    <v-icon icon="mdi-account-multiple" />
                  </v-col>
                  <v-col cols="10" md="10">
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
      </div>
      <div>
        <v-img :src="require('../assets/home/drive.png')" width="450px" id="drive"></v-img>
      </div>
    </section>
    <section>
      <v-img
          aria-hidden=true
          :src="require('../assets/home/sectionWhyTop.png')"
          cover
      ></v-img>
      <MqResponsive target="md-xl">
        <div id="sectionWhy">
          <div id="whyLeft">
            <div style="width: 100%;">
              <h3 class="title">CHOISISSEZ SELON VOS PRÉFÉRENCES</h3>
              <p>Voyagez avec de petits prix, selon des horaires précis. Vous avez de nombreux filtres à votre disposition pour trouver votre bonheur. A vous de trouver votre Papote !</p>
            </div>
            <v-img
                aria-hidden=true
                :src="require('../assets/home/sectionWhyLeft.png')"
                width="350"
            ></v-img>
          </div>
          <div id="whyMiddle">
            <v-img
                aria-hidden=true
                :src="require('../assets/home/sectionWhyMiddle.png')"
                width="350"
            ></v-img>
            <div style="width: 100%;">
              <h3 class="title">DÉCOUVREZ DE NOUVELLES PERSONNES</h3>
              <p>Faites de nouvelles rencontres ! Vous allez pouvoir papoter avec plein de personnes. La route vous paraîtra moins longue et sera moins chère !</p>
            </div>
          </div>
          <div id="whyRight">
            <div style="width: 100%;">
              <h3 class="title">VOYAGEZ AVEC LA CEINTURE DE SÉCURITÉ</h3>
              <p>Il est important de voyager dans de bonnes conditions, mais encore plus avec des personnes avec qui on a confiance. Notre application permet de confirmer ou non vos coéquipiers de route. De plus, notre application sécurisée permet de conduire plus sereinement.</p>
            </div>
            <v-img
                aria-hidden=true
                :src="require('../assets/home/sectionWhyRight.png')"
                width="350"
            ></v-img>
          </div>
        </div>
      </MqResponsive>
      <MqResponsive target="xs-sm">
        <div id="sectionWhyResponsive">
          <div>
            <div style="width: 100%;">
              <h3 class="title">CHOISISSEZ SELON VOS PRÉFÉRENCES</h3>
              <p>Voyagez avec de petits prix, selon des horaires précis. Vous avez de nombreux filtres à votre disposition pour trouver votre bonheur. A vous de trouver votre Papote !</p>
            </div>
            <div class="section">
              <v-img
                  aria-hidden=true
                  :src="require('../assets/home/sectionWhyLeft.png')"
                  width="350"
              ></v-img>
            </div>
          </div>
          <div>
            <div style="width: 100%;">
              <h3 class="title">DÉCOUVREZ DE NOUVELLES PERSONNES</h3>
              <p>Faites de nouvelles rencontres ! Vous allez pouvoir papoter avec plein de personnes. La route vous paraîtra moins longue et sera moins chère !</p>
            </div>
            <div class="section">
              <v-img
                  aria-hidden=true
                  :src="require('../assets/home/sectionWhyMiddle.png')"
                  width="350"
              ></v-img>
            </div>
          </div>
          <div>
            <div style="width: 100%;">
              <h3 class="title">VOYAGEZ AVEC LA CEINTURE DE SÉCURITÉ</h3>
              <p>Il est important de voyager dans de bonnes conditions, mais encore plus avec des personnes avec qui on a confiance. Notre application permet de confirmer ou non vos coéquipiers de route. De plus, notre application sécurisée permet de conduire plus sereinement.</p>
            </div>
            <div class="section">
              <v-img
                  aria-hidden=true
                  :src="require('../assets/home/sectionWhyRight.png')"
                  width="350"
              ></v-img>
            </div>
          </div>
        </div>
      </MqResponsive>
      <v-img
          aria-hidden=true
          :src="require('../assets/home/sectionWhyBottom.png')"
          cover
      ></v-img>
    </section>
    <section>
      <div id="sectionPost">
        <v-img
            class="post"
            aria-hidden=true
            :src="require('../assets/home/sectionPost.png')"
            width="450"
        ></v-img>
        <div id="post">
          <h3 class="title">Vous cherchez un compagnon de voyage avec qui papoter ?</h3>
          <p>Postez votre trajet ! Vous trouverez de nombreux covoitureurs voulant rejoindre votre trajet. Choisissez les étapes et les horaires de votre itinéraire et c’est tout ! Facile, non ? Qui sait ? Vous trouverez peut être votre perle rare ;)</p>
          <v-btn style="margin-top: 2em; background-color: #F58926; color: white;">PARTAGEZ VOTRE TRAJET</v-btn>
        </div>
      </div>
    </section>
    <section style="text-align: center;">
      <div id="sectionPeople">
        <h3 class="title">Qu’attendez vous pour partir à l’aventure ?</h3>
        <p>Rejoignez notre communauté pour papoter avec nous et découvrir des tas de personnes chaleureuse et passionnées !</p>
        <v-btn style="margin-top: 2em; background-color: #F58926; color: white;">INSCRIVEZ-VOUS</v-btn>
      </div>
      <div id="imgPeople">
        <v-img
            aria-hidden=true
            :src="require('../assets/home/people.png')"
            align="center"
        ></v-img>
      </div>
      <div>
        <p>Fais avec <span style="color: #F58926">❤</span> par les Renards Temporaire</p>
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

export default {
  name: 'HomeView',
  components: {MqResponsive, Datepicker},
  data() {
    return {
      valid: false,
      start: null,
      end: null,
      date: date,
      locale: fr,
      nbPeople: null,
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
    }
  },
  methods: {
    async submitForm() {
      this.$refs.form.validate();
      router.push("/search");
    },
    changeDestination() {
      const start = this.start;
      this.start = this.end;
      this.end = start;
    }
  }
}
</script>
<style scoped>
#home {
  display: flex;
  flex-direction: row;
  padding-left: 5em;
  padding-bottom: 5em;
}

.v-row {
  align-items: center;
}

.v-col-1 {
  flex: 0 0 30px;
  padding: 0;
}

#title {
  font-size: 96px;
}

#slogan {
  font-size: 24px;
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

#button {
  background-color: #F58926;
  color: white;
  margin-left: 5px;
  margin-top: 5px;
}

.v-container {
  max-width: 100%;
  padding: 3em 0 0 0;
}

#content {
  width: 60%;
}

#arrow {
  background: none;
  box-shadow: none;
}

.title {
  font-size: 24px;
  padding-bottom: 1em;
}

#col {
  flex: 0 0 65px;
}

#post {
  width: 50%;
  padding-left: 5em;
}

#sectionWhy {
  display: flex;
  flex-direction: row;
  background-color: white;
  align-items: center;
  padding: 3em;
}

#whyLeft {
  padding: 0 3em 0 0;
  align-items: center;
  width: 80%;
}

#whyMiddle {
  align-items: center;
  width: 80%;
}

#whyRight {
  align-items: center;
  width: 80%;
  padding: 0 0 0 3em;
}

#sectionPost {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 10em;
}

#sectionPeople {
  width: 70%;
  padding-left: 30%;
}

#imgPeople {
  width: 65%;
  padding-left: 35%;
}

#sectionWhyResponsive {
  display: flex;
  flex-direction: column;
  background-color: white;
  align-items: center;
  padding: 3em;
  text-align: center;
}

.section {
  margin: 2em 0 2em 20%;
  display: flex;
  width: 60%;
}

@media (min-width: 750px) and (max-width: 1250px) {
  #sectionWhy {
    background-color: white;
    align-items: center;
    padding: 0 3em;
    display: block;
  }

  #whyLeft {
    padding: 0 0 3em 0;
    text-align: center;
    width: 90%;
    margin-left: 5%;
    display: flex;
  }

  #whyMiddle {
    text-align: center;
    width: 90%;
    margin-left: 5%;
    padding: 0 0 3em 0;
    display: flex;
  }

  #whyRight {
    text-align: center;
    width: 90%;
    margin-left: 5%;
    padding: 0;
    display: flex;
  }

  #drive {
    display:none;
  }

  #title {
    font-size: 70px;
  }

  #content {
    width: 100%;
  }

  #post {
    width: 80%;
    margin-left: 10%;
    padding: 0;
    text-align: center;
  }

  #imgPeople {
    width: 70%;
    padding-left: 30%;
  }

  .post {
    display: none;
  }
}

@media (max-width: 750px) {
  #drive {
    display: none;
  }

  #content {
    width: 100%;
  }

  #home {
    padding: 3em;
  }

  #title {
    font-size: 50px;
  }

  #slogan {
    font-size: 18px;
  }

  #destination {
    font-size: 25px;
    font-weight: 700;
  }

  #post {
    width: 80%;
    margin-left: 10%;
    padding: 0;
    text-align: center;
  }

  #sectionPost {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 5em 3em;
  }

  #sectionPeople {
    width: 80%;
    padding-left: 20%;
  }

  #imgPeople {
    width: 80%;
    padding-left: 20%;
  }

  .post {
    display: none;
  }
}

</style>
