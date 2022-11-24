<template>
    <v-container>
        <v-layout
            row
            wrap
        >
            Wettervorhersage für
            <v-text-field
                v-model="location"
                readonly
            />
            <v-text-field
                v-model="weatherinfo"
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
                weatherinfo: undefined,
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
            },
            updateWeatherInVm(weatherinfo){
                this.weatherinfo = weatherinfo;
            }
        }
    };
</script>

<style scoped>

</style>
