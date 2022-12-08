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
        </v-layout>
        <span v-if="status">
            <v-expansion-panel>
                <v-expansion-panel-content
                    v-for="(item,i) in weatherinfoArray"
                    :key="i"
                >
                    <template v-slot:header>
                        <div>{{ item.date }}</div>
                    </template>
                    <v-card>
                        <v-card-text>
                            {{ item.tempr }}
                        </v-card-text>
                    </v-card>
                </v-expansion-panel-content>
            </v-expansion-panel>
        </span>
    </v-container>
</template>

<script>
    export default {
        name: "deepfrappweather",
        data(){
            return {
                location: undefined,
                weatherinfoArray: undefined,
                latitude: undefined,
                longitude: undefined,
                status: undefined
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
            updateWeatherInVm(status, weatherinfo){
                this.status = status;
                this.weatherinfoArray = weatherinfo;
            }
        }
    };
</script>

<style scoped>

</style>
