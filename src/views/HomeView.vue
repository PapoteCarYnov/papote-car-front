<template>
  <AppHeader/>
  <v-container>
    Home page
    <router-link :to="{ name: 'login', force: true, state: { login: true } }">Se connecter</router-link>
    <router-link :to="{ name: 'login', force: true, state: { login: false } }">S'inscrire</router-link>
  </v-container>
</template>

<script>
import AppHeader from '../components/MyHeader.vue';

export default {
  name: 'HomeView',

  components: {
    AppHeader,
  },
}
</script>
