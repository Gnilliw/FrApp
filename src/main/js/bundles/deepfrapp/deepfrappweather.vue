<template>
    <v-container>
        <v-layout
            row
            wrap
        >
            getroffene Koordinate
            <v-text-field
                v-model="longitude"
                readonly
            />
            <v-text-field
                v-model="latitude"
                readonly
            />
        </v-layout>
    </v-container>
</template>

<script>
    export default {
        name: "deepfrappweather",
        data(){
            return {
                latitude: undefined,
                longitude: undefined
            };
        },
        methods:{
            latiLongiToVm(lati, longi){
                this.latitude = lati;
                this.longitude = longi;
            }
        }
    };
</script>

<style scoped>

</style>
