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
                this.location = data.results[0].components.town;
                console.debug(this.location);
                if (this.location === undefined){
                    this.vm.updateLocationInVm("Nichtort");
                    this.vm.updateWeatherInVm("Also auch kein Wetter");
                } else {
                    this.getWeather();
                    this.vm.updateLocationInVm(this.location);
                }
            });
    }

    getWeather(){
        const weather_api_url = 'https://api.openweathermap.org/data/2.5/forecast';
        const weather_request_url = weather_api_url
            + '?'
            + 'q=' + encodeURIComponent(this.location)
            + '&appid=' + "6b904086651c872d0e2c58c1529d2dcb";
        fetch(weather_request_url, {method:"GET"})
            .then(res => res.json())
            .then(data => {
                this.weatherinfoArray = [];
                for (let i = 0; i < 4; i++){
                    this.weatherinfoArray.push(data.list[i].main.temp);
                }
                this.vm.updateWeatherInVm(this.weatherinfoArray);
            });
    }

    connectClosings(){
        console.debug("Mele Kalikimaka!");
    }
}
