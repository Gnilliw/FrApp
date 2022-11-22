<template>
    <v-container>
        <v-layout
            row
            wrap
        >
            getroffene Koordinate
            <v-text-field
                v-model="location"
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
                location: undefined,
                latitude: undefined,
                longitude: undefined
            };
        },
        methods:{
            latiLongiToVm(lati, longi){
                this.latitude = lati;
                this.longitude = longi;
            },
            updateLocationInVm(location){
                this.location = location;
            }
        }
    };
</script>

<style scoped>

</style>
