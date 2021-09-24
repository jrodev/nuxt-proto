<template>
  <v-card class="elevation-12">

    <v-card-title>Ingrese sus credenciales</v-card-title>

    <v-card-text>
      <v-form>
        <v-text-field prepend-icon="mdi-account" name="user" label="Login" v-model="user" type="text"></v-text-field>
        <v-text-field prepend-icon="mdi-lastpass" name="password" label="Password" v-model="password" type="password"></v-text-field>
      </v-form>
    </v-card-text>

    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn color="primary" @click="login()">Iniciar Sesión</v-btn>
    </v-card-actions>

  </v-card>
</template>

<script lang="ts">
  import Vue from 'vue'

  export default Vue.extend({
      layout: "public",

      data () {
        return {user:"", password:""}
      },

      methods: {
        async login () {
          try {
            let oLogin = { email:this.user, password:this.password };
            console.log("login->BACK_URL_API", process.env.BACK_URL_API);
            console.log("login->oLogin", oLogin);
            
            const oResp = await this.$axios.$post(
              process.env.BACK_URL_API + 'auth/signin', 
              oLogin,
              { headers: { 'Content-Type': 'application/json' } }
            );

            if(oResp.hasOwnProperty("token")) {
              sessionStorage.setItem('token', oResp.token);
              location.href = process.env.FRONT_URL+"admin";
            } 
            else {
              console.log("login->oResp", oResp);
            } 
          } 
          catch(ex) {
            console.log("login->catch->ex", ex);
          }
        }
      }
  })
</script>

<style scoped>

</style>