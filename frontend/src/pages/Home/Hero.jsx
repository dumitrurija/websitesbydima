import React from 'react'
import { homeImgs } from '../../assets/assets'
import { ButtonClassic, ButtonGreen } from '../../components/Buttons'

const Hero = () => {
  return (
    <div className='flex flex-col items-center gap-10 py-30 border border-gray-600/10 bg-bottom bg-no-repeat' style={{backgroundImage: `url(${homeImgs.hero_img})`}}>
      <h1 className='font-medium text-5xl text-center leading-15'>A Digital Product Studio <br /> that will Work</h1>

      <div className='flex items-center gap-1 text-gray-400 p-4 bg-black/40 rounded-md'>
        For
        <div className='p-2 bg-gray-600/20 rounded-sm text-white'>Startups</div>
        ,
        <div className='p-2 bg-gray-600/20 rounded-sm text-white'>Enterprise Leaders</div>
        ,
        <div className='p-2 bg-gray-600/20 rounded-sm text-white'>Media & Publishers</div>
        and
        <div className='p-2 bg-gray-600/20 rounded-sm text-white'>Social Good</div>
      </div>

      <div className='flex gap-4'>
        <ButtonClassic>Our Works</ButtonClassic>
        <ButtonGreen>Contact Us</ButtonGreen>
      </div>
    </div>
  )
}

export default Hero