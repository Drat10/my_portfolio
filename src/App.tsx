import React,{useState, useEffect} from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import Contact from './components/Contact';
import testimonial1 from './assets/testimonial-1.jpg';
import testimonial2 from './assets/testimonial-2.jpg';
import testimonial3 from './assets/testimonial-3.jpg';
const App: React.FC = () => {
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== "undefined") {
      const savedTheme = localStorage.getItem("theme");
      return savedTheme === "dark";
    }
    return false;
  });

  const [isLoading, setIsLoading] = useState(true);
  const [activeSection, setActiveSection] = useState("home");

  const sampleTestimonials = [
    {
      text: "Chamba is an excellent developer. His work on the portfolio project was amazing!",
      rating: 5,
      avatar: testimonial1,
      name: "John Don",
      role: "CEO",
      company:"Example co"
    },
    {
      text: "I highly recommend Chamba! His attention to detail and creativity are top-notch.",
      rating: 4,
      avatar: testimonial2,
      name: "Jane Smith",
      role: "Product Manager",
      company: "Eg Inc."
    },
    {
      text: "A fantastic experience working with Chamba. He delivered everything on time and exceeded expectations.",
      rating: 5,
      avatar: testimonial3,
      name: "Alice Brown",
      role: "Lead Developer",
      company: "Innovative Solutions"
    }
  ];

  // Handle dark mode changes
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  // Loading screen
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  // Scroll spy for active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "projects", "services", "testimonials", "contact"];
      const scrollPosition = window.scrollY + 100;

      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const height = element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + height) {
            setActiveSection(section);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll behavior
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";

    return () => {
      document.documentElement.style.scrollBehavior = "auto";
    };
  }, []);

  // Loading screen component
  if (isLoading) {
    return (
      <div
        className={`fixed inset-0 z-50 flex items-center justify-center transition-colors duration-300 ${darkMode ? "bg-gray-900" : "bg-white"}`}
      >
        <div className="text-center">
          <div className="relative">
            {/* Loading spinner */}
            <div className="w-20 h-20 border-4 border-purple-200 dark:border-purple-800 rounded-full animate-spin">
              <div className="w-full h-full border-4 border-transparent border-t-purple-600 rounded-full"></div>
            </div>

            {/* Loading text */}
            <div className="mt-8">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-2">
                Chamba Nedup Bhutia
              </h1>
              <p className="text-gray-600 dark:text-gray-300 animate-pulse">Loading portfolio...</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"}`}>
      {/* Navigation */}
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} activeSection={activeSection} setActiveSection={setActiveSection} />

      {/* Main Content */}
      <main className="pt-20">
        <Hero />
        <About />
        <Projects />
        <Services />
        <Testimonials testimonials={sampleTestimonials} />
        <Contact/>
      </main>

      {/* Footer */}
      <Footer />

      {/* Scroll progress indicator */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gray-200 dark:bg-gray-800 z-50">
        <div
          className="h-full bg-gradient-to-r from-purple-600 to-blue-600 transition-all duration-300 ease-out"
          style={{
            width: `${Math.min((window.scrollY / Math.max(document.documentElement.scrollHeight - window.innerHeight, 1)) * 100, 100)}%`,
          }}
        ></div>
      </div>

      {/* Keyboard navigation hint */}
      <div className="fixed bottom-4 left-4 hidden lg:block z-40">
        <div className="bg-black/80 text-white text-xs px-3 py-2 rounded-lg backdrop-blur-sm">
          <p>Use ↑↓ keys to navigate</p>
        </div>
      </div>
    </div>
  );
};

export default App;
