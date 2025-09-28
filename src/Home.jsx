import React from 'react'
import Video from './Video'


const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center lg:flex-row lg:items-start lg:justify-between px-4 sm:px-6 md:px-10 py-10">
      
      {/* Left Section (Text) */}
      <div className="max-w-2xl text-white text-center lg:text-left mb-10 lg:mb-0 lg:mr-8">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium mb-6 text-center">
          Hii, I'm <span className="text-[#00adb5] font-bold">Chaitanya Garg</span> 👋
        </h2>
        <p className="text-base sm:text-lg md:text-xl font-medium leading-relaxed mt-6 text-center">
          Final-year Software Developer passionate about building scalable and elegant solutions.
        </p>
        <p className="text-[#00adb5] font-semibold mt-6 text-sm sm:text-base md:text-lg text-center">
          • C++ • Java • Spring Boot • React
        </p>
      </div>

      {/* Right Section (Video) */}
      <div className="w-full max-w-lg md:max-w-xl lg:max-w-2xl">
        <Video />
      </div>
    </div>
  )
}

export default Home
