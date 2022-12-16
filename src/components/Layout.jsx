import React from 'react'
import coffeeLogo from '../assets/logo.png'
const Layout = () => {
  return (
    <div className="flex justify-around items-center flex-row">
      <div>
        <img src={coffeeLogo} style={{ width: '200px', height: '148px' }} />
      </div>
      <Menu />
    </div>
  )
}

export default Layout

const Menu = () => {
  return (
    <div
      className="flex justify-center items-center flex-row space-x-6 p-4 rounded-md"
      style={{ backgroundColor: 'rgba(144, 106, 71, 0.5)' }}
    >
      <div className="text-2xl font-bold cursor-pointer hover:text-white">
        <a href="#home">Home</a>
      </div>
      <div className="text-2xl font-bold cursor-pointer hover:text-white">
        <a href="#aboutUs">About us</a>
      </div>
      <div className="text-2xl font-bold cursor-pointer hover:text-white">
        <a href="#bookTable">Book table</a>
      </div>
      <div className="text-2xl font-bold cursor-pointer hover:text-white">
        <a href="#contactUs">Contact</a>
      </div>
    </div>
  )
}
