import React from 'react';
import Laptop from '../assets/laptop.jpg';

const Analytics = () => {
  return (
    <div className='w-full bg-white py-16 px-4'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
        <img className='w-[500px] mx-auto my-4' src={Laptop} alt='/' />
            <div className='flex flex-col justify-center'>
                <p className='text-[#00df9a] font-bold uppercase' >Unique opportunities for trade and investment</p>
                <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>More than 700 international markets</h1>
                <p>On OTE you can trade on any market: cryptocurrency, stocks, indices, commodity markets, OTE, etc. Smart contract technology allows us to recreate any existing market and even create new ones. You could potentially even invest in water futures!
                </p>
              <button className=' bg-black text-[#00df9a] w-[200px] rounded-2xl font-medium my-6 mx-auto md:mx-0 py-3  '>Get Started </button>
            </div>
        </div>
    </div>
  )
}

export default Analytics