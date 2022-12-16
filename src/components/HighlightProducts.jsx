import React from 'react'
import { highLightProducts, products } from '../data'
import { motion } from 'framer-motion'
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      delayChildren: 0.5,
      staggerChildren: 0.8,
    },
  },
}

const item = {
  hidden: { opacity: 0, x: -20, y: 30 },
  show: { opacity: 1, x: 0, y: 0 },
}

const HighlightProducts = () => {
  return (
    <div className="bg-[#906A47]">
      <div className="max-w-5xl mx-auto grid grid-cols-2 grid-flow-col py-5">
        <div className=" flex justify-center items-start flex-col space-y-10 pr-2">
          <motion.div
            className="text-5xl font-bold"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {highLightProducts.title}
          </motion.div>
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            {highLightProducts.description}
          </motion.div>
        </div>
        <motion.div
          className=" space-y-10"
          variants={container}
          initial="hidden"
          whileInView="show"
        >
          {products.map((product) => {
            return <ProductCard product={product} key={product.id} />
          })}
        </motion.div>
      </div>
    </div>
  )
}

export default HighlightProducts

const ProductCard = ({ product }) => {
  return (
    <motion.div
      variants={item}
      className="flex flex-row justify-start items-center h-24 w-96 border border-[#373838] rounded-md"
    >
      <div className="w-24 h-24">
        <div className="w-100">{product.imageLink}</div>
      </div>
      <div className="  flex-1 ml-2 ">
        <div className="text-lg text-[#1f1f1f]">{product.name}</div>
        <div className="text-base text-[#373738]">{product.description}</div>
      </div>
    </motion.div>
  )
}
