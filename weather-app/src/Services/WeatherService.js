import { DateTime } from 'luxon'

const API_KEY = "1f309ebc0841442a8ec55254232212"
const BASE_URL = "http://api.weatherapi.com/v1/"



//https://api.openweathermap.org/data/2.5/onecall?lat=48.8534&%20Lon=2.3488&exclude=current,%20minutely,%20alerts&appid=be10fb8dc1a1b2e43cc2f4aa34a07912&units-metric

const getWeatherData = (infoType, searchParams) => {
    try {
        const url = new URL(BASE_URL + "/" + infoType)
        url.search = new URLSearchParams({ ...searchParams, appid: API_KEY })




        return fetch(url).then(res =>res.json()).then((data) => data)
    } catch (error) {
        console.log(error)
    }
}

export default getWeatherData;
