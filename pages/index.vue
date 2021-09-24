<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <v-card class="logo py-4 d-flex justify-center">
        <NuxtLogo /> <VuetifyLogo />
      </v-card>

      <v-card>
        
        <p class="mi-parrafo">
          Bienvenido saludos cordiales
          mi nombre es <b>Jaime!</b>
        </p>

        <v-card-title class="headline"> ---> {{TIT}} </v-card-title>

        <v-card-title class="headline">
         Bienvenido a Vuetify + Nuxt.js template
         {{fullName}}
        </v-card-title>

        <v-card-text>
          <p>Vuetify is a progressive Material Design component framework for Vue.js. It was designed to empower developers to create amazing applications.</p>
          <p>
            For more information on Vuetify, check out the <a
              href="https://vuetifyjs.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              documentation
            </a>.
          </p>
          <p>
            If you have questions, please join the official 
            <a
              href="https://chat.vuetifyjs.com/" target="_blank" rel="noopener noreferrer" title="chat"
            > discord
            </a>.
          </p>
          <p>
            Find a bug? Report it on the github <a
              href="https://github.com/vuetifyjs/vuetify/issues"
              target="_blank"
              rel="noopener noreferrer"
              title="contribute"
            >
              issue board
            </a>.
          </p>
          <p>Thank you for developing with Vuetify and I look forward to bringing more exciting features in the future.</p>
          <div class="text-xs-right">
            <em><small>&mdash; John Leider</small></em>
          </div>
          <hr class="my-3">
          <a href="https://nuxtjs.org/" target="_blank" rel="noopener noreferrer">
            Nuxt Documentation
          </a>
          <br>
          <a href="https://github.com/nuxt/nuxt.js" target="_blank" rel="noopener noreferrer">
            Nuxt GitHub
          </a>

          <test-com :user='{firstName:"Jose", lastName:"Rosales"}'  />

        </v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn
            color="primary"
            nuxt
            to="/inspire"
          >
            Continue
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script lang="ts">
  import Vue from 'vue'
  export default Vue.extend({
    
    data(){
      return {
        name: "jaime",
        ape: "rodriguez",
        TIT: process.env.APP_TITLE
      }
    },

    fetch ({redirect}) {
      redirect('/public/login')
    },

    mounted() {
      //this.name = process.env.APP_TITLE
    },

    computed:  {
      fullName():string {
        return `${this.name} ${this.ape}`
      }
    }
  })
</script>

<style lang="scss" scoped>
  p.mi-parrafo {
    font-size: 15px;
    b {
      color: rgb(15, 65, 105);
      &:hover{
        color: rgb(5, 21, 165);
      }
    }
  }
</style>