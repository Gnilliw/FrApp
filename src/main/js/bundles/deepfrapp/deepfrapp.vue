<template>
    <v-container>
        <v-layout
            row
            wrap
        >
            getroffene Koordinate
            <v-text-field
                v-model="longi"
                readonly
            />
            <v-text-field
                v-model="lati"
                readonly
            />
        </v-layout>
        <v-btn
            block
            @click="openWeather()"
        >
            Wetter please!
        </v-btn>
    </v-container>
</template>

<script>
    export default {
        name: "deepfrapp",
        data(){
            return {
                latitude: undefined,
                longitude:undefined,
                lati:undefined,
                longi:undefined
            };
        },
        methods:{
            setbla(data){
                this.latitude = data.latitude;
                this.longitude = data.longitude;
                this.lati = this.latitude.toFixed(3);
                this.longi = this.longitude.toFixed(4);
            },
            openWeather(){
                console.debug("Hi Knopf");
            }
        }
    };
</script>

<style scoped>

</style>
