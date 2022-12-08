import React from 'react'
import bg from '../assets/coffee-bg.jpg'
import { heroSection as hero } from '../data'
import Layout from './Layout'
const HeroSection = () => {
  return (
    <div
      className=" h-[100vh]"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
      }}
    >
      <Layout />
      <div className=" mx-auto max-w-5xl h-[60vh] flex justify-start items-center">
        <div className="pr-7">
          <div className="text-7xl text-white font-bold">{hero.title}</div>
          <div className="text-3xl text-gray-300 w-3/4">{hero.description}</div>
        </div>
      </div>
    </div>
  )
}

export default HeroSection
