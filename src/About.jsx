// import React from 'react'
// import Side from './Side'

// const About = () => {
//   return (
//     <div>
//       <h1 className='text-center text-[#00adb5] text-5xl font-bold ml-8'>✨ About Me </h1>
//       <div className='flex flex-start size-full'>
//         <Side></Side>
//         <p className='h-120 w-190 text-white ml-20 font-medium text-2xl leading-loose text-justify size-full'>I am Chaitanya Garg, a final-year undergraduate student with a strong foundation in software development, data structures, and algorithms.I enjoy solving challenging problems and translating ideas into impactful solutions that blend technical precision with creativity.
//           I am driven by curiosity, continuous learning, and a desire to grow as a developer while making meaningful contributions to technology.
//           <br/><span className='text-[#00adb5] font-bold text-semibold text-3xl leading-loose tracking-wide md:tracking-tight mt-auto'>SKILLS : </span>
//           <p className='text-white ml-10 font-medium text-2xl text-justify leading-loose'><span className='text-[#00adb5] font-bold text-semibold text-2xl tracking-wide md:tracking-tight'>Programming Languages : </span>C/C++, Java, Python, JavaScript</p>
//           <p className='text-white ml-10 font-medium text-2xl text-justify leading-loose'><span className='text-[#00adb5] font-bold text-semibold text-2xl tracking-wide md:tracking-tight'>Web Technologies : </span>HTML, CSS, ReactJs, Spring Boot</p>
//           <p className='text-white ml-10 font-medium text-2xl text-justify leading-loose'><span className='text-[#00adb5] font-bold text-semibold text-2xl tracking-wide md:tracking-tight'>Databases: </span>MySQL</p>
//           <p className='text-white ml-10 font-medium text-2xl text-justify leading-loose'><span className='text-[#00adb5] font-bold text-semibold text-2xl tracking-wide md:tracking-tight'>Tools and Platforms: </span>GitHub, VS Code, Intellij, Postman</p>

//           <span className='text-[#00adb5] font-bold text-semibold text-3xl leading-loose tracking-wide md:tracking-tight mt-20'>EDUCATION : </span>
//           <p className='ml-10'>B.Tech - Information Technology (2022 - 2026)</p>
//           <p className='ml-10'>J.C. Bose University of Science And Technology, YMCA, Faridabad</p>
//         </p>
//       </div>
//     </div>
//   )
// }

// export default About


import React from 'react'
import Side from './Side'

const About = () => {
  return (
    <div className="w-full px-4 sm:px-8 lg:px-16 py-10">
      {/* Heading */}
      <h1 className="text-center text-[#00adb5] text-4xl sm:text-5xl font-bold mb-10">
        ✨ About Me
      </h1>

      {/* Main layout */}
      <div className="flex flex-col md:flex-row items-start gap-10">
        {/* Sidebar */}
        <div className="w-full md:w-2/3 flex justify-center">
          <Side />
        </div>

        {/* Content */}
        <div className="w-full md:w-2/3 text-white font-medium text-lg sm:text-xl leading-relaxed">
          <p className="mb-6 text-justify">
            I am <span className="text-[#00adb5] font-semibold">Chaitanya Garg</span>, 
            a final-year undergraduate student with a strong foundation in software development, 
            data structures, and algorithms. I enjoy solving challenging problems and translating ideas 
            into impactful solutions that blend technical precision with creativity.
            <br />
            I am driven by curiosity, continuous learning, and a desire to grow as a developer while 
            making meaningful contributions to technology.
          </p>

          {/* Skills */}
          <h2 className="text-[#00adb5] font-bold text-2xl sm:text-3xl mt-6 mb-4">
            SKILLS :
          </h2>
          <ul className="space-y-3">
            <li>
              <span className="text-[#00adb5] font-bold">Programming Languages: </span>
              C/C++, Java, Python, JavaScript
            </li>
            <li>
              <span className="text-[#00adb5] font-bold">Web Technologies: </span>
              HTML, CSS, ReactJS, TailwindCSS, Spring Boot
            </li>
            <li>
              <span className="text-[#00adb5] font-bold">Databases: </span>
              MySQL
            </li>
            <li>
              <span className="text-[#00adb5] font-bold">CourseWork: </span>
              Data Structures And Algorithms, Operating System, DBMS, Object-Oriented Programming, Computer Networks
            </li>
            <li>
              <span className="text-[#00adb5] font-bold">Tools and Platforms: </span>
              GitHub, VS Code, IntelliJ, Postman
            </li>
          </ul>

          {/* Education */}
          <h2 className="text-[#00adb5] font-bold text-2xl sm:text-3xl mt-8 mb-4">
            EDUCATION :
          </h2>
          <div className="space-y-1">
            <p>B.Tech - Information Technology (2022 - 2026)  - 8.57</p>
            <p>J.C. Bose University of Science And Technology, YMCA, Faridabad</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
