import React from 'react'

// Components
import Hero from './Hero'
import Services from './Services'
import Choose from './Choose'
import Testimonials from './Testimonials'
import FAQ from './FAQ'


const Home = () => {
  return (
    <section id="home" className='flex flex-col gap-16 border border-zinc-800'>
      <Hero />
      <Services />
      <Choose />
      <Testimonials />
      <FAQ />
    </section>
  )
}

export default Home