export default class CoordinatesController {
    activate(){
        this._mapWidgetModel.view.on("click", (event)=>{
            if(!this.coordinatesToggleTool.active){
                this.coordinatesToggleTool._setActive(true, this);
            }
            const mapPoint = this.getData(event);

            this.vm.setbla(mapPoint);
            this.weathercontroller.getLocation(mapPoint.latitude, mapPoint.longitude);
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
