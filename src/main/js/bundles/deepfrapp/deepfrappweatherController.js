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

    getLocation(){
        const api_url = 'https://api.opencagedata.com/geocode/v1/json';
        const request_url = api_url
            + '?'
            + 'key=' + "ac4c6db42a364666b679a56088643cdf"
            + '&q=' + encodeURIComponent(this.lati + ',' + this.longi)
            + '&pretty=1'
            + '&no_annotations=1';

        fetch(request_url, {method:"GET"})
            .then(res => res.json())
            .then(data => {
                this.location = data.results[0].formatted;
                this.vm.updateLocationInVm(this.location);
            });
    }
}
