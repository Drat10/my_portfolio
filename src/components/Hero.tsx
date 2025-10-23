import React, { useState } from "react";
import { Typewriter } from "react-simple-typewriter";
import profile from "../assets/profile.jpg";
import profileAlt from "../assets/Hiddenprof.jpg";
const Hero: React.FC = () => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [currentX, setCurrentX] = useState(0);
  const dragThreshold = 50; // Minimum drag distance to trigger flip

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Mouse/Touch handlers
  const handleDragStart = (e: React.MouseEvent | React.TouchEvent) => {
    setIsDragging(true);
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    setStartX(clientX);
    setCurrentX(clientX);
  };

  const handleDragMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!isDragging) return;
    
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    setCurrentX(clientX);
  };

  const handleDragEnd = () => {
    if (!isDragging) return;
    
    const dragDistance = currentX - startX;
    
    // If dragged left beyond threshold, flip to back
    if (dragDistance < -dragThreshold && !isFlipped) {
      setIsFlipped(true);
    }
    // If dragged right beyond threshold, flip to front
    else if (dragDistance > dragThreshold && isFlipped) {
      setIsFlipped(false);
    }
    
    setIsDragging(false);
    setStartX(0);
    setCurrentX(0);
  };

  // Calculate rotation based on drag
  const getDragRotation = () => {
    if (!isDragging) return isFlipped ? 180 : 0;
    
    const dragDistance = currentX - startX;
    const maxDrag = 200;
    const dragPercentage = Math.max(-1, Math.min(1, dragDistance / maxDrag));
    
    if (isFlipped) {
      return 180 + (dragPercentage * 180);
    } else {
      return dragPercentage * 180;
    }
  };

  return (
    <section 
      id="home" 
      className="min-h-screen flex flex-col md:flex-row justify-between items-center px-6 md:px-20 py-20 gap-10"
    >
      <div className="text-center md:text-left max-w-lg space-y-6">
        <p className="font-semibold tracking-wide text-sm opacity-75">
          WELCOME TO MY PORTFOLIO
        </p>
        
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
          Hi, I'm{" "}
          <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            Chamba Nedup Bhutia
          </span>
        </h1>

        <h2 className="text-2xl md:text-3xl font-bold text-purple-600 min-h-[3rem]">
          <Typewriter
            words={[
              "Web Developer", 
              "UI & UX Designer", 
              "Backend Developer", 
              "Full Stack Engineer"
            ]}
            loop={true}
            cursor
            cursorStyle="|"
            typeSpeed={80}
            deleteSpeed={50}
            delaySpeed={1500}
          />
        </h2>

        <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
          Passionate about creating beautiful, functional, and user-centered digital experiences.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 pt-4">
          <button 
            onClick={() => scrollToSection("projects")}
            className="group px-8 py-3 border-2 border-purple-600 text-purple-600 rounded-full hover:bg-purple-600 hover:text-white transition-all duration-300 font-medium"
          >
            <span className="flex items-center gap-2 justify-center">
              My Projects
              <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
            </span>
          </button>
          <button className="px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full hover:scale-105 transition-all duration-300 font-medium shadow-lg">
            Download CV
          </button>
        </div>
      </div>

      {/* Drag Flip Card Container */}
      <div className="relative group perspective-1000">
        <div 
          className="relative w-80 h-80 md:w-96 md:h-96 lg:w-[28rem] lg:h-[28rem] cursor-grab active:cursor-grabbing select-none"
          onMouseDown={handleDragStart}
          onMouseMove={handleDragMove}
          onMouseUp={handleDragEnd}
          onMouseLeave={handleDragEnd}
          onTouchStart={handleDragStart}
          onTouchMove={handleDragMove}
          onTouchEnd={handleDragEnd}
          style={{
            transformStyle: 'preserve-3d',
            transform: `rotateY(${getDragRotation()}deg)`,
            transition: isDragging ? 'none' : 'transform 0.6s ease-out',
          }}
        >
          {/* Front Side */}
          <div 
            className="absolute inset-0 w-full h-full rounded-full overflow-hidden shadow-2xl ring-4 ring-purple-100 dark:ring-purple-900/30 group-hover:ring-purple-300 dark:group-hover:ring-purple-700/50 transition-all duration-300"
            style={{ backfaceVisibility: 'hidden' }}
          >
            <img
              src={profile}
              alt="Profile"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300 pointer-events-none"
              draggable="false"
            />
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-purple-500/20 to-blue-500/20 group-hover:from-purple-500/30 group-hover:to-blue-500/30 transition-all duration-300"></div>
            
          </div>

          {/* Back Side */}
          <div 
            className="absolute inset-0 w-full h-full rounded-full overflow-hidden shadow-2xl ring-4 ring-blue-100 dark:ring-blue-900/30 group-hover:ring-blue-300 dark:group-hover:ring-blue-700/50 transition-all duration-300"
            style={{ 
              backfaceVisibility: 'hidden',
              transform: 'rotateY(180deg)'
            }}
          >
            <img
              src={profileAlt}
              alt="Profile Alternative"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300 pointer-events-none"
              draggable="false"
            />
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-500/20 to-purple-500/20 group-hover:from-blue-500/30 group-hover:to-purple-500/30 transition-all duration-300"></div>
      
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;