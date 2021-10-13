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

        async postSignIn (user:String, pass:String) 
        {
          console.log("login->BACK_URL_API", process.env.BACK_URL_API)

          let url  = process.env.BACK_URL_API + 'auth/signin'
          let data = { email:user, password:pass }
          let cnf  = { headers: {'Content-Type':'application/json'} }

          const rsp = await this.$axios.$post(url, data, cnf)

          return rsp
        },

        async login () {
          try {
            const oResp = await this.postSignIn(this.user, this.password)

            if(oResp.hasOwnProperty("token")) {
              sessionStorage.setItem('token', oResp.token)

              // Redireccionando al dashboard admin
              location.href = process.env.FRONT_URL+"admin"
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