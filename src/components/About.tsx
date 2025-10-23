import React from "react";
import { FaGithub, FaLinkedin, FaFacebook, FaInstagram} from "react-icons/fa";
import characterImg from "../assets/about.png";
const About: React.FC = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center px-6 md:px-20 py-20 bg-gray-50 dark:bg-gray-900"
    >
      <div className="max-w-6xl w-full flex flex-col lg:flex-row items-center gap-16">
        {/* Character image + floating icons */}
        <div className="relative w-64 h-64 sm:w-72 sm:h-72 flex items-center justify-center">
          {/* Character */}
          <img
            src={characterImg}
            alt="Character"
            className="w-full h-full object-contain drop-shadow-lg"
          />

          {/* Social icons */}
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="absolute top-8 left-0 transform -translate-x-4 bg-black text-white p-3 rounded-full shadow-xl hover:scale-110 transition-all"
            >
              <FaGithub className="w-6 h-6" />
            </a>

          <a
            href="https://linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="absolute top-0 left-1/4 transform -translate-y-4 bg-black text-white p-3 rounded-full shadow-xl hover:scale-110 transition-all"
            >
              <FaLinkedin className="w-6 h-6" />
            </a>

          <a
            href="https://facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
           className="absolute top-0 right-1/4 transform -translate-y-4 bg-black text-white p-3 rounded-full shadow-xl hover:scale-110 transition-all"
          >
            <FaFacebook className="w-6 h-6" />
          </a>
          <a
            href="https://instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
           className="absolute right-0 top-8 transform translate-x-4 bg-black text-white p-3 rounded-full shadow-xl hover:scale-110 transition-all"
          >
            <FaInstagram className="w-6 h-6" />
          </a>
        </div>

        {/* Text Section */}
        <div className="flex-1 text-center lg:text-left space-y-6">
          <h2 className="text-4xl md:text-5xl font-bold">About Me</h2>
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-2 text-lg">
            <span className="font-semibold text-purple-600">Chamba Nedup Bhutia</span>
            <span className="hidden sm:block text-gray-400">•</span>
            <span className="font-medium text-purple-500">Web Developer</span>
          </div>

          <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto lg:mx-0 rounded-full"></div>

          <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
            Passionate about crafting beautiful, functional web applications with a touch
            of creativity and clean design. I love experimenting with new technologies and
            enhancing user experiences.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;