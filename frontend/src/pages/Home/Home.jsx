import React from 'react'

// Components
import Hero from './Hero'
import Services from './Services'


const Home = () => {
  return (
    <section id="home" className='flex flex-col gap-8'>
      <Hero />
      <Services />
    </section>
  )
}

export default Home