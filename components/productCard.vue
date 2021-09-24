<template>
    <v-card >
    <div class="d-flex flex-no-wrap justify-space-between">
        <div>
        <v-card-title class="text-h5" v-text="product.name"></v-card-title>

        <v-card-subtitle v-text="product.category"></v-card-subtitle>

        <v-card-actions>
            <b>{{product.price}}</b>
        </v-card-actions>
        </div>

        <v-avatar class="ma-3" size="125" tile>
        <v-img :src="product.imgURL"></v-img>
        </v-avatar>
    </div>
    </v-card>
</template>

<script lang="ts">
    import { Vue, Component, Prop } from 'vue-property-decorator'

    interface Product {
        name: string
        category: string
        price: number
        imgURL: string
        createdAt:string
        updatedAt:string
    }

    @Component
    export default class ProductCard extends Vue {
        @Prop({ type: Object, required: true }) readonly product!: Product

        message: string = 'This is a message'

        get fullName (): string {
            return `${this.product.category} ${this.product.name}`
        }
    }
</script>

<style scoped>

</style>