import React from 'react'
import bg from '../assets/coffee-bg.jpg'
import { heroSection as hero } from '../data'
import Layout from './Layout'
import { motion } from 'framer-motion'
const HeroSection = () => {
  return (
    <motion.div
      className=" h-[100vh]"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
      }}
      layout
      initial={{ opacity: 0.1 }}
      animate={{ opacity: 1 }}
      transition={{
        opacity: { ease: 'linear' },
        layout: { duration: 0.3 },
      }}
    >
      <Layout />
      <div className=" mx-auto max-w-5xl h-[60vh] flex justify-start items-center">
        <div className="pr-7 ">
          <motion.div
            initial={{ y: 10, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-7xl text-white font-bold mb-10"
          >
            {hero.title}
          </motion.div>
          <motion.div
            initial={{ y: 10, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 2 }}
            className="text-3xl text-gray-300 w-3/4"
          >
            {hero.description}
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}

export default HeroSection
