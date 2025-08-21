// import React from 'react';
// import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

// const Footer = () => {
//   return (
//     <footer className="bg-gray-900 text-gray-300 py-8 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between text-center md:text-left">
//         {/* Copyright Section */}
//         <div className="mb-4 md:mb-0">
//           <p className="text-sm text-center">
//             &copy; {new Date().getFullYear()} Chaitanya Garg. All rights reserved.
//           </p>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-center md:text-left">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Chaitanya Garg. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
