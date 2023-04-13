<template>
  <router-link :to="{ name: 'chat'}">
    <div class="chat-icon">
      <v-icon icon="mdi-chat-outline"/> 
    </div>
  </router-link>
</template>
<script>
export default {
  name: "ChatIcon",
}
</script>
<style scoped>
.chat-icon {
  margin-right: 10px;
}
</style>