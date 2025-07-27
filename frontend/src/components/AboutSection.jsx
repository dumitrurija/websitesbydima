import React from 'react'

const AboutSection = ({title, description, image, children}) => {
  return (
    <div className='relative h-100 flex flex-col gap-4 justify-center items-center bg-bottom bg-cover bg-no-repeat -z-20 text-center p-12' style={{backgroundImage: `url(${image})`}}>
      <div className='bg-black/75 absolute inset-0 -z-10'></div> 
      <h1 className='text-4xl font-bold'>{title}</h1>
      <p className='text-md w-10/12'>{description}</p>
      {children && <div className='mt-8'>
        {children}
      </div>}
    </div>
  )
}

export default AboutSection