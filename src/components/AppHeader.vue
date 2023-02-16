<template>
    <div class="header">
        <v-app-bar
            color="#FFFBF7"
        >
            <template #prepend>
                <v-img
                    width="150"
                    src="../assets/papotecar_logo.png"
                >
                </v-img>
            </template>
            <v-spacer/>
            <router-link :to="{ name: 'login', force: true, state: { login: true } }">
              <v-btn
                  variant="outlined"
                  class="header-button"
                  color="#F58926"
              >
                Connexion
              </v-btn>
            </router-link>
            <router-link :to="{ name: 'login', force: true, state: { login: false } }">
              <v-btn
                  class="header-button header-button-background"
              >
                Inscription
              </v-btn>
            </router-link>
        </v-app-bar>
        
    </div>
</template>

<script>
export default {
    name: 'AppHeader'
}
</script>
<style>
a {
  color: inherit;
  text-decoration: inherit;
}
</style>
