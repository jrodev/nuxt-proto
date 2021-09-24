<template>
  <v-app>
    <v-main>
      <v-container fluid fill-height>
        <v-layout justify-center><!--align-center-->
          <v-flex xs12 sm9 md6>
            <v-tabs centered router>
              <v-tab to="/public/login">Loguearse</v-tab>
              <v-tab to="/public/register">Registrarse</v-tab>
              <v-tab to="/public/contactus">Contactenos</v-tab>
            </v-tabs>
            <Nuxt />
          </v-flex>
        </v-layout>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
  export default {
    data: () => ({
      drawer: null
    }),
    props: {
      source: String
    }
  }
</script>