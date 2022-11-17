export default class DeepfrappController{
    activate(){
        this._mapWidgetModel.view.on("click", (event)=>{
            if(!this.deepfrappToggleTool.active){
                this.deepfrappToggleTool._setActive(true, this);
            }

            this.vm.setbla(this.getData(event));
        });


    }
    setVm(vm){
        this.vm = vm;

        this.vm.$on("reallyOpen", ()=>{
            this.weathercontroller.openWindow();
        });
    }

    getData(event){
        return event.mapPoint;
    }
}
