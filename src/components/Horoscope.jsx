import React from 'react';
import { Horo } from '../assets';

const Horoscope = () => {
  return (
    <div className='mt-16'>
      <p className='text-3xl md:text-4xl font-bold mt-10 mb-4 text-center'>HOROSCOPE CHECKING</p>
      <div className='relative'>
        <a href="/horoscope">
          <button className='bg-gradient-to-r from-pink-400 to-yellow-200 px-9 py-6 rounded-full absolute top-1/2 left-1/4 transform -translate-x-1/2 z-10 text-xl'>
            Check Horoscope
          </button>
        </a>
        <img 
          src={Horo} 
          alt="Picture" 
          className='w-full'/>
      </div>
    </div>
  );
}

export default Horoscope;
