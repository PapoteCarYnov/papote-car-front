<template>
  <div id="chat">
    <MqResponsive target="xs-sm">
      <v-icon v-if="!show" icon="mdi-menu-right" @click="show = true;" class="arrow"/>
    </MqResponsive>
    <div id="menu" v-if="show">
      <MqResponsive target="xs-sm">
        <v-icon icon="mdi-close" @click="show = false;" style="color: white;"/>
      </MqResponsive>
      <h1 style="padding: 1em 0 0 1em; color: white;">Discussion</h1>
      <div v-for="(value, key) in chat" v-bind:key="key" @click="selected = key;" :class="selected === key ? 'menuSelected' : 'menuUnselected'">
        <div class="profile-icon">
          <v-icon icon="mdi-account-circle-outline"/>
        </div>
        <div>
          <p>Trajet du vendredi 8 mars</p>
          <p style="font-size: 14px; font-style: italic">23/03/2023</p>
        </div>
      </div>
    </div>
    <div id="content">
      <div style="padding-bottom: 2em;">
        <h2>Trajet du vendredi 8 mars</h2>
        <p>De Nantes à Montaigu</p>
      </div>
      <div v-for="(value, key) in content" v-bind:key="key" style="padding-bottom: 2em;">
        <div :class="value[0] === 'Moi' ? 'myContent' : 'otherContent'">
          <p v-if="value[0] !== 'Moi' && (typeof content[key-1] === 'object' && content[key-1][0] !== value[0])">{{value[0]}}</p>
          <p v-else-if="typeof content[key-1] !== 'object'">{{value[0]}}</p>
          <div :class="value[0] === 'Moi' ? 'me' : 'sms'">{{value[1]}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import { MqResponsive } from "vue3-mq";

export default {
  name: 'ChatView',
  components: {MqResponsive},
  data() {
    return {
      show: true,
      selected: 0,
      chat: [1,2,3,4, 5, 6, 7, 8, 9],
      content: [
          ["Alan", "Bonjour :)"],
          ["Camille", "Hello ! Heureuse de vous rencontrer, j’ai hâte de faire ce trajet avec vous. Je peux emmener mon chat avec nous ? Il sera dans une caisse de transport"],
          ["Alan", "Pas de soucis"],
          ["Moi", "Pas de problème"],
          ["Camille", "Super, merci ^^"],
          ["Camille", "Par contre, elle risque de miauler car elle aime pas prendre la voiture"],
      ],
    }
  },
  mounted() {
    this.scrollToElement();
  },
  created() {
    window.addEventListener("resize", this.myEventHandler);
  },
  methods: {
    scrollToElement() {
      this.bottom = this.$el.querySelector("#content").scrollHeight;
      window.scrollTo(0, this.bottom);
    },
    myEventHandler(e) {
      if (e.target.outerWidth >= 960) this.show = true;
    }
  }
}
</script>
<style scoped>
#chat {
  display: flex;
  flex-direction: row;
  height: 100%;
}

#menu {
  width: 400px;
  background-color: #F58926;
  height: 100%;
  position: fixed;
  overflow-y: auto;
  padding-bottom: 170px;
}

#menu::-webkit-scrollbar{
  display: none;
}

.menuSelected {
  color: black;
  padding: 1em 0 1em 1em;
  display: flex;
  flex-direction: row;
  border: 1px solid black;
  border-radius: 8px;
  margin: 1em;
  background-color: #FFFBF7;
}

.menuUnselected {
  color: white;
  padding: 1em 0 1em 1em;
  display: flex;
  flex-direction: row;
  border: 1px solid white;
  border-radius: 8px;
  margin: 1em;
}

.profile-icon {
  margin-right: 1em;
}

#content {
  padding: 2em 0 0 2em;
  margin-left: 400px;
}

.sms {
  background-color: transparent;
  width: -moz-fit-content;
  width: fit-content;
  padding: 1em;
  border-radius: 8px;
  border: 1px solid #F58926;
  color: #F58926;
}

.me {
  background-color: #F58926;
  width: -moz-fit-content;
  width: fit-content;
  padding: 1em;
  border-radius: 8px;
  color: white;
}

.myContent {
  width: 60%;
  text-align: -webkit-right;
  margin-left: 40%;
  padding-right: 2em;
}

.otherContent {
  width: 60%;
}

@media (max-width: 960px) {
  #menu {
    width: 300px;
    background-color: #F58926;
    height: 100%;
    position: fixed;
    overflow-y: auto;
    padding-bottom: 170px;
  }

  #content {
    margin-left: 20px;
  }

  .myContent {
    width: 70%;
    text-align: -webkit-right;
    margin-left: 30%;
    padding-right: 2em;
  }

  .otherContent {
    width: 70%;
  }

  .arrow {
    background-color: #F58926;
    height: 100%;
    position: fixed;
    padding-bottom: 170px;
    color: white;
  }
}
</style>
