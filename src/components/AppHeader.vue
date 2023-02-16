<template>
  <div class="header">
    <MqResponsive target="sm+">
      <v-app-bar color="#FFFBF7">
        <template #prepend>
          <HeaderLogo></HeaderLogo>
        </template>
        <v-spacer />
        <ConnectButton></ConnectButton>
        <LoginButton></LoginButton>
      </v-app-bar>
    </MqResponsive>
    <MqResponsive target="xs">
      <v-app-bar color="#FFFBF7">
        <template #prepend>
          <HeaderLogo></HeaderLogo>
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
            <ConnectButton></ConnectButton>
          </v-col>
        </v-row>

        <v-row>
          <v-col cols="12" class="text-center">
            <LoginButton></LoginButton>
          </v-col>
        </v-row>
      </v-navigation-drawer>
    </MqResponsive>
  </div>
</template>

<script>
import { MqResponsive } from "vue3-mq";
import router from '../router/index.js';
import HeaderLogo from './header/HeaderLogo.vue';
import ConnectButton from './header/ConnectButton.vue';
import LoginButton from './header/LoginButton.vue';

export default {
  name: "AppHeader",

  components: {
    MqResponsive,
    HeaderLogo,
    ConnectButton,
    LoginButton,
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

:deep(.burger-menu) {
  background-color: #fffbf7;
  padding-top: 10px;
}

</style>