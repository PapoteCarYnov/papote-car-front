<template>
  <v-app id="app">
    <v-main>
      <AppHeader/>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
import AppHeader from './components/AppHeader.vue';

export default {
  name: 'App',

  components: {
    AppHeader,
  },
}
</script>
<style scoped>
#app {
  background-color: #FFFBF7;
}
</style>
