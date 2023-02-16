<template>
  <v-img width="150" src="../../assets/papotecar_logo.svg" @click="toHome">
  </v-img>
</template>

<script>
import router from '../../router/index.js';

export default {
  name: "HeaderLogo",

  methods: {
    toHome() {
      router.push("/");
    },
  },

}
</script>