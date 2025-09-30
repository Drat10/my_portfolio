import React, { useState } from "react";

interface NavbarProps {
  darkMode: boolean;
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
  activeSection: string; // Get activeSection from props
  setActiveSection: React.Dispatch<React.SetStateAction<string>>; // To update activeSection in App
}

const Navbar: React.FC<NavbarProps> = ({ darkMode, setDarkMode, activeSection, setActiveSection }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "projects", label: "My Project" },
    { id: "services", label: "Services" },
    { id: "testimonials", label: "Reviews" },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveSection(sectionId);  // Update activeSection here
      setMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-4 left-1/2 transform -translate-x-1/2 z-50 flex justify-between items-center px-6 py-3 rounded-full transition-all duration-300 backdrop-blur-md border
        ${darkMode 
          ? "bg-white/90 text-black border-gray-200" 
          : "bg-black/90 text-white border-gray-800"
        }`}
    >
      {/* Dark mode toggle */}
      <button
        onClick={() => setDarkMode(!darkMode)}
        className={`w-10 h-10 flex items-center justify-center rounded-full text-xl transition-all duration-300 hover:scale-110
          ${darkMode ? "bg-black text-white" : "bg-white text-black"}`}
        aria-label="Toggle Dark Mode"
      >
        {darkMode ? "🌙" : "🌞"}
      </button>

      {/* Desktop navigation */}
      <ul className="hidden md:flex gap-6 text-sm font-medium">
        {navItems.map((item) => (
          <li key={item.id}>
            <button
              onClick={() => scrollToSection(item.id)}
              className={`px-3 py-1 rounded-full transition-all duration-300 hover:scale-105 ${
                activeSection === item.id
                  ? "text-purple-600 bg-purple-100 dark:bg-purple-900/30"
                  : "hover:text-purple-500"
              }`}
            >
              {item.label}
            </button>
          </li>
        ))}
      </ul>

      {/* Contact button (desktop) */}
      <button
        onClick={() => scrollToSection("contact")}
        className={`hidden md:block font-bold px-6 py-2 rounded-full transition-all duration-300 hover:scale-105
          ${darkMode ? "bg-black text-white hover:bg-gray-800" : "bg-white text-black hover:bg-gray-100"}`}
      >
        Contact
      </button>

      {/* Mobile hamburger */}
      <button
        className="md:hidden text-2xl"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
      </button>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          className={`absolute top-16 left-0 w-full p-6 rounded-2xl shadow-xl backdrop-blur-md border
          ${darkMode ? "bg-white/95 text-black border-gray-200" : "bg-black/95 text-white border-gray-800"}`}
        >
          <ul className="flex flex-col gap-3">
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => scrollToSection(item.id)}
                  className="hover:text-purple-500 transition-colors duration-300"
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
          <button
            onClick={() => scrollToSection("contact")}
            className={`mt-4 w-full font-bold px-6 py-2 rounded-full transition-all duration-300
              ${darkMode ? "bg-black text-white" : "bg-white text-black"}`}
          >
            Contact
          </button>
        </div>
      )}
    </nav>
  );
};
export default Navbar;