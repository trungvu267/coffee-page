import React from 'react'
import { bookTable } from '../data'
import AnimationDesc from './AnimationDesc'
import AnimationTitle from './AnimationTitle'
import { motion } from 'framer-motion'
import BookTableModal from './BookTableModal'
const BookTable = () => {
  return (
    <div
      className="max-w-5xl mx-auto grid grid-cols-2 grid-flow-col"
      id="bookTable"
    >
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

          <BookTableModal />
        </div>
      </div>
    </div>
  )
}

export default BookTable
