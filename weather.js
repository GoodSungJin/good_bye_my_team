// 로컬 스토리지 key값
const COORDS = 'coords';
// API KEY 값
API_KEY = "6bdf2769f012468716917aef61137abf"

// openweathermap에서 날씨 데이터 객체 가져오기
function getWeather(lat, lng) {
    fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`
    )   // 데이터를 다 받아오면??
        .then(function(response){
            return response.json();
        })
        .then(function(json){
            // console.log(json);
            // JSON 데이터로 받아온 날씨 데이터를 변수에 저장
            const temp = Math.floor(json.main.temp) + '°C';
            const humidity = json.main.humidity + "%";
            const weather = json.weather[0].main;
            const description = json.weather[0].description;
            const icon = json.weather[0].icon;
            const wind = json.wind.speed + "m/s";
            const country = json.sys.country;
            const cityname = json.name;
            const cloud = json.clouds.all + "%";

            // 변수에 저장한 날씨 데이터를 html에 매핑하기
            $('.temp').append(temp);
            $('.description').append(description);
            $('.country').append(cityname + ',');
            $('.country').append(country);

            // 날씨 상세정보 값에 따라 다른 날씨 아이콘 보여주시
            if (description == 'haze') {
                $('.cloud').append('<i class="wi wi-day-haze"></i>');
            } else if (description == 'broken clouds') {
                $('.cloud').append('<i class="wi wi-cloudy-gusts"></i>');
            } else if (description == 'rainy') {
                $('.cloud').append('<i class="wi wi-rain"></i>');
            } else if (description == 'snow') {
                $('.cloud').append('<i class="wi wi-snow"></i>');
            } else if (description == 'mist') {
                $('.cloud').append('<i class="wi wi-fog"></i>');
             } else if (description == 'clear sky') {
                $('.cloud').append('<i class="wi wi-day-sunny"></i>');
            } else {
                $('.cloud').append('<i class="wi wi-day-sunny"></i>');
            }
        })
}

function saveCoords(coordsObj) {
    //로컬스토리지에 문자열로 저장
    localStorage.setItem(COORDS,JSON.stringify(coordsObj));
}

// 현재위치 가져오기는 일을 성공한 경우
function handleGeoSucces(position) {
    //위도, 경도 변수에 저장
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    //위도, 경도 객체에 저장
    const coordsObj = {
        latitude: latitude,
        longitude: longitude
    }
    saveCoords(coordsObj);
    getWeather(latitude,longitude);
}

// 현재위치 가져오기는 일을 실패한 경우
function handleGeoError(position) {
    console.log('Cant acceess geo location');
}

// 위도, 경도 가져오기
function askForCoords() {
    navigator.geolocation.getCurrentPosition(handleGeoSucces, handleGeoError)
}

// 로컬스토지에 있는 값을 로드하고 parse 하기
function loadCoords() {
    const loadedCoords = localStorage.getItem(COORDS);
    // 로컬스토리지에 저장된 값이 null이면 위도, 경도 받아오는 함수 호출
    if(loadedCoords === null){
        askForCoords();
    // null 값이 아니면 로드한 값을 변수에 저장하고 pasre
    }else {
        const parseCoords = JSON.parse(loadedCoords);
        //getWeather function의 인자 값으로 위도, 경도 받기
        getWeather(parseCoords.latitude, parseCoords.longitude);
    }
}

// 로드함수 호출
function init () {
    loadCoords();
}

// 로드함수를 호출하는 init 함수를 호출,,, 왜 이렇게 하는거지?
init ();