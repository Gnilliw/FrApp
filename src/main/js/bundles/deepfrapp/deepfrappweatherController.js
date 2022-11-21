export default class DeepfrappweatherController{
    activate(){}

    setVm(vm) {
        this.vm = vm;
    }

    openWindow(){
        if(!this.deepfrappweatherToggleTool.active)
        {
            this.deepfrappweatherToggleTool._setActive(true, this);
        }
        else
        {
            this.deepfrappweatherToggleTool._setActive(false, this);
        }
        this.vm.latiLongiToVm(this.lati, this.longi);
    }

    setLatitude(lati){
        this.lati = lati.toFixed(3);
    }
    setLongitude(longi){
        this.longi = longi.toFixed(3);
    }
    trickController1(){
        this.vm.latiLongiToVm(this.lati, this.longi);
    }

}
