import Vue from "apprt-vue/Vue";
import VueDijit from "apprt-vue/VueDijit";
import deepfrappVue from "./deepfrapp.vue";

export default class DeepfrappFactory {
    constructor() {
    }
    activate() {
        const vm = this.vm = new Vue(deepfrappVue);
        this.deepfrappWidget = VueDijit(vm);
        this.controller.setVm(vm);
    }
    createInstance(){
        return this.deepfrappWidget;
    }
}
