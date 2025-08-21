import React from 'react'
import Pro from './Pro'
import VerticalCardsContainer from './VerticalCardsContainer'

const Project = () => {
  return (
    <div className="w-full px-4 sm:px-6 md:px-10 lg:px-16 py-16">
      {/* Heading */}
      <h1 className="text-[#00adb5] text-3xl sm:text-4xl md:text-5xl font-bold text-center lg:text-left mb-10">
        Projects
      </h1>

      {/* Main layout */}
      <div className="flex flex-col lg:flex-row items-start gap-10">
        {/* Left side (Cards) */}
        <div className="w-full lg:w-2/3">
          <VerticalCardsContainer />
        </div>

        {/* Right side (Pro component) */}
        <div className="w-full lg:w-1/3">
          <Pro />
        </div>
      </div>
    </div>
  )
}

export default Project
