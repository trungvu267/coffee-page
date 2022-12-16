import React from 'react'
import { about } from '../data'
const AboutSection2 = () => {
  return (
    <div className="h-[70vh] max-w-5xl mx-auto grid grid-cols-2 grid-flow-col">
      <div className="bg-yellow-200 flex justify-center items-center">
        <div className="space-y-3">
          <div className="text-[#1f1e1e] text-7xl  font-bold">
            {about[1].title}
          </div>
          <div className="text-[#1f1e1e] text-3xl ">{about[1].description}</div>
        </div>
      </div>
      <div className="flex justify-center w-[100%] h-[70vh] bg-red-500">
        {about[1].imageLink}
      </div>
    </div>
  )
}

export default AboutSection2
