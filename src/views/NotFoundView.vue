<template>
  <div id="notfound">
    <h1>Erreur 404</h1>
    <v-img :src="require('../assets/404.svg')" width="700px" id="error" alt="error404"></v-img>
  </div>
</template>

<script>

export default {
  name: 'NotFoundView'
}

</script>
<style scoped>
#notfound {
  color: #F58926;
  text-align: center;
  padding-top: 5%;
}

#error {
  display: inline-block;
}
</style>
