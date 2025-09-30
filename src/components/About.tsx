import React from "react";
import { FaGithub, FaLinkedin, FaFacebook, FaInstagram} from "react-icons/fa";

const About: React.FC = () => {
return(
<section 
      id="about" 
      className="min-h-screen flex items-center justify-center px-6 md:px-20 py-20 bg-gray-50 dark:bg-gray-900/50"
    >
      <div className="max-w-6xl w-full flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
        
        {/* Left side - Character and Social Links */}
        <div className="relative flex flex-col items-center space-y-8">
          {/* Character Illustration Container */}
          <div className="relative">
            <div className="w-64 h-64 md:w-80 md:h-80 bg-gradient-to-br from-purple-100 to-blue-100 dark:from-purple-900/30 dark:to-blue-900/30 rounded-3xl flex items-center justify-center shadow-lg">
              {/* Character Illustration */}
              <div className="relative transform scale-75 md:scale-100">
                {/* Head */}
                <div className="w-24 h-24 bg-amber-100 rounded-full relative border-2 border-amber-200">
                  {/* Hair */}
                  <div className="absolute -top-3 left-1 w-22 h-18 bg-gray-300 rounded-t-full shadow-sm"></div>
                  <div className="absolute -top-2 left-3 w-18 h-16 bg-gray-300 rounded-t-full"></div>
                  
                  {/* Sunglasses */}
                  <div className="absolute top-7 left-2 w-20 h-7 bg-black rounded-full flex items-center shadow-lg">
                    <div className="w-8 h-6 bg-black rounded-l-full border border-gray-800"></div>
                    <div className="w-4 h-6 bg-black flex items-center justify-center">
                      <div className="w-1 h-3 bg-gray-700"></div>
                    </div>
                    <div className="w-8 h-6 bg-black rounded-r-full border border-gray-800"></div>
                  </div>
                  
                  {/* Nose */}
                  <div className="absolute top-13 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-pink-300 rounded-full"></div>
                  
                  {/* Mouth */}
                  <div className="absolute top-16 left-1/2 transform -translate-x-1/2 w-4 h-2 bg-pink-400 rounded-full"></div>
                </div>
                
                {/* Body */}
                <div className="w-16 h-20 bg-gray-800 rounded-t-lg mx-auto mt-2 relative shadow-md">
                  {/* Shirt details */}
                  <div className="absolute top-2 left-2 w-3 h-3 bg-gray-700 rounded"></div>
                  <div className="absolute top-2 right-2 w-3 h-3 bg-gray-700 rounded"></div>
                  
                  {/* Peace sign hand */}
                  <div className="absolute -right-5 top-3 w-7 h-10 bg-amber-100 rounded-lg shadow-sm border border-amber-200">
                    {/* Peace sign fingers */}
                    <div className="absolute top-1 left-1.5 w-1.5 h-5 bg-amber-100 rounded-full shadow-sm"></div>
                    <div className="absolute top-1 right-1.5 w-1.5 h-5 bg-amber-100 rounded-full shadow-sm"></div>
                    <div className="absolute top-6 left-2 w-3 h-2 bg-amber-100 rounded-b-full"></div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Social Links positioned around character - Direct approach */}
            <div className="absolute -top-6 -left-6">
              <a 
                href="https://github.com/" 
                target="_blank"
                rel="noopener noreferrer"
                className="block p-4 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:text-gray-700 dark:hover:text-gray-300 transition-all duration-300 hover:scale-110 hover:shadow-xl"
                aria-label="GitHub"
              >
                <FaGithub className="w-6 h-6" />
              </a>
            </div>
            
            <div className="absolute -top-6 -right-6">
              <a 
                href="https://linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="block p-4 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:text-blue-600 transition-all duration-300 hover:scale-110 hover:shadow-xl"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="w-6 h-6" />
              </a>
            </div>
            
            <div className="absolute -bottom-6 -left-6">
              <a 
                href="https://facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="block p-4 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:text-blue-500 transition-all duration-300 hover:scale-110 hover:shadow-xl"
                aria-label="Facebook"
              >
                <FaFacebook className="w-6 h-6" />
              </a>
            </div>
            
            <div className="absolute -bottom-6 -right-6">
              <a 
                href="https://instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="block p-4 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:text-pink-500 transition-all duration-300 hover:scale-110 hover:shadow-xl"
                aria-label="Instagram"
              >
                <FaInstagram className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        {/* Right side - About content */}
        <div className="flex-1 text-center lg:text-left space-y-6">
          <div className="space-y-2">
            <h2 className="text-4xl md:text-5xl font-bold">About me</h2>
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-2 text-lg">
              <span className="font-semibold text-purple-600">Chamba Nedup Bhutia</span>
              <span className="hidden sm:block text-gray-400">•</span>
              <span className="font-medium text-purple-500">Web developer</span>
            </div>
          </div>
          
          <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto lg:mx-0 rounded-full"></div>
          
          <div className="space-y-4 text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
            <p>
              I'm a passionate web developer with a keen eye for creating intuitive and visually 
              appealing digital experiences. With expertise in modern web technologies, I transform 
              ideas into functional and beautiful applications.
            </p>
            <p>
              My journey in web development started with a curiosity for how things work on the 
              internet, and it has evolved into a deep passion for crafting user-centered solutions 
              that make a difference.
            </p>
            <p>
              When I'm not coding, you can find me exploring new technologies, contributing to 
              open-source projects, or sharing knowledge with the developer community.
            </p>
          </div>

          <div className="pt-4">
            <button className="px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full hover:scale-105 transition-all duration-300 font-medium shadow-lg">
              Let's Connect
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;