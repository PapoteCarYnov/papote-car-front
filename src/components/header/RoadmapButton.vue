<template>
  <router-link :to="{ name: 'search'}">
    <div class="roadmap-button">
      <v-icon icon="mdi-car" aria-hidden="true" /> 
      <span class="button-text">Plan de route</span>
    </div>
  </router-link>
</template>
<script>
export default {
  name: "RoadMapButton",
}
</script>
<style scoped>
.roadmap-button {
  margin-right: 10px;
}
.button-text {
  text-decoration: underline
}
</style>