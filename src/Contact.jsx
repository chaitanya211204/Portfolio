import React from 'react'
import Sidebar from './Sidebar'
import ContactCard from './ContactCard'

const Contact = () => {
  return (
    <div className="w-full px-4 sm:px-6 md:px-10 lg:px-16 py-16">
      <h1 className="text-center lg:text-left text-[#00adb5] text-3xl sm:text-4xl md:text-5xl font-bold mb-10">
        Contact Me
      </h1>
      <div className="flex flex-col lg:flex-row items-start gap-10">
        <div className="w-full lg:w-1/2">
          <Sidebar />
        </div>
        <div className="w-full lg:w-1/2">
          <ContactCard />
        </div>
      </div>
    </div>
  )
}

export default Contact
