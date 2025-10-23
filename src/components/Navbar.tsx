import React, { useState } from "react";


interface NavbarProps {
  darkMode: boolean;
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
  activeSection: string;
  setActiveSection: React.Dispatch<React.SetStateAction<string>>;
}

const Navbar: React.FC<NavbarProps> = ({ darkMode, setDarkMode, activeSection, setActiveSection }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "projects", label: "Projects" },
    { id: "services", label: "Services" },
    { id: "testimonials", label: "Reviews" },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 60,  // Adjust for navbar height
        behavior: "smooth",
      });
      setActiveSection(sectionId);
      setMenuOpen(false);
    }
  };

  const DesktopNav: React.FC = () => (
    <ul className="hidden md:flex gap-6 text-sm font-medium">
      {navItems.map((item) => (
        <li key={item.id}>
          <NavItem item={item} />
        </li>
      ))}
    </ul>
  );

  const MobileNav: React.FC = () => (
    <div
      className={`fixed top-20 left-4 right-4 p-6 rounded-2xl shadow-2xl backdrop-blur-md border z-50 md:hidden transition-all duration-300
      ${darkMode ? "bg-white/95 text-black border-gray-200" : "bg-white/90 text-black border-gray-200"}`}
    >
      <ul className="flex flex-col gap-3">
        {navItems.map((item) => (
          <li key={item.id}>
            <NavItem item={item} mobile />
          </li>
        ))}
      </ul>
      <button
        onClick={() => scrollToSection("contact")}
        className={`mt-4 w-full font-bold px-6 py-3 rounded-full transition-all duration-300 hover:scale-105
          ${darkMode ? "bg-black text-white" : "bg-white text-black"}`}
      >
        Contact
      </button>
    </div>
  );

  const NavItem: React.FC<{ item: { id: string; label: string }; mobile?: boolean }> = ({ item, mobile }) => {
    return (
      <button
        onClick={() => scrollToSection(item.id)}
        className={`w-full text-left px-3 py-1 rounded-full transition-all duration-300 hover:scale-105 ${
          activeSection === item.id
            ? "text-purple-600 bg-purple-100 dark:bg-purple-900/30"
            : mobile
            ? "hover:bg-gray-100 dark:hover:bg-gray-800"
            : "hover:text-purple-500"
        }`}
        aria-current={activeSection === item.id ? "page" : undefined}
      >
        {item.label}
      </button>
    );
  };

  return (
    <>
      <nav
        className={`fixed top-4 left-4 right-4 md:left-1/2 md:right-auto md:transform md:-translate-x-1/2 z-50 flex justify-between items-center px-4 md:px-6 py-3 rounded-full transition-all duration-300 backdrop-blur-md border
          ${darkMode ? "bg-white/90 text-black border-gray-200" : "bg-black/90 text-white border-gray-800"}`}
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
        <DesktopNav />

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
          className="md:hidden text-2xl p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </nav>

      {/* Mobile menu - Full screen overlay */}
      {menuOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/50 z-40 md:hidden"
            onClick={() => setMenuOpen(false)}
          />

          {/* Menu */}
          <MobileNav />
        </>
      )}
    </>
  );
};
export default Navbar;