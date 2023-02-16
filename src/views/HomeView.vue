<template>
  <v-container>
    Home page
    <router-link :to="{ name: 'login', force: true, state: { login: true } }">Se connecter</router-link>
    <router-link :to="{ name: 'login', force: true, state: { login: false } }">S'inscrire</router-link>
  </v-container>
</template>

<script>
export default {
  name: 'HomeView',
}
</script>
