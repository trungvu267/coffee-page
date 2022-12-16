import React from 'react'
import { motion } from 'framer-motion'
const AnimationTitle = ({ text }) => {
  return (
    <motion.div
      initial={{ y: 30, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="text-[#1f1e1e] text-7xl  font-bold"
    >
      {text}
    </motion.div>
  )
}

export default AnimationTitle
