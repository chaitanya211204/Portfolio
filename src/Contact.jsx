// import React from 'react'
// import Sidebar from './Sidebar'
// import ContactCard from './ContactCard'

// const Contact = () => {
//   return (
//     <div>
//       <h1 className='text-center text-[#00adb5] text-5xl font-bold ml-[120px] mt-[100px]'> Contact Me </h1>
//       <div className='flex flex-start size-full'>
//         <Sidebar></Sidebar>
//         <div className='mb-8 ml-8 w-2/3'>
//           <ContactCard></ContactCard>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Contact


import React from 'react'
import Sidebar from './Sidebar'
import ContactCard from './ContactCard'

const Contact = () => {
  return (
    <div className="w-full px-4 sm:px-6 md:px-10 lg:px-16 py-16">
      {/* Heading */}
      <h1 className="text-center lg:text-left text-[#00adb5] text-3xl sm:text-4xl md:text-5xl font-bold mb-10">
        Contact Me
      </h1>

      {/* Main layout */}
      <div className="flex flex-col lg:flex-row items-start gap-10">
        {/* Sidebar */}
        <div className="w-full lg:w-2/3">
          <Sidebar />
        </div>

        {/* Contact Form / Card */}
        <div className="w-full lg:w-1/3">
          <ContactCard />
        </div>
      </div>
    </div>
  )
}

export default Contact
