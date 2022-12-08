import React from 'react'
import store from '../assets/store.jpg'
import { bookTable } from '../data'
const BookTable = () => {
  return (
    <div className="max-w-5xl mx-auto grid grid-cols-2 grid-flow-col">
      <div className="flex justify-end  h-[80vh]">
        <img src={store} width={480} />
      </div>
      <div className="flex justify-center items-center">
        <div className="space-y-3 p-4">
          <div className="text-[#1f1e1e] text-7xl  font-bold">
            {bookTable.title}
          </div>
          <div className="text-[#1f1e1e] text-3xl ">
            {bookTable.description}
          </div>
          <div className="border-2 border-[#1f1e1e] text-lg rounded-md p-3 w-fit cursor-pointer transition duration-300 hover:bg-[#1f1e1e] hover:text-white">
            Đặt bàn ngay
          </div>
        </div>
      </div>
    </div>
  )
}

export default BookTable
