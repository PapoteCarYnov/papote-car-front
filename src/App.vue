<template>
  <v-app id="app">
    <v-main>
      <AppHeader/>
      <router-view/>
    </v-main>
    <Footer/>
  </v-app>
</template>

<script>
import AppHeader from './components/AppHeader.vue';
import Footer from './components/AppFooter.vue';

export default {
  name: 'App',

  components: {
    AppHeader,
    Footer
  },

  created() {
    this.emitter.emit("isLoggedIn", false);
  }
}
</script>
<style scoped>
#app {
  background-color: #FFFBF7;
  font-family: 'Poppins', sans-serif;
}
</style>
