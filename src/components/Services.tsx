import React, { useState } from "react";
import { FaLaptopCode, FaPencilRuler, FaMobileAlt, FaProjectDiagram } from "react-icons/fa";
interface Service {
  title: string;
  desc: string;
  Icon: React.ComponentType<{ size?: number; className?: string }>;
  features: string[];
}

const Services: React.FC = () => {
  const [activeService, setActiveService] = useState<number>(1);
  
  const services: Service[] = [
    {
      title: "UI/UX Design",
      desc: "Creating intuitive and visually appealing designs that enhance user experience and engagement",
      Icon: FaLaptopCode,
      features: ["User Research", "Wireframing", "Prototyping", "Visual Design"]
    },
    {
      title: "Web Development",
      desc: "Building responsive and performant web applications using modern technologies and best practices",
      Icon: FaPencilRuler,
      features: ["Frontend Development", "Backend Development", "Database Design", "API Integration"]
    },
    {
      title: "Mobile App Design",
      desc: "Crafting seamless and user-friendly mobile application interfaces for iOS and Android platforms",
      Icon: FaMobileAlt,
      features: ["iOS Design", "Android Design", "Cross-platform", "App Store Optimization"]
    },
    {
      title: "Prototyping & Wireframing",
      desc: "Creating interactive prototypes and wireframes to visualize and test design concepts effectively",
      Icon: FaProjectDiagram,
      features: ["Interactive Prototypes", "User Flow Mapping", "Design Systems", "Usability Testing"]
    },
  ];

  return (
    <section 
      id="services" 
      className="min-h-screen flex flex-col justify-center px-6 md:px-20 py-20 bg-gray-50 dark:bg-gray-900/50"
    >
      {/* Section Header */}
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Services</h2>
        <p className="text-gray-600 dark:text-gray-300 text-lg max-w-2xl mx-auto">
          Transforming ideas into exceptional digital experiences through comprehensive design and development services
        </p>
      </div>

      {/* Services Grid */}
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {services.map((service, index) => {
            const isActive = index === activeService;
            const ServiceIcon = service.Icon;
            
            return (
              <div
                key={index}
                onClick={() => setActiveService(index)}
                className={`cursor-pointer p-8 rounded-2xl transition-all duration-300 hover:scale-105 ${
                  isActive 
                    ? "bg-white dark:bg-gray-800 shadow-xl border-2 border-purple-200 dark:border-purple-700" 
                    : "bg-gray-100 dark:bg-gray-800/50 hover:bg-white dark:hover:bg-gray-800 border-2 border-transparent"
                }`}
              >
                <div className={`inline-flex p-4 rounded-xl mb-6 transition-colors duration-300 ${
                  isActive 
                    ? "bg-purple-600 text-white" 
                    : "bg-purple-100 dark:bg-purple-900/30 text-purple-600"
                }`}>
                  <ServiceIcon size={32} />
                </div>
                
                <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm">
                  {service.desc}
                </p>
                
                {/* Service features (shown only for active service) */}
                {isActive && (
                  <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
                    <h4 className="font-semibold mb-3 text-sm text-purple-600">Key Features:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li 
                          key={featureIndex}
                          className="flex items-center text-sm text-gray-600 dark:text-gray-300"
                        >
                          <span className="w-2 h-2 bg-purple-600 rounded-full mr-3"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Service Navigation Dots */}
        <div className="flex justify-center items-center gap-6">
          <div className="flex gap-3">
            {services.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveService(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === activeService 
                    ? "bg-purple-600 w-8" 
                    : "bg-gray-300 dark:bg-gray-600 hover:bg-purple-400"
                }`}
                aria-label={`Select service ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Ready to Start Your Project?</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Let's discuss how I can help bring your ideas to life with professional design and development services.
            </p>
            <button 
              onClick={() => {
                const element = document.getElementById("contact");
                if (element) {
                  element.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full hover:scale-105 transition-all duration-300 font-medium shadow-lg"
            >
              Get Started
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;