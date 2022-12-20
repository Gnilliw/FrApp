import Vue from "apprt-vue/Vue";
import VueDijit from "apprt-vue/VueDijit";
import deepfrappVue from "./deepfrapp.vue";
import Binding from "apprt-binding/Binding";

export default class DeepfrappFactory {
    constructor() {
    }
    activate() {
        const model = this._deepfrappModel;
        const vm = this.vm = new Vue(deepfrappVue);
        this.deepfrappWidget = VueDijit(vm);
        Binding.for(vm, model)
            .syncAll("latitude", "longitude")
            .enable();
        this.controller.setVm(vm);
    }
    createInstance(){
        return this.deepfrappWidget;
    }
}
