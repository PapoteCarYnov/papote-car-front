<template>
  <div id="login">
    <div>
      <h1 v-if="login">Connexion</h1>
      <h1 v-else>Inscription</h1>
    </div>
    <v-form v-model="valid" ref="form">
      <v-container>
        <v-row v-if="!login">
          <v-col cols="12" md="3">
            <v-text-field v-model="firstname" :rules="firstnameRules" label="Prénom" placeholder="Prénom" variant="underlined" required></v-text-field>
          </v-col>
        </v-row>
        <v-row v-if="!login">
          <v-col cols="12" md="3">
            <v-text-field v-model="lastname" :rules="lastnameRules" label="Nom" placeholder="Nom" variant="underlined" required></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" md="3">
            <v-text-field v-model="mail" :rules="mailRules" label="Email" placeholder="Email" variant="underlined" required></v-text-field>
          </v-col>
        </v-row>
        <v-row v-if="!login">
          <v-col cols="12" md="3">
            <v-text-field v-model="birthdate" :rules="birthdateRules" type="date" variant="underlined" required></v-text-field>
          </v-col>
        </v-row>
        <v-row v-if="!login">
          <v-col cols="12" md="3">
            <v-text-field v-model="phone" :rules="phoneRules" type="phone" placeholder="Numéro de téléphone" variant="underlined" required></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" md="3">
            <v-text-field
                v-model="password"
                :rules="passwordRules"
                :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
                label="Mot de passe"
                :type="show ? 'text' : 'password'"
                @click:append="show = !show"
                hint="At least 8 characters"
                variant="underlined" counter required></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-btn v-if="!login" @click="submitForm">S'inscrire</v-btn>
          <v-btn v-else @click="submitForm">Se connecter</v-btn>
        </v-row>
      </v-container>
    </v-form>
    <div style="margin-top: auto">
      <v-img
          :src="require('../assets/footerAuthentification.svg')"
          cover
      ></v-img>
    </div>
  </div>
</template>

<script>

export default {
  name: 'LoginView',
  data() {
    return {
      login: false,
      show: false,
      valid: false,
      firstname: '',
      lastname: '',
      mail: '',
      birthdate: '',
      phone: '',
      password: '',
      firstnameRules: [
        v => !!v || 'Ce champ est requis'
      ],
      lastnameRules: [
        v => !!v || 'Ce champ est requis'
      ],
      mailRules: [
        v => !!v || 'Ce champ est requis is required',
        v => /.+@.+/.test(v) || 'Le mail doit être valide',
      ],
      birthdateRules: [
          v => !!v || "Ce champs est requis."
      ],
      phoneRules: [
          v => /^\d{10}$/.test(v) || "Le numéro de téléphone n'est pas valide"
      ],
      passwordRules: [
        v => v.length >= 8 || 'Le mot de passe doit faire au moins 8 charactères',
      ],
    }
  },
  methods: {
    async submitForm () {
      if (this.valid) {
        if (this.login) {
          await fetch("connexion", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              email: this.email,
              password: this.password
            }),
          });
        } else {
          await fetch("inscription", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              email: this.email,
              password: this.password,
              firstname: this.firstname,
              lastname: this.lastname,
              birthdate: this.birthdate,
              phone: this.phone
            }),
          });
        }
      }
    },
  },
  created() {
    this.login = window.history.state.login;
  },
}
</script>
<style scoped>
h1 {
  font-weight: 700;
  text-align: center;
  padding-top: 2em;
}

:deep(.v-row) {
  justify-content: center;
  height: 60px;
}

:deep(.v-btn) {
  justify-content: center;
  margin-top: 3em;
  background-color: #F58926;
  color: white;
}

#login {
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  justify-content: flex-start;
}

</style>
