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
        <v-expansion-panel>
            <v-expansion-panel-content
                v-for="(item,i) in 5"
                :key="i"
            >
                <template v-slot:header>
                    <div>{{ weatherinfoArray[i] }}</div>
                </template>
                <v-card>
                    <v-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</v-card-text>
                </v-card>
            </v-expansion-panel-content>
        </v-expansion-panel>
    </v-container>
</template>

<script>
    export default {
        name: "deepfrappweather",
        data(){
            return {
                location: undefined,
                weatherinfo: undefined,
                weatherinfoArray: undefined,
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
                this.weatherinfo = weatherinfo[0];
                this.weatherinfoArray = weatherinfo;
            }
        }
    };
</script>

<style scoped>

</style>
