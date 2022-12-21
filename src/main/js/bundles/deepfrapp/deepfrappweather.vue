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
            {{weatherinfoArray}}
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
                status: undefined
            };
        },
        methods:{
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
