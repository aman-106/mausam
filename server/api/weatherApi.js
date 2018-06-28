const cityData = require('../db/city');

var host = 'https://api.openweathermap.org/data/2.5/';
var apiId = '3aba991c90d76aa36789a76dce198cfa';
// api.openweathermap.org/data/2.5/weather?id=2172797
// http://api.openweathermap.org/data/2.5/weather?id=524901&appid=3aba991c90d76aa36789a76dce198cfa

function getWeatherByCityId(cityId){
    var path = 'weather';
    var url = `${host}${path}?id=${cityId}&appid=${apiId}`;
    return fetch(url);
};

function matchCityByName(city,cityName){
    return city.name.includes(cityName);
}

function getIdByCityName(cityName){
    return Array.prototype.filter.call(cityData,(city)=>(matchCityByName(city,cityName)));
}