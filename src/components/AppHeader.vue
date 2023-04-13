<template>
  <div class="header">
    <MqResponsive target="sm+">
      <v-app-bar color="#FFFBF7">
        <template #prepend>
          <HeaderLogo></HeaderLogo>
        </template>
        <v-spacer/>
        <CreateButton v-if="isLoggedIn"></CreateButton>
        <RoadmapButton v-if="isLoggedIn"></RoadmapButton>
        <SearchButton v-if="isLoggedIn"></SearchButton>
        <ProfileIcon v-if="isLoggedIn"></ProfileIcon>
        <LogoutButton v-if="isLoggedIn"></LogoutButton>
        <ConnectButton v-if="!isLoggedIn"></ConnectButton>
        <SigninButton v-if="!isLoggedIn"></SigninButton>
      </v-app-bar>
    </MqResponsive>
    <MqResponsive target="xs">
      <v-app-bar color="#FFFBF7">
        <template #prepend>
          <HeaderLogo></HeaderLogo>
        </template>
        <v-spacer />
        <ProfileIcon v-if="isLoggedIn"></ProfileIcon>
        <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      </v-app-bar>
      <v-navigation-drawer
        class="burger-menu"
        v-model="drawer"
        location="top"
        v-bind:width="isLoggedIn ? 210 : 150"
      >

        <v-row v-if="isLoggedIn" class="nav-menu">
          <v-col cols="11" class="text-center">
            <CreateButton></CreateButton>
          </v-col>
        </v-row>

        <v-row v-if="isLoggedIn" class="nav-menu">
          <v-col cols="11" class="text-center">
            <RoadmapButton></RoadmapButton>
          </v-col>
        </v-row>

        <v-row v-if="isLoggedIn" class="nav-menu">
          <v-col cols="11" class="text-center">
            <SearchButton></SearchButton>
          </v-col>
        </v-row>

        <v-row v-if="isLoggedIn">
          <v-col cols="12" class="text-center">
            <LogoutButton></LogoutButton>
          </v-col>
        </v-row>

        <v-row v-if="!isLoggedIn">
          <v-col cols="12" class="text-center">
            <ConnectButton></ConnectButton>
          </v-col>
        </v-row>

        <v-row v-if="!isLoggedIn">
          <v-col cols="12" class="text-center">
            <SigninButton></SigninButton>
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
import SigninButton from './header/SigninButton.vue';
import LogoutButton from './header/LogoutButton.vue';
import SearchButton from './header/SearchButton.vue';
import RoadmapButton from './header/RoadmapButton.vue';
import CreateButton from './header/CreateButton.vue';
import ProfileIcon from './header/ProfileIcon.vue';

export default {
  name: "AppHeader",

  components: {
    MqResponsive,
    HeaderLogo,
    ConnectButton,
    SigninButton,
    LogoutButton,
    SearchButton,
    RoadmapButton,
    CreateButton,
    ProfileIcon,
  },

  data: () => ({
    drawer: false,
    isLoggedIn: false,
  }),

  methods: {
    toHome() {
      router.push("/");
    },
  },

  inject: ["mq"],

  mounted() {
    //this.isLoggedIn = localStorage.getItem('user-token') != null;
    this.emitter.on("isLoggedIn", r => {
      this.isLoggedIn = r;
    });
  },

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

.nav-menu {
  padding-left: 30px;
}

</style>