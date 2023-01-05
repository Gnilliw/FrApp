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
            <v-expansion-panel popout>
                <v-expansion-panel-content
                    v-for="(item, i) in weatherinfoArray"
                    :key="i"
                >
                    <template v-slot:header>
                        <div>{{ item.date }}</div>
                    </template>
                    <v-card>
                        <v-card-text>
                            Temperatur: {{ item.tempr }} °C
                        </v-card-text>
                    </v-card>
                </v-expansion-panel-content>
            </v-expansion-panel>
        </span>
        <div v-else>
            {{ noWeatherInfo }}
        </div>
    </v-container>
</template>

<script>
    export default {
        name: "deepfrappweather",
        data(){
            return {
                location: undefined,
                weatherinfoArray: undefined,
                status: false,
                noWeatherInfo: "Keine Wetterdaten!"
            };
        },
        methods:{
            updateLocationInVm(location){
                this.location = location;
            },
            updateWeatherInVm(weatherinfo){
                if (weatherinfo) {
                    this.status = true;
                    this.weatherinfoArray = weatherinfo;
                } else {
                    this.status = false;
                }
            }
        }
    };
</script>

<style scoped>

</style>
