import axios from 'axios'
import React, { useEffect } from 'react'

export default function Countries() {
  const getCountriesData = async () => {
    try {
      const res = await axios.get("https://api.openweathermap.org/data/2.5/weather?q=Chennai,IN&appid=fba3c5ebad055e3d129de1752578bd89&units=metric");
      console.log(res);
    }
    catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getCountriesData();
  }, []);

  return (
    <div>
      <div className='h-screen w-full grid grid-cols-3 md:grid-cols-5 gap-4 p-3'>
        <div className='bg-gray-400 w-60 h-25 rounded-lg'></div>
        <div className='bg-gray-400 w-60 h-25 rounded-lg'></div>
        <div className='bg-gray-400 w-60 h-25 rounded-lg'></div>
        <div className='bg-gray-400 w-60 h-25 rounded-lg'></div>
        <div className='bg-gray-400 w-60 h-25 rounded-lg'></div>
        <div className='bg-gray-400 w-60 h-25 rounded-lg'></div>
        <div className='bg-gray-400 w-60 h-25 rounded-lg'></div>
        <div className='bg-gray-400 w-60 h-25 rounded-lg'></div>
        <div className='bg-gray-400 w-60 h-25 rounded-lg'></div>
        <div className='bg-gray-400 w-60 h-25 rounded-lg'></div>
      </div>
    </div>
  )
}
