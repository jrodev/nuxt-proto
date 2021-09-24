<template>
    <v-container fluid>
    <!--If using vue-router-->
    {{msg}}
    <router-view></router-view>
    </v-container>
</template>

<script lang="ts">
    import Vue from 'vue'

    export default Vue.extend({
        layout:"admin",
        data: ()=>({ 
            msg:"Bienvenido!"
        })
    })
</script>

<style scoped>

</style>