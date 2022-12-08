import React from 'react'
import about2 from '../assets/about2.jpg'
import { about } from '../data'
const AboutSection = () => {
  return (
    <div className="max-w-5xl mx-auto grid grid-cols-2 grid-flow-col">
      <div className="flex justify-center items-center">
        <div className="space-y-3 p-3">
          <div className="text-[#1f1e1e] text-7xl  font-bold">
            {about[1].title}
          </div>
          <div className="text-[#1f1e1e] text-3xl ">{about[1].description}</div>
        </div>
      </div>
      <div className="flex justify-start h-[80vh]">
        <img src={about2} width={480} />
      </div>
    </div>
  )
}

export default AboutSection
