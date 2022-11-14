import Vue from "apprt-vue/Vue";
import VueDijit from "apprt-vue/VueDijit";
import deepfrappVue from "./deepfrapp.vue";

export default class DeepfrappFactory {
    constructor() {
    }
    activate() {
    }
    createInstance(){
        const vm = new Vue(deepfrappVue);
        const deepfrappWidget = VueDijit(vm);
        return deepfrappWidget;
    }
}
