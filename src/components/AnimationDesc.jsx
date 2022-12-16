import React from 'react'
import { motion } from 'framer-motion'
const AnimationDesc = ({ text }) => {
  return (
    <motion.div
      initial={{ y: 30, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      exit={{ y: -10, opacity: 0 }}
      transition={{ duration: 1 }}
      className="text-[#1f1e1e] text-3xl"
    >
      {text}
    </motion.div>
  )
}

export default AnimationDesc
