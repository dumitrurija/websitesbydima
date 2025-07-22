import React from 'react'

const Header = () => {
  return (
    <header className='m-4 flex justify-between items-center'>
      <div className='font-bold text-xl flex gap-4'>
        <div>
          &lt;
          <span className='text-lime-400'>/</span>
          &gt;
        </div>
        Websites By Dima
      </div>

      <nav>
        <ul className='flex gap-4'>
          <li className='hover:bg-neutral-800 p-4 rounded-md transition cursor-pointer'>Home</li>
          <li className='hover:bg-neutral-800 p-4 rounded-md transition cursor-pointer'>Services</li>
          <li className='hover:bg-neutral-800 p-4 rounded-md transition cursor-pointer'>Work</li>
          <li className='hover:bg-neutral-800 p-4 rounded-md transition cursor-pointer'>Process</li>
          <li className='hover:bg-neutral-800 p-4 rounded-md transition cursor-pointer'>About</li>
        </ul>
      </nav>

      <button className='bg-lime-400 px-4 py-4 rounded-md text-black'>
        Contact Us
      </button>
    </header>
  )
}

export default Header