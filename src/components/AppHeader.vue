<template>
  <div class="header">
    <MqResponsive target="sm+">
      <v-app-bar color="#FFFBF7">
        <template #prepend>
          <v-img width="150" src="../assets/papotecar_logo.svg" @click="toHome">
          </v-img>
        </template>
        <v-spacer />
        <router-link
          :to="{ name: 'login', force: true, state: { login: true } }"
        >
          <v-btn variant="outlined" class="header-button" color="#F58926">
            Connexion
          </v-btn>
        </router-link>
        <router-link
          :to="{ name: 'login', force: true, state: { login: false } }"
        >
          <v-btn class="header-button header-button-background">
            Inscription
          </v-btn>
        </router-link>
      </v-app-bar>
    </MqResponsive>
    <MqResponsive target="xs">
      <v-app-bar color="#FFFBF7">
        <template #prepend>
          <v-img width="150" src="../assets/papotecar_logo.svg" @click="toHome">
          </v-img>
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
          <v-col cols="12" class="text-center">
            <router-link
              :to="{ name: 'login', force: true, state: { login: true } }"
            >
              <v-btn variant="outlined" class="header-button" color="#F58926">
                Connexion
              </v-btn>
            </router-link>
          </v-col>
        </v-row>

        <v-row>
          <v-col cols="12" class="text-center">
            <router-link
              :to="{ name: 'login', force: true, state: { login: false } }"
            >
              <v-btn class="header-button header-button-background">
                Inscription
              </v-btn>
            </router-link>
          </v-col>
        </v-row>
      </v-navigation-drawer>
    </MqResponsive>
  </div>
</template>

<script>
import { MqResponsive } from "vue3-mq";
import router from '../router/index.js';

export default {
  name: "AppHeader",

  components: {
    MqResponsive,
  },

  data: () => ({
    drawer: false,
  }),

  methods: {
    toHome() {
      router.push("/");
    },
  },

  inject: ["mq"],
};
</script>

<style scoped>
a {
  color: inherit;
  text-decoration: inherit;
}

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

</style>