import React from 'react'
import { bookTable } from '../data'
import AnimationDesc from './AnimationDesc'
import AnimationTitle from './AnimationTitle'
import { motion } from 'framer-motion'
const BookTable = () => {
  return (
    <div className="max-w-5xl mx-auto grid grid-cols-2 grid-flow-col">
      <motion.div
        className="flex justify-end  h-[80vh]"
        initial={{ y: 10, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {bookTable.imageLink}
      </motion.div>
      <div className="flex justify-center items-center">
        <div className="space-y-3 p-4">
          <AnimationTitle text={bookTable.title} />
          <AnimationDesc text={bookTable.description} />

          <motion.div
            className="border-2 border-[#1f1e1e] text-lg rounded-md p-3 w-fit cursor-pointer transition duration-300 hover:bg-[#1f1e1e] hover:text-white"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{ duration: 1 }}
          >
            Đặt bàn ngay
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default BookTable
