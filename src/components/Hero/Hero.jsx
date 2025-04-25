import React from 'react'
import Button from '../Button/Button'
import { FaArrowRight } from "react-icons/fa6";
import './Hero.css'
import '../media-query.css'

const Hero = () => {
  return (
    <section className="section hero has-bg-image" aria-label='hero' id='hero'>
      <div className="container">
        <div className="hero-content">
          <h1 className="hero-ttl">We ensure better education for a better world</h1>

          <p className="hero-desc">
            Our cutting-edge curriculum is designed to empower students with the knowledge, skills, and experiences needed to excel in the dynamic field of education.
          </p>

          <Button
            text="Explore more"
            variant="primary"
            icon={<FaArrowRight className='icon' />} />
        </div>
      </div>
    </section>
  )
}

export default Hero