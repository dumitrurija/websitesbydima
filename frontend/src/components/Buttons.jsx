import React from 'react'

const ButtonClassic = ({ children }) => {
  return (
    <button className='bg-black/40 px-4 py-4 rounded-md text-white'>
      {children}
    </button>
  )
}

const ButtonGreen = ({ children }) => {
  return (
    <button className='bg-lime-400 px-4 py-4 rounded-md text-black'>
      {children}
    </button>
  )
}

export { ButtonClassic, ButtonGreen }