import Vue from "apprt-vue/Vue";
import VueDijit from "apprt-vue/VueDijit";
import coordinatesVue from "./deepfrapp.vue";

export default class CoordinatesFactory {
    activate() {
        const vm = new Vue(coordinatesVue);
        this.deepfrappWidget = VueDijit(vm);
        this.coordinatesController.setVm(vm);
    }
    createInstance(){
        return this.deepfrappWidget;
    }
}
