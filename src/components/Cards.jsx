import React from 'react'
import Double from '../assets/double.png'
import Single from '../assets/single.png'
import Triple from '../assets/triple.png'

export const Cards = () => {
  return (
    <div className='w-full py-[10rem] px-4 bg-white'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
            <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
                <img className='w-20 mx-auto mt-[-3rem] bg-white' src={Double} alt='double'/>
                <h2 className='text-2xl font-bold text-center py-8'>Basic</h2>
                <p className='text-center text-4xl font-bold '>39$</p>
                    <div className='text-center font-medium'>
                    <p className='py-2 border-b mx-8'>1 mounth</p>
                    <p className='py-2 border-b mx-8'>The easiest account for beginners - the spread is always fixed</p>
                    <p className='py-2 border-b mx-8'>Participates in the cashback program</p> 
                    </div>
                    <button className='bg-[#00df9a] text-black w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3 '>Start Trial</button>
                </div>
                <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
                <img className='w-20 mx-auto mt-[-3rem] bg-white' src={Single} alt='double'/>
                <h2 className='text-2xl font-bold text-center py-8'>Standart</h2>
                <p className='text-center text-4xl font-bold '>69$</p>
                    <div className='text-center font-medium'>
                    <p className='py-2 border-b mx-8'>1 mounth</p>
                    <p className='py-2 border-b mx-8'>Highest execution speed and lowest spreads</p>
                    <p className='py-2 border-b mx-8'>Executing orders with a prime broker</p> 
                    </div>
                    <button className='bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3 '>Start Trial</button>
                </div>
                <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
                <img className='w-20 mx-auto mt-[-3rem] bg-white' src={Triple} alt='double'/>
                <h2 className='text-2xl font-bold text-center py-8'>Professional</h2>
                <p className='text-center text-4xl font-bold '>99$</p>
                    <div className='text-center font-medium'>
                    <p className='py-2 border-b mx-8'>1.5 mounth</p>
                    <p className='py-2 border-b mx-8'>Account denominated in Bitcoin (MBT)</p>
                    <p className='py-2 border-b mx-8'>The account balance increases with the rise in Bitcoin exchange rate</p> 
                    </div>
                    <button className='bg-[#00df9a] text-black w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3 '>Start Trial</button>
                </div>
        </div>
    </div>
  )
}
