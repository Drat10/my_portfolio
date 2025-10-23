import React, { useState, useEffect, useCallback} from "react";
import { FaChevronLeft, FaChevronRight, FaStar  } from "react-icons/fa";
// Define the structure of a testimonial
interface Testimonial {
  text: string;
  rating: number;
  avatar: string;
  name: string;
  role: string;
  company: string;
}

interface TestimonialsProps {
  testimonials: Testimonial[];
}

const Testimonials: React.FC<TestimonialsProps> = ({ testimonials }) => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(false);

  // Auto-play functionality
  useEffect(() => {
    if (isAutoPlaying) {
      const interval = setInterval(() => setCurrentTestimonial((prev) => (prev + 1) % testimonials.length), 5000);
      return () => clearInterval(interval);
    }
  }, [isAutoPlaying, testimonials.length]);

  // Navigate to a specific testimonial based on index
  const navigateTestimonial = useCallback((index: number): void => {
    setCurrentTestimonial(index);
    setIsAutoPlaying(false); // Stop auto-play when navigating manually
  }, []);

  // Get the side testimonial based on direction (-1 for previous, 1 for next)
  const sideTestimonial = (direction: number): Testimonial => {
    const index = (currentTestimonial + direction + testimonials.length) % testimonials.length;
    return testimonials[index];
  };

  // Handle empty testimonials case
  if (testimonials.length === 0) {
    return <p>No testimonials available.</p>;
  }

  return (
    <section id="testimonials" className="min-h-screen flex flex-col justify-center px-6 md:px-20 py-20 bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">What Clients Say</h2>
        <p className="text-gray-600 dark:text-gray-300 text-lg max-w-2xl mx-auto">
          Here's what some of my clients have to say about working with me
        </p>
      </div>

      <div className="max-w-4xl mx-auto relative">
        {/* Main Testimonial */}
        <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 md:p-12 shadow-2xl border border-gray-100 dark:border-gray-700 transition-all duration-500 opacity-100">
          <div className="text-center">
            <div className="text-6xl text-purple-200 dark:text-purple-800 mb-6 font-serif">"</div>
            <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 leading-relaxed mb-8 font-light italic">
              {testimonials[currentTestimonial].text}
            </p>
            <div className="flex justify-center gap-1 mb-8">
              {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                <FaStar key={i} className="text-yellow-400 text-xl" />
              ))}
            </div>
            <div className="flex items-center justify-center gap-4">
              <img
                src={testimonials[currentTestimonial].avatar}
                alt={`Avatar of ${testimonials[currentTestimonial].name}`}
                className="w-16 h-16 rounded-full object-cover ring-4 ring-purple-100 dark:ring-purple-800 shadow-lg"
                onError={(e) => {
                  // Fallback if image fails to load
                  e.currentTarget.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="64" height="64"%3E%3Crect width="64" height="64" fill="%239333ea"/%3E%3Ctext x="50%25" y="50%25" dominant-baseline="middle" text-anchor="middle" font-family="Arial" font-size="24" fill="white"%3E' + testimonials[currentTestimonial].name.charAt(0) + '%3C/text%3E%3C/svg%3E';
                }}
              />
              <div className="text-left">
                <h4 className="font-bold text-lg">{testimonials[currentTestimonial].name}</h4>
                <p className="text-purple-600 font-medium">{testimonials[currentTestimonial].role}</p>
                <p className="text-sm text-gray-500">{testimonials[currentTestimonial].company}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Side Testimonials (Desktop only) */}
        <div className="hidden lg:block">
          {[-1, 1].map((direction) => {
            const { text, avatar, name, role } = sideTestimonial(direction);
            return (
              <div
                key={direction}
                className={`absolute ${direction === -1 ? "left-0 translate-x-[-4px]" : "right-0 translate-x-[4px]"} top-1/2 transform -translate-y-1/2 transition-transform duration-500 delay-200`}
              >
                <div className="bg-white/80 dark:bg-gray-800/80 p-4 rounded-2xl shadow-lg backdrop-blur-sm max-w-xs scale-90 opacity-70 hover:opacity-90 transition-opacity duration-300">
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">"{text.slice(0, 80)}..."</p>
                  <div className="flex items-center gap-2">
                    <img 
                      src={avatar} 
                      alt={`Avatar of ${name}`} 
                      className="w-8 h-8 rounded-full object-cover"
                      onError={(e) => {
                        e.currentTarget.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="32" height="32"%3E%3Crect width="32" height="32" fill="%239333ea"/%3E%3Ctext x="50%25" y="50%25" dominant-baseline="middle" text-anchor="middle" font-family="Arial" font-size="16" fill="white"%3E' + name.charAt(0) + '%3C/text%3E%3C/svg%3E';
                      }}
                    />
                    <div>
                      <p className="text-xs font-medium">{name}</p>
                      <p className="text-xs text-gray-500">{role}</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Navigation & Auto-Play */}
      <div className="flex justify-center items-center gap-6 mt-12">
        <button
          aria-label="Previous Testimonial"
          onClick={() => navigateTestimonial((currentTestimonial - 1 + testimonials.length) % testimonials.length)}
          className="p-4 rounded-full bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 border border-gray-200 dark:border-gray-700"
        >
          <FaChevronLeft className="w-5 h-5" />
        </button>

        <div className="flex gap-3">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => navigateTestimonial(index)}
              className={`w-3 h-3 ${index === currentTestimonial ? "bg-purple-600" : "bg-gray-300 dark:bg-gray-600"} rounded-full transition-all duration-300`}
            />
          ))}
        </div>

        <button
          aria-label="Next Testimonial"
          onClick={() => navigateTestimonial((currentTestimonial + 1) % testimonials.length)}
          className="p-4 rounded-full bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 border border-gray-200 dark:border-gray-700"
        >
          <FaChevronRight className="w-5 h-5" />
        </button>
      </div>

      <div className="text-center mt-6">
        <button
          onClick={() => setIsAutoPlaying(!isAutoPlaying)}
          className="text-sm text-gray-500 hover:text-purple-600 transition-colors duration-300"
        >
          {isAutoPlaying ? "⏸️ Pause" : "▶️ Play"} Auto-scroll
        </button>
      </div>
    </section>
  );
};


  export default Testimonials;