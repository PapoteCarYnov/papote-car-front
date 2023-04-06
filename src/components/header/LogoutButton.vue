<template>
  <v-btn variant="outlined" class="header-button" color="#F58926" @click="logout">
    Déconnexion
  </v-btn>
</template>
<script>
import router from '../../router/index.js';

export default {
  name: "LogoutButton",

  methods: {
    logout() {
      localStorage.removeItem("user-token");
      this.emitter.emit("isLoggedIn", false);
      window.location.reload();
      router.push("/");
    }
  },
}
</script>
<style scoped>
.header-button {
  margin-right: 10px;
}
</style>