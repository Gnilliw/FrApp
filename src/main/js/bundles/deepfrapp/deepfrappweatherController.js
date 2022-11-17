export default class DeepfrappweatherController{
    activate(){}

    openWindow(){
        if(!this.deepfrappweatherToggleTool.active)
        {
            this.deepfrappweatherToggleTool._setActive(true, this);
        }
        else
        {
            this.deepfrappweatherToggleTool._setActive(false, this);
        }
    }
}
