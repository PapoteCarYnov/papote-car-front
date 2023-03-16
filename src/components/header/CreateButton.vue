<template>
  <router-link :to="{ name: 'search'}">
    <div class="create-button">
      <v-icon icon="mdi-plus-circle-outline" aria-hidden="true" /> 
      <span class="button-text">Créer un trajet</span>
    </div>
  </router-link>
</template>
<script>
export default {
  name: "CreateButton",
}
</script>
<style scoped>
.create-button {
  margin-right: 10px;
}
.button-text {
  text-decoration: underline
}
</style>