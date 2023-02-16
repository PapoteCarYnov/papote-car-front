<template>
  <div class="header">
    <MqResponsive target="sm+">
      <v-app-bar color="#FFFBF7">
        <template #prepend>
          <v-img width="150" src="../assets/papotecar_logo.svg"> </v-img>
        </template>
        <v-spacer />
        <v-btn variant="outlined" class="header-button" color="#F58926">
          Connexion
        </v-btn>
        <v-btn class="header-button header-button-background">
          Inscription
        </v-btn>
      </v-app-bar>
    </MqResponsive>
    <MqResponsive target="xs">
      <v-app-bar color="#FFFBF7">
        <template #prepend>
          <v-img width="150" src="../assets/papotecar_logo.svg"> </v-img>
        </template>
        <v-spacer />
        <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      </v-app-bar>
      <v-navigation-drawer
        class="burger-menu"
        v-model="drawer"
        location="top"
        width="120"
      >
        <v-row>
          <v-col cols="12" align-self="center">
            <v-btn variant="outlined" class="header-button" color="#F58926">
              Connexion
            </v-btn>
          </v-col>
        </v-row>

        <v-row>
          <v-col cols="12" align-self="center">
            <v-btn class="header-button header-button-background">
              Inscription
            </v-btn>
          </v-col>
        </v-row>
      </v-navigation-drawer>
    </MqResponsive>
  </div>
</template>

<script>
import { MqResponsive } from "vue3-mq";

export default {
  name: "AppHeader",

  components: {
    MqResponsive,
  },

  data: () => ({
    drawer: false,
  }),

  inject: ["mq"],
};
</script>

<style scoped>
.header-button {
  margin-right: 10px;
}

.header-button-background {
  background-color: #f58926;
  color: white;
}

:deep(.burger-menu) {
  background-color: #fffbf7;
  padding-top: 10px;
}

.v-navigation-drawer__content {
    align-self: center;
}
</style>