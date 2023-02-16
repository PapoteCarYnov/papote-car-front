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
            <v-btn
                variant="outlined"
                class="header-button"
                color="#F58926"
            >
                Connexion
            </v-btn>
            <v-btn
                class="header-button header-button-background"
            >
                Inscription
            </v-btn>
        </v-app-bar>
        
    </div>
</template>

<script>
export default {
    name: 'AppHeader',

    setup() {
        
    },
}
</script>