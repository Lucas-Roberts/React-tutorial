import React from 'react';

const Navbar = () => {
  return (
    <div className='flex justify-between text-white '>
      <h1 className='w-full text-3xl font-bold text-[#00df9a]' >REACT.</h1>
      <ul className='flex '>
        <li className='p-4'>Home</li>
        <li className='p-4'>Company</li>
        <li className='p-4'>Contact</li>
        <li className='p-4'>About</li>
      </ul>
    </div>
  )
}

export default Navbar