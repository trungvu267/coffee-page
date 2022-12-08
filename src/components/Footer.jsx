import React from 'react'
import coffeeLogo from '../assets/logo.png'
const Footer = () => {
  return (
    <div className="bg-[#1f1e1e]">
      <div className="text-white max-w-5xl mx-auto grid grid-cols-6 mt-6 pt-6">
        <div className="col-span-2">
          <img src={coffeeLogo} style={{ width: '200px', height: '148px' }} />
        </div>
        <div className="col-span-2">
          <div>Lê Văn Hiến, Bắc Từ Liêm, Hà Nội</div>
          <div>+394536767</div>
        </div>
        <div className="col-span-2">
          <div>Thời gian mở cửa</div>
          <div>T2-T6: 09.00h-22.00h </div>
          <div>T7-CN: 09.00h-23h.45 </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
