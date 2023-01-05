export default class DeepfrappweatherController{
    setVm(vm) {
        this.vm = vm;
    }

    openWindow(){
        this.weatherToggleTool._setActive(!this.weatherToggleTool.active, this);
    }

    howMuchIsOrt() {
        if (this.location.city) {
            this.ort = this.location.city;
            return true;
        } else if (this.location.town) {
            this.ort = this.location.town;
            return true;
        } else if (this.location.village) {
            this.ort = this.location.village;
            return true;
        }
    }

    getLocation(lati, longi){
        const api_url = 'https://api.opencagedata.com/geocode/v1/json';
        const request_url = api_url
            + '?'
            + 'key=' + "ac4c6db42a364666b679a56088643cdf"
            + '&q=' + encodeURIComponent(lati + ',' + longi)
            + '&pretty=1'
            + '&no_annotations=1';

        fetch(request_url, {method:"GET"})
            .then(res => res.json())
            .then(data => {
                this.location = data.results[0].components;
                if (this.howMuchIsOrt()){
                    this.getWeather();
                    this.vm.updateLocationInVm(this.ort);
                } else {
                    this.vm.updateLocationInVm("Nichtort");
                    this.vm.updateWeatherInVm();
                }
            });
    }

    getWeather(){
        const weather_api_url = 'https://api.openweathermap.org/data/2.5/forecast';
        const weather_request_url = weather_api_url
            + '?'
            + 'q=' + encodeURIComponent(this.ort)
            + '&appid=' + "6b904086651c872d0e2c58c1529d2dcb";
        fetch(weather_request_url, {method:"GET"})
            .then(res => res.json())
            .then(data => {
                this.weatherinfoArray = [];
                for (let i = 0; i < data.list.length; i++){
                    this.weatherinfoArray[i] = {
                        date: data.list[i].dt_txt,
                        tempr: (data.list[i].main.temp - 273.15).toFixed(2)
                    };
                }
                this.vm.updateWeatherInVm(this.weatherinfoArray);
            });
    }

    connectClosings(){
        this.weatherToggleTool._setActive(false, this);
    }
}
