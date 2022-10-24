import Vue from "apprt-vue/Vue";
import VueDijit from "apprt-vue/VueDijit";
import weatherVue from "./weather.vue";

export default class WeatherFactory {
    constructor() {
    }
    activate() {
    }
    createInstance(){
        const vm = new Vue(weatherVue);
        const weatherWidget = VueDijit(vm);
        return weatherWidget;
    }
}

