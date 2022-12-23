export default class DeepfrappController{
    activate(){
        this._mapWidgetModel.view.on("click", (event)=>{
            if(!this.deepfrappToggleTool.active){
                this.deepfrappToggleTool._setActive(true, this);
            }

            let mapPoint = event.mapPoint;
            this.vm.setCoordinates(mapPoint);
            /*this.vm.set("latitude", event.mapPoint.latitude);
            this.vm.set("longitude", event.mapPoint.longitude);*/

            this.weathercontroller.getLocation(mapPoint.latitude, mapPoint.longitude);
        });


    }
    setVm(vm){
        this.vm = vm;

        this.vm.$on("reallyOpen", ()=>{
            this.weathercontroller.openWindow();
        });
    }
}
