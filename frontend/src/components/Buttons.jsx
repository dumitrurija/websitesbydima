import React from 'react'

const ButtonClassic = ({ children }) => {
  return (
    <button className='bg-zinc-800 px-4 py-4 rounded-md text-white'>
      {children}
    </button>
  )
}

const ButtonGreen = ({ children }) => {
  return (
    <button className='bg-lime-400 px-4 py-4 rounded-md text-black m-auto'>
      {children}
    </button>
  )
}

const ButtonLearnMore = ({ children }) => {
  return (
    <button className="bg-zinc-800 p-4 mt-12">
      {children}
    </button>
  )
}

export { ButtonClassic, ButtonGreen, ButtonLearnMore }