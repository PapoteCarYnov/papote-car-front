<template>
  <router-link :to="{ name: 'profile'}">
    <div class="profile-icon">
      <v-icon icon="mdi-account-circle-outline"/> 
    </div>
  </router-link>
</template>
<script>
export default {
  name: "ProfileIcon",
}
</script>
<style scoped>
.profile-icon {
  margin-right: 10px;
}
</style>