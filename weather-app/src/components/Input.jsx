import React from 'react'
import { UilSearch, UilLocationPoint } from '@iconscout/react-unicons'

const Input = () => {
  return (
    <div className='flex flex-col my-6 justify-center'>
      <div className='flex flex-row w-3/4 items-center justify-center space-x-4'>
        <input
          type='text'
          className='text-xl font-light p-2 outline-none w-full shadow-xl focus:outline-none capitalize placeholder:lowercase'
          placeholder='Search for city...'
        />
        <UilSearch
          size={30}
          className='text-white cursor-pointer transition ease-out hover:scale-125'
        />
        <UilLocationPoint
          size={30}
          className='text-white cursor-pointer transition ease-out hover:scale-125'
        />

        <div className='flex flex-row w-1/4 items-center justify-center'>
            <button name='matric' className='text-xl text-white font-light' >°C</button>
            <p className='text-xl text-white mx-1'>|</p>
            <button name='imperial' className='text-xl text-white font-light'>°F</button>
        </div>
      </div>
    </div>
  )
}

export default Input
