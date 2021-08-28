// task 1 --------------------
// b9aeee84618a1a6e201f958fafaec2d2 - key   

const param = {
    "url": "https://api.openweathermap.org/data/2.5/",
    "appid": "b9aeee84618a1a6e201f958fafaec2d2"
}

function getWeather() {
    const cityId = document.querySelector('#city').value;
    fetch(`${param.url}weather?id=${cityId}&units=metric&APPID=${param.appid}`)
        .then(weather => {
            return weather.json();
        }).then(showWeather);
}

function showWeather(data) {
    console.log(data);
    document.querySelector('.out-1 span').innerHTML = ' ' + data.name;
    document.querySelector('.out-2 span').innerHTML = ' ' + (Math.round(data.main.temp) + '&deg');
    document.querySelector('.out-3 span').innerHTML = ' ' + data.main.pressure;
    document.querySelector('.out-4 span').innerHTML = ' ' + data.main.humidity;
    document.querySelector('.out-5 span').innerHTML = ' ' + data.wind.speed;
    document.querySelector('.out-6 span').innerHTML = ' ' + data.weather[0]['description'];
    document.querySelector('.out-7 span').innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png">`;
}

getWeather();
document.querySelector('#city').onchange = getWeather;