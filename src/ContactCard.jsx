import React from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const ContactCard = () => {
  return (
    <div className="bg-gradient-to-br flex items-center p-4 sm:p-6 lg:p-8 ml-8">
      <div className="relative bg-white/10 backdrop-blur-md border border-white/20 rounded-xl shadow-2xl p-6 sm:p-8 md:p-10 max-w-md w-full text-white transform transition-all duration-300 hover:scale-105 hover:shadow-3xl">
        <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-center"> 
          Get in Touch!
        </h2>

        <div className="space-y-4">
          <div className="flex items-center space-x-3">
            <FaEnvelope className="text-xl sm:text-2xl text-blue-300" />
            <a
              href="mailto:gargchaitanya2004@gmail.com"
              className="text-lg sm:text-xl hover:text-blue-200 transition-colors duration-200">
              gargchaitanya2004@gmail.com
            </a>
          </div>
          <div className="flex items-center space-x-3">
            <FaPhone className="text-xl sm:text-2xl text-blue-300" />
            <a
              href="tel:+91-7206258303"
              className="text-lg sm:text-xl hover:text-blue-200 transition-colors duration-200"
            >
              +91-7206258303
            </a>
          </div>
          <div className="flex items-center space-x-3">
            <FaMapMarkerAlt className="text-xl sm:text-2xl text-blue-300" />
            <p className="text-lg sm:text-xl">Haryana, India</p>
          </div>
        </div>
        <div className="mt-8 pt-6 border-t border-white/10 flex justify-center space-x-6">
          <a
            href="https://github.com/chaitanya211204"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-300 hover:text-white transition-colors duration-200"
            aria-label="GitHub"
          >
            <FaGithub className="w-8 h-8 sm:w-10 sm:h-10" />
          </a>
          <a
            href="www.linkedin.com/in/chaitanya-garg-104bbb257"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-300 hover:text-white transition-colors duration-200"
            aria-label="LinkedIn"
          >
            <FaLinkedin className="w-8 h-8 sm:w-10 sm:h-10" />
          </a>
          <a
            href="https://x.com/Chaitan93012831"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-300 hover:text-white transition-colors duration-200"
            aria-label="Twitter"
          >
            <FaTwitter className="w-8 h-8 sm:w-10 sm:h-10" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactCard;