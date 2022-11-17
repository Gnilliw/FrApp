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
            Wetter please!
        </v-btn>
    </v-container>
</template>

<script>
    export default {
        name: "deepfrapp",
        data(){
            return {
                latitude:undefined,
                longitude:undefined
            };
        },
        methods:{
            setbla(data){
                const latitude = data.latitude;
                const longitude = data.longitude;
                this.latitude = latitude.toFixed(3);
                this.longitude = longitude.toFixed(4);
            },
            openWeather(){
                this.$emit('reallyOpen');
            }
        }
    };
</script>

<style scoped>

</style>
