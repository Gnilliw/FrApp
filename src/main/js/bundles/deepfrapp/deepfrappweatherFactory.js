import Vue from "apprt-vue/Vue";
import VueDijit from "apprt-vue/VueDijit";
import weatherVue from "./deepfrappweather.vue";

export default class DeepfrappweatherFactory {
    activate() {
        const vm = new Vue(weatherVue);
        this.deepfrappweatherWidget = VueDijit(vm);
        this.weathercontroller.setVm(vm);
    }
    createInstance(){
        return this.deepfrappweatherWidget;
    }
}
