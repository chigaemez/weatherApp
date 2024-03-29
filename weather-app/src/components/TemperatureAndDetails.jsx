import React from 'react'
import {
  UilArrowUp,
  UilArrowDown,
  UilTemperature,
  UilTear,
  UilWind,
  UilSun,
  UilSunset
} from '@iconscout/react-unicons'

const TemperatureAndDetails = () => {
  return (
    <div>
      <div className='flex items-center justify-center py-6 text-xl text-cyan-300'>
        <p>Cloudy</p>
      </div>

      <div className='flex flex-row items-center justify-between py-3 text-white'>
        <img
          src='http://openweathermap.org/img/wn/01d@2x.png'
          className='w-20'
          alt=''
        />
        <p className='text-5xl '>38°</p>

        <div className='flex-col flex space-y-2'>
          <div className='flex font-light text-sm items-center justify-center'>
            <UilTemperature size={18} className='mr-1' />
            Real Fell:
            <span className='font-medium ml-1'>37°</span>
          </div>
          <div className='flex font-light text-sm items-center justify-center'>
            <UilTear size={18} className='mr-1' />
            Humidity:
            <span className='font-medium ml-1'>65%</span>
          </div>
          <div className='flex font-light text-sm items-center justify-center'>
            <UilWind size={18} className='mr-1' />
            Wind:
            <span className='font-medium ml-1'>11 km/h</span>
          </div>
        </div>
      </div>

      <div className='flex flex-row items-center justify-center  space-x-2 text-white text-sm py-3'>
        <UilSun />
        <p className='font-light'>
          Rise: <span className='font-medium ml-1'> 06:45 AM</span>
        </p>
        <p className='font-light'>|</p>
        <UilSunset />
        <p className='font-light'>
          set: <span className='font-medium ml-1'> 08:20 AM</span>
        </p>
        <p className='font-light'>|</p>
        <UilSun />
        <p className='font-light'>
          High: <span className='font-medium ml-1'> 45°</span>
        </p>
        <p className='font-light'>|</p>
        <UilSun />
        <p className='font-light'>
          low: <span className='font-medium ml-1'> 40°</span>
        </p>
      </div>
    </div>
  )
}

export default TemperatureAndDetails
