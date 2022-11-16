import Vue from "apprt-vue/Vue";
import VueDijit from "apprt-vue/VueDijit";
import deepfrappweatherVue from "./deepfrappweather.vue";

export default class DeepfrappweatherFactory {
    constructor() {
    }
    activate() {
        const vm = this.vm = new Vue(deepfrappweatherVue);
        const deepfrappweatherWidget = this.deepfrappweatherWidget = VueDijit(vm);
    }
    createInstance(){
        return this.deepfrappweatherWidget;
    }
}
