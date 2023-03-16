<template>
  <router-link :to="{ name: 'search'}">
    <div class="search-button">
      <v-icon icon="mdi-magnify" aria-hidden="true" /> 
      <span class="button-text">Rechercher</span>
    </div>
  </router-link>
</template>
<script>
export default {
  name: "SearchButton",
}
</script>
<style scoped>
.search-button {
  margin-right: 10px;
}
.button-text {
  text-decoration: underline
}
</style>