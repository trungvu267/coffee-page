import React from 'react'
import about1 from '../assets/about1.jpg'
import { about } from '../data'
const AboutSection = () => {
  return (
    <div className="max-w-5xl mx-auto grid grid-cols-2 grid-flow-col">
      <div className="flex justify-end  h-[80vh]">
        <img src={about1} width={480} />
      </div>
      <div className="flex justify-center items-center ">
        <div className="space-y-3 p-3">
          <div className="text-[#1f1e1e] text-7xl  font-bold">
            {about[0].title}
          </div>
          <div className="text-[#1f1e1e] text-3xl">{about[0].description}</div>
        </div>
      </div>
    </div>
  )
}

export default AboutSection
