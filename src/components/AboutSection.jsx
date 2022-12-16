import React from 'react'
import { about } from '../data'
import { motion } from 'framer-motion'
import AnimationTitle from './AnimationTitle'
import AnimationDesc from './AnimationDesc'
const AboutSection = () => {
  return (
    <div
      id="aboutUs"
      className="max-w-5xl mx-auto grid grid-cols-2 grid-flow-col"
    >
      <motion.div
        className="flex justify-end  h-[80vh]"
        initial={{ y: 10, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {about[0].imageLink}
      </motion.div>
      <div className="flex justify-center items-center ">
        <div className="space-y-3 p-3">
          <AnimationTitle text={about[0].title} />
          <AnimationDesc text={about[0].description} />
        </div>
      </div>
    </div>
  )
}

export default AboutSection
