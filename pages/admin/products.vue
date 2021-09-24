<template>
    <v-container fluid>

      <v-row v-if="items.length>0" dense>
        <v-col v-for="(item, i) in items" :key="i" cols="12">
            <!-- <product-card :product='{name:item.name, category:item.category, price:item.price, imgURL:item.imgURL}'  /> -->
            <product-card :product='item'  />
        </v-col>
      </v-row>
      <v-row v-else>
          <v-col cols="12" class="text-center">No hay productos</v-col>
      </v-row>

    <router-view></router-view>
    </v-container>
</template>

<script lang="ts">
    import Vue from 'vue'

    export default Vue.extend({
        layout:"admin",
        data: ()=>({ 
            msg:"Products!",
            items:[
                {
                    "name": "TV 34 SMART pulgadas","category": "Televisor","price": 999.89,
                    "imgURL": "https://images.samsung.com/is/image/samsung/latin-fhd-t5300-un43t5300apxpa-frontblack-229166470?$720_576_PNG$",
                    "createdAt": "2021-09-03T23:40:23.377Z",  "updatedAt": "2021-09-03T23:40:23.377Z"
                }
            ]
        }),

        async mounted() {

            try {
                const oResp = await this.$axios.$get( 
                    process.env.BACK_URL_API + 'products/',
                    { headers: { 'Content-Type': 'application/json' } }
                );

                this.items = oResp;
                console.log("mounted->oResp", oResp);                
            }
            catch (ex) {
                console.log("mounted->catch->ex", ex);
            }


        }
    })
</script>

<style scoped>

</style>