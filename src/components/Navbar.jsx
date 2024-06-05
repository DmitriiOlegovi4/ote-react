import React,{useState} from 'react'
import { MdMenuOpen } from "react-icons/md";
import { IoMdClose } from "react-icons/io";

    const Navbar = () => {
        const [nav, setNav] = useState(false);
      
        const handleNav = () => {
          setNav(!nav);
        };
  return (
    <div className=' flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white'>
        <h1 className='w-full text-2xl font-bolt text-[#00df9a] uppercase'>Open trading exchange.</h1>
            <ul className='hidden md:flex'>
                <li className='p-4'>Home</li>
                <li className='p-4'>Company</li>
                <li className='p-4'>Resources</li>
                <li className='p-4'>About</li>
                <li className='p-4'>Contact</li>
            </ul>

            <div onClick={handleNav} className='block md:hidden'>
          {nav ? <IoMdClose size={40}/> : <MdMenuOpen size={40} />}
      </div>
      <ul className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500' : 'ease-in-out duration-500 fixed left-[-100%]'}>
        <h1 className='w-full text-3xl font-bold text-[#00df9a] m-2'>OTE.</h1>
          <li className='p-4 border-b border-gray-600'>Home</li>
          <li className='p-4 border-b border-gray-600'>Company</li>
          <li className='p-4 border-b border-gray-600'>Resources</li>
          <li className='p-4 border-b border-gray-600'>About</li>
          <li className='p-4'>Contact</li>
      </ul>
    </div>
  )
}

export default Navbar