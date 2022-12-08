import React from 'react'
import { highLightProducts, products } from '../data'
const HighlightProducts = () => {
  return (
    <div className="bg-[#906A47]">
      <div className="max-w-5xl mx-auto grid grid-cols-2 grid-flow-col py-5">
        <div className=" flex justify-center items-start flex-col space-y-10 pr-2">
          <div className="text-5xl font-bold ">{highLightProducts.title}</div>
          <div>{highLightProducts.description}</div>
        </div>
        <div className=" space-y-10">
          {products.map((product) => {
            return <ProductCard product={product} key={product.id} />
          })}
        </div>
      </div>
    </div>
  )
}

export default HighlightProducts

const ProductCard = ({ product }) => {
  return (
    <div className="flex flex-row justify-start items-center h-24 w-96 border border-[#373838] rounded-md">
      <div className="w-24 h-24 ">
        <img
          className="rounded-md"
          src={product.imageLink}
          alt=""
          width={64}
          height={'64%'}
          style={{ width: '100%', height: '100%' }}
        />
      </div>
      <div className="  flex-1 ml-2 ">
        <div className="text-lg text-[#1f1f1f]">{product.name}</div>
        <div className="text-base text-[#373738]">{product.description}</div>
      </div>
    </div>
  )
}
