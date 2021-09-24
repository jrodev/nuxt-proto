<template>
  <v-app>
 
    <v-app-bar app clipped-left>
        <v-app-bar-nav-icon @click.stop="drawer=!drawer"></v-app-bar-nav-icon>

        <v-toolbar-title>Sistema de Gestion de Ventas</v-toolbar-title>

        <v-spacer></v-spacer>

        <v-btn icon>
          <v-icon>mdi-magnify</v-icon>
        </v-btn>

        <v-btn icon>
          <v-icon>mdi-heart</v-icon>
        </v-btn>

        <v-btn icon>
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" app clipped>
 
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="text-h6"> SISTEM ADMIN </v-list-item-title>
          <v-list-item-subtitle> Gestion de Ventas </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense nav>
        <v-list-item v-for="(item, i) in items" :key="i" :to="item.to" router>
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>

    </v-navigation-drawer>

    <!-- Sizes your content based upon application components -->
    <v-main>
      {{msg}}
      <Nuxt />
      <!-- Provides the application the proper gutter -->
      <!-- <v-container /> en un Layout de NUXT funciona como <nux />???
      <v-container fluid><router-view></router-view></v-container>
      -->
    </v-main>

    <v-footer app>
      Footer
    </v-footer>
  </v-app>
</template>

<script lang="ts">
  import Vue from "vue";

  export default Vue.extend({
    data: () => ({
      msg: "Layout!!",
      drawer: null,
      items: [
        { title: 'Dashboard', icon: 'mdi-view-dashboard', to:"/" },
        { title: 'Productos', icon: 'mdi-image', to:"/admin/products" }//,
        /*{ title: 'About', icon: 'mdi-help-box', to:"/" },*/
      ],
      right: null,
    }),

    fetch ({redirect}) {
      let authToken = sessionStorage.getItem('token');
      console.log("authToken:", authToken);
      if (!authToken) {
        redirect('/public/login')
      }
    },

    methods: {

    }
  });
</script>

<style lang="sass" scoped>

</style>