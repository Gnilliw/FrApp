export default class DeepfrappController{
    activate(){
        this._mapWidgetModel.view.on("click", (event)=>{
            if(!this.deepfrappToggleTool.active){
                this.deepfrappToggleTool._setActive(true, this);
            }

            /*this.vm.setbla(this.getData(event));*/
            /*this.vm.set("latitude", event.mapPoint.latitude);
            this.vm.set("longitude", event.mapPoint.longitude);*/

            this.weathercontroller.getLocation(event.mapPoint.latitude, event.mapPoint.longitude);
            this.model.latitude = event.mapPoint.latitude;
            this.model.longitude = event.mapPoint.longitude;
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
