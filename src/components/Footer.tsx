import React from "react";
import { FaGithub, FaLinkedin, FaFacebook, FaInstagram, FaArrowUp } from "react-icons/fa";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Services", href: "#services" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Contact", href: "#contact" },
  ];

  const services = [
    "Web Development",
    "UI/UX Design",
    "Mobile Apps",
    "Consulting",
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-purple-500 rounded-full"></div>
        <div className="absolute top-1/2 -left-20 w-60 h-60 bg-blue-500 rounded-full"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-20 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand section */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <h3 className="text-3xl font-bold mb-2 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Chamba Nedup Bhutia
              </h3>
              <p className="text-purple-400 font-medium">Full Stack Developer</p>
            </div>
            
            <p className="text-gray-400 mb-6 leading-relaxed max-w-md">
              Full-stack developer passionate about creating beautiful, functional, 
              and user-centered digital experiences. Let's build something amazing together.
            </p>
            
            {/* Social links - Direct approach */}
            <div className="flex gap-4 mb-6">
              <a
                href="https://github.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-800 rounded-full hover:text-gray-400 transition-all duration-300 hover:scale-110 hover:shadow-lg"
                aria-label="GitHub"
              >
                <FaGithub className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-800 rounded-full hover:text-blue-400 transition-all duration-300 hover:scale-110 hover:shadow-lg"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="w-5 h-5" />
              </a>
              <a
                href="https://facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-800 rounded-full hover:text-blue-500 transition-all duration-300 hover:scale-110 hover:shadow-lg"
                aria-label="Facebook"
              >
                <FaFacebook className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-800 rounded-full hover:text-pink-400 transition-all duration-300 hover:scale-110 hover:shadow-lg"
                aria-label="Instagram"
              >
                <FaInstagram className="w-5 h-5" />
              </a>
            </div>

            {/* Newsletter signup */}
            <div className="bg-gray-800 rounded-lg p-4">
              <h4 className="font-semibold mb-2">Stay Updated</h4>
              <p className="text-sm text-gray-400 mb-3">Get notified about new projects and blog posts</p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="flex-1 px-3 py-2 bg-gray-700 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
                <button className="px-4 py-2 bg-purple-600 hover:bg-purple-700 rounded-lg text-sm font-medium transition-colors duration-300">
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-400 hover:text-white transition-colors duration-300 cursor-pointer text-left"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Services</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <span className="text-gray-400 hover:text-white transition-colors duration-300 cursor-pointer">
                    {service}
                  </span>
                </li>
              ))}
            </ul>

            {/* Contact Info */}
            <div className="mt-8">
              <h4 className="text-lg font-semibold mb-4">Get in Touch</h4>
              <div className="space-y-2 text-sm text-gray-400">
                <p className="flex items-center gap-2">
                  <span>📧</span>
                  <a href="mailto:hello@chambadev.com" className="hover:text-white transition-colors duration-300">
                    hello@chambadev.com
                  </a>
                </p>
                <p className="flex items-center gap-2">
                  <span>📱</span>
                  <a href="tel:+9779800000000" className="hover:text-white transition-colors duration-300">
                    +977 9800000000
                  </a>
                </p>
                <p className="flex items-center gap-2">
                  <span>📍</span>
                  <span>Kathmandu, Nepal</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © {currentYear} Chamba Nedup Bhutia. All rights reserved. Made with ❤️ in Nepal
            </p>
            <div className="flex gap-6 text-sm text-gray-400">
              <button 
                onClick={() => alert('Privacy Policy (Demo)')}
                className="hover:text-white transition-colors duration-300"
              >
                Privacy Policy
              </button>
              <button 
                onClick={() => alert('Terms of Service (Demo)')}
                className="hover:text-white transition-colors duration-300"
              >
                Terms of Service
              </button>
              <button 
                onClick={() => alert('Cookie Policy (Demo)')}
                className="hover:text-white transition-colors duration-300"
              >
                Cookies
              </button>
            </div>
          </div>

          {/* Additional info */}
          <div className="mt-6 pt-6 border-t border-gray-800 text-center">
            <p className="text-xs text-gray-500">
              This website is built with React, TypeScript, and Tailwind CSS. 
              Deployed with love and attention to detail.
            </p>
          </div>
        </div>
      </div>
      
      {/* Back to top button - Direct icon approach */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 p-4 bg-purple-600 text-white rounded-full shadow-lg hover:bg-purple-700 hover:scale-110 transition-all duration-300 z-50 group"
        aria-label="Back to top"
      >
        <FaArrowUp className="w-5 h-5 group-hover:translate-y-[-2px] transition-transform duration-300" />
      </button>
    </footer>
  );
};
export{};
export default Footer;