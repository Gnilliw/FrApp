<template>
    <v-container grid-list-md>
        <v-layout
            row
            wrap
        >
            <v-flex md12>
                <basemap
                    v-for="basemap in basemaps"
                    :id="basemap.id"
                    :key="basemap.id"
                    :title="basemap.title"
                    :is-selected="basemap.id === selectedID"
                    :thumbnail-url="basemap.thumbnailUrl"
                    class="basemapEntry"
                    @change-basemap="selectedID = basemap.id"
                />
            </v-flex>
            <v-flex md12>
                <v-slider
                    v-model="zoom"
                    max="15"
                    min="1"
                    label="Zoom"
                    thumb-label>
                </v-slider>
            </v-flex>
            Basemap Changer
        </v-layout>
    </v-container>
</template>
<script>
    import Bindable from "apprt-vue/mixins/Bindable";
    import Basemap from "./Basemap.vue";
    export default {
        components: {basemap:Basemap},
        mixins: [Bindable],
        data: function () {
            return {
                selectedID: undefined,
                basemaps: [],
                zoom: undefined
            };
        }
    };
</script>
