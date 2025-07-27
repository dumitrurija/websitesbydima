import React from 'react'

// Components
import Hero from './Hero'
import Services from './Services'
import Choose from './Choose'
import Testimonials from './Testimonials'
import FAQ from './FAQ'
import Contact from './Contact'


const Home = () => {
  return (
    <section id="home" className='flex flex-col gap-16 border border-zinc-800'>
      <Hero />
      <Services />
      <Choose />
      <Testimonials />
      <FAQ />
      <Contact />
    </section>
  )
}

export default Home