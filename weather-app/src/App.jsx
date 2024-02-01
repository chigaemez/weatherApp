import UilReact from '@iconscout/react-unicons/icons/uil-react'
import Nav from './components/Nav'
import Input from './components/Input'
import TimeAndLocation from './components/TimeAndLocation'
import TemperatureAndDetails from './components/TemperatureAndDetails'
import Forecast from './components/Forecast'
import getFormattedWeatherData from './Services/WeatherService'

function App () {
  const fetchWeather = async () => {
    const data = await getFormattedWeatherData("forecast.json",{q: "london"})

    console.log(data)
  }

  fetchWeather()


  return (
    <>
      <div className='mx-auto max-w-screen-md mt-4 py-5 px-32  bg-gradient-to-br from-cyan-700 to-blue-700 h-fit shadow-xl shadow-gray-400 '>
        <Nav />
        <Input/>




        <TimeAndLocation/>
        <TemperatureAndDetails/>
        <Forecast title="Hourly Forcast"/>
        <Forecast title="Daily  Forcast"/>
      </div>
    </>
  )
}

export default App
