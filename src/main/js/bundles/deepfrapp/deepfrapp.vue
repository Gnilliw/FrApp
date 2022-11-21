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
        <v-btn
            block
            @click="openWeather()"
        >
            {{buttonText}}
        </v-btn>
    </v-container>
</template>

<script>
    export default {
        name: "deepfrapp",
        data(){
            return {
                latitude:undefined,
                longitude:undefined,
                weatherstatus:false,
                buttonText:"Wetter please!"
            };
        },
        methods:{
            setbla(data){
                const latitude = data.latitude;
                const longitude = data.longitude;
                this.latitude = latitude.toFixed(3);
                this.longitude = longitude.toFixed(3);
            },
            openWeather(){
                this.$emit('reallyOpen');
                this.changeButton();
            },
            changeButton(){
                if(this.weatherstatus){
                    this.buttonText = "Wetter please!";
                    this.weatherstatus = false;
                }
                else{
                    this.buttonText = "Don't Wetter me!";
                    this.weatherstatus = true;
                }
            }
        }
    };
</script>

<style scoped>

</style>
