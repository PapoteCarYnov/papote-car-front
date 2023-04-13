<template>
  <div id="profile">
    <div>
      <h1>Profil</h1>
    </div>
    <v-form ref="formPersonalInfo" class="formPersonalInfo">
      <v-container>
        <v-row>
          <v-col cols="12" md="12" class="form-subtitle">
            Informations personnelles
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" md="12">
            <v-text-field 
              v-model="firstname" 
              :rules="firstnameRules" 
              label="Prénom" 
              placeholder="Prénom" 
              variant="underlined" 
              required
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" md="12">
            <v-text-field 
              v-model="lastname" 
              :rules="lastnameRules" 
              label="Nom" 
              placeholder="Nom" 
              variant="underlined" 
              required
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" md="12">
            <v-text-field 
              v-model="mail" 
              :rules="mailRules" 
              label="Email" 
              placeholder="Email" 
              variant="underlined" 
              required
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" md="12">
            <v-text-field 
              v-model="birthdate" 
              :rules="birthdateRules" 
              type="date" 
              variant="underlined" 
              required
            ></v-text-field>
          </v-col>
        </v-row>
        <!--
        <v-row>
          <v-col cols="12" md="12">
            <v-text-field
              v-model="carmodel"
              :rules="carModelRules"
              placeholder="Modèle de la voiture"
              variant="underlined"
              required
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" md="12">
            <v-text-field
              v-model="carcolor"
              :rules="carColorRules"
              placeholder="Couleur de la voiture"
              variant="underlined"
              required
            ></v-text-field>
          </v-col>
        </v-row>
        -->
        <v-row>
          <v-btn class="form-button" @click="submitForm">Enregistrer</v-btn>
        </v-row>
      </v-container>
    </v-form>
    <v-form ref="formSecurity">
      <v-container>
        <v-row>
          <v-col cols="12" md="12" class="form-subtitle">
            Sécurité
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" md="12">
            <v-text-field
              v-model="oldPassword"
              :rules="passwordRules"
              :append-icon="showOldPassword ? 'mdi-eye' : 'mdi-eye-off'"
              label="Ancien mot de passe"
              :type="showOldPassword ? 'text' : 'password'"
              @click:append="showOldPassword = !showOldPassword"
              hint="At least 8 characters"
              variant="underlined" counter required
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" md="12">
            <v-text-field
              v-model="newPassword"
              :rules="passwordRules"
              :append-icon="showNewPasword ? 'mdi-eye' : 'mdi-eye-off'"
              label="Nouveau mot de passe"
              :type="showNewPasword ? 'text' : 'password'"
              @click:append="showNewPasword = !showNewPasword"
              hint="At least 8 characters"
              variant="underlined" counter required
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-btn class="form-button" @click="submitFormPassword">Enregistrer</v-btn>
        </v-row>
      </v-container>
    </v-form>
  </div>
</template>
<script>
import userService from '../services/userService.js';
export default {

  name: 'ProfileView',

  data() {
    return {
      showOldPassword: false,
      showNewPasword: false,
      firstname: '',
      lastname: '',
      mail: '',
      birthdate: '',
      // carmodel: '',
      // carcolor: '',
      oldPassword: '',
      newPassword: '',
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
          v => !!v || "Ce champs est requis"
      ],
      // carModelRules: [
      //   v => !!v || 'Ce champ est requis'
      // ],
      // carColorRules: [
      //   v => !!v || 'Ce champ est requis'
      // ],
      passwordRules: [
        v => v.length >= 8 || 'Le mot de passe doit faire au moins 8 charactères',
      ],
      mockUser: {
        firstname: "Prénom",
        name: "Nom",
        email: "email@email.com",
        phone: "0123456789",
        birthDate: "0001-01-01"
      }
    }
  },

  methods: {
    async submitForm() {
      console.log("save data");
      console.log({
        firstname: this.firstname,
        name: this.lastname,
        email: this.mail,
        phone: this.mockUser.phone,
        birthDate: this.birthdate,
        // carmodel: this.carmodel,
        // carcolor: this.carcolor,
      })
    },
    
    async submitFormPassword() {
      console.log("save password");
    }
  },

  async mounted() {
    await localStorage.getItem('user-token')
    userService.getCurrentUser().then((r) => {
      this.firstname = r.data.firstname;
      this.lastname = r.data.name;
      this.mail = r.data.email;
      this.birthdate = r.data.birthDate;
    }).catch((e) => {
      console.log("Erreur : ", e);
    });
  }
}
</script>
<style scoped>
h1 {
  font-weight: 700;
  text-align: center;
  padding-top: 0.5em;
}

.formPersonalInfo {
  padding-bottom: 45px;
}

.form-subtitle {
  font-size: 15px;
}

.form-button {
  margin-top: 1em !important;
}

:deep(.v-row) {
  justify-content: center;
  height: 60px;
}

:deep(.v-col-12) {
  flex: 0 0 30% !important;
}

:deep(.v-btn) {
  justify-content: center;
  margin-top: 3em;
  background-color: #F58926;
  color: white;
}

#profile {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  min-height: 100%;
}

@media (max-width: 850px) {
  :deep(.v-col-12) {
    flex: 0 0 60% !important;
  }
}
</style>
