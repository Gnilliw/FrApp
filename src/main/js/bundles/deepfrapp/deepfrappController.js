export default class DeepfrappController{
    activate(){
        this._mapWidgetModel.view.on("click", (event)=>{
            if(!this.deepfrappToggleTool.acitve){
                this.deepfrappToggleTool._setActive(true, this);
            }
            this.getData(event);

            this.vm.setbla(this.data);
        });
    }
    setVm(vm){
        this.vm = vm;
    }

    getData(event){
        this.data = event.mapPoint;
    }
}
