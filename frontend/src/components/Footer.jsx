import React from 'react'

const Footer = () => {
  return (
    <footer className='w-10/12 m-auto p-4 flex justify-between items-center'>
      <div className='font-bold text-xl flex gap-4'>
        <div>
          &lt;
          <span className='text-lime-400'>/</span>
          &gt;
        </div>
        Websites By Dima
      </div>

      <nav>
        <ul className='flex gap-8'>
          <li className='cursor-pointer'>Home</li>
          <li className='cursor-pointer'>Services</li>
          <li className='cursor-pointer'>Work</li>
          <li className='cursor-pointer'>Process</li>
          <li className='cursor-pointer'>About</li>
        </ul>
      </nav>

      <div className='flex gap-8'>
        Stay Connected

        <div>F</div>
        <div>L</div>
        <div>I</div>
      </div>
    </footer>
  )
}

export default Footer