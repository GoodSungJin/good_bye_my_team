$(document).ready(function () {

    var apiURI = "http://api.openweathermap.org/data/2.5/weather?q=Seoul&appid=" + "6bdf2769f012468716917aef61137abf";
    $.ajax({
        url: apiURI,
        dataType: "json",
        type: "GET",
        async: "false",
        success: function (resp) {
            console.log(resp);
            console.log("현재온도 : " + Math.floor((resp.main.temp - 273.15)));
            console.log("현재습도 : " + resp.main.humidity);
            console.log("날씨 : " + resp.weather[0].main);
            console.log("상세날씨설명 : " + resp.weather[0].description);
            console.log("날씨 이미지 : " + resp.weather[0].icon);
            console.log("바람   : " + resp.wind.speed);
            console.log("나라   : " + resp.sys.country);
            console.log("도시이름  : " + resp.name);
            console.log("구름  : " + (resp.clouds.all) + "%");
            var temp = Math.floor(resp.main.temp - 273.15) + '°C';
            var humidity = resp.main.humidity + "%";
            var weather = resp.weather[0].main;
            var description = resp.weather[0].description;
            var icon = resp.weather[0].icon;
            var wind = resp.wind.speed + "m/s";
            var country = resp.sys.country;
            var cityname = resp.name;
            var cloud = resp.clouds.all + "%";

            $('.temp').append(temp);
            $('.description').append(description);
            $('.country').append(cityname + ',');
            $('.country').append(country);
            if (description == 'haze') {
                $('.cloud').append('<i class="wi wi-day-haze"></i>');
            } else if (description == 'broken clouds') {
                $('.cloud').append('<i class="wi wi-cloudy-gusts"></i>');
            } else if (description == 'rainy') {
                $('.cloud').append('<i class="wi wi-rain"></i>');
            } else if (description == 'snow') {
                $('.cloud').append('<i class="wi wi-snow"></i>');
            } else {
                $('.cloud').append('<i class="wi wi-day-sunny></i>');
            }

            $('.weather_wind').append(wind);
            $('.weather_humidity').append(humidity);
            $('.weather_cloud').append(cloud);
        }
    })
})