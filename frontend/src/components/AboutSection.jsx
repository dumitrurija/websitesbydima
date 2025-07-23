import React from 'react'

const AboutSection = ({title, description, image}) => {
  return (
    <div className='h-72 flex flex-col justify-center items-center bg-bottom bg-no-repeat bg-gray-950 bg-blend-darken' style={{backgroundImage: `url(${image})`}}>
      <h1 className='text-4xl font-bold'>{title}</h1>
      <p className='text-md'>{description}</p>
    </div>
  )
}

export default AboutSection