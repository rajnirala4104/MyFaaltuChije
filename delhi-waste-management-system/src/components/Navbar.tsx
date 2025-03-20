import React, { useState, useEffect } from 'react';
import { NavbarProps, NavItem } from '../interfaces';

const Navbar: React.FC<NavbarProps> = ({ logoSrc, logoAlt, siteName }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);

  // Navigation items
  const navItems: NavItem[] = [
    { label: 'Home', path: '/' },
    { 
      label: 'Services', 
      path: '/services',
      children: [
        { label: 'Residential', path: '/services/residential' },
        { label: 'Commercial', path: '/services/commercial' },
        { label: 'Industrial', path: '/services/industrial' },
      ]
    },
    { 
      label: 'Sustainability', 
      path: '/sustainability',
      children: [
        { label: 'Recycling Programs', path: '/sustainability/recycling' },
        { label: 'Green Initiatives', path: '/sustainability/initiatives' },
        { label: 'Annual Reports', path: '/sustainability/reports' },
      ]
    },
    { label: 'Resources', path: '/resources' },
    { label: 'About Us', path: '/about' },
    { label: 'Contact', path: '/contact' },
  ];

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Toggle the submenu
  const toggleSubmenu = (label: string) => {
    setActiveSubmenu(activeSubmenu === label ? null : label);
  };

  return (
    <nav className={`sticky top-0 z-50 w-full transition-all duration-300 ${
      scrolled ? 'bg-white shadow-md' : 'bg-white/90'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo and Site Name */}
          <div className="flex items-center">
            {logoSrc && (
              <img
                src={logoSrc}
                alt={logoAlt || 'Logo'}
                className="h-10 w-auto mr-2"
              />
            )}
            <a href="/" className="text-green-700 font-bold text-xl">
              {siteName}
            </a>
          </div>

          {/* Hamburger menu for mobile */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-green-700 hover:text-green-500 hover:bg-gray-100 focus:outline-none"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {/* Icon when menu is closed */}
              <svg
                className={`${isMenuOpen ? 'hidden' : 'block'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              {/* Icon when menu is open */}
              <svg
                className={`${isMenuOpen ? 'block' : 'hidden'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex md:items-center md:space-x-4">
            {navItems.map((item) => (
              <div key={item.label} className="relative group">
                {item.children ? (
                  <>
                    <button
                      onClick={() => toggleSubmenu(item.label)}
                      className="flex items-center text-gray-700 px-3 py-2 rounded-md text-sm font-medium hover:text-green-700 hover:bg-gray-100"
                    >
                      {item.label}
                      <svg
                        className={`ml-1 h-4 w-4 transition-transform duration-200 ${
                          activeSubmenu === item.label ? 'transform rotate-180' : ''
                        }`}
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button>
                    {/* Dropdown menu */}
                    <div
                      className={`${
                        activeSubmenu === item.label ? 'block' : 'hidden'
                      } absolute z-10 mt-1 w-48 bg-white rounded-md shadow-lg py-1`}
                    >
                      {item.children.map((child) => (
                        <a
                          key={child.label}
                          href={child.path}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-green-700"
                        >
                          {child.label}
                        </a>
                      ))}
                    </div>
                  </>
                ) : (
                  <a
                    href={item.path}
                    className="text-gray-700 px-3 py-2 rounded-md text-sm font-medium hover:text-green-700 hover:bg-gray-100"
                  >
                    {item.label}
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state */}
      <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1 bg-white shadow-lg">
          {navItems.map((item) => (
            <div key={item.label}>
              {item.children ? (
                <>
                  <button
                    onClick={() => toggleSubmenu(item.label)}
                    className="w-full flex justify-between items-center text-gray-700 px-3 py-2 rounded-md text-base font-medium hover:text-green-700 hover:bg-gray-100"
                  >
                    {item.label}
                    <svg
                      className={`ml-1 h-5 w-5 transition-transform duration-200 ${
                        activeSubmenu === item.label ? 'transform rotate-180' : ''
                      }`}
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                  {/* Mobile dropdown */}
                  <div
                    className={`${
                      activeSubmenu === item.label ? 'block' : 'hidden'
                    } pl-4 py-2`}
                  >
                    {item.children.map((child) => (
                      <a
                        key={child.label}
                        href={child.path}
                        className="block pl-3 pr-4 py-2 border-l-2 border-green-100 text-base font-medium text-gray-700 hover:text-green-700 hover:bg-gray-50 hover:border-green-300"
                      >
                        {child.label}
                      </a>
                    ))}
                  </div>
                </>
              ) : (
                <a
                  href={item.path}
                  className="block text-gray-700 px-3 py-2 rounded-md text-base font-medium hover:text-green-700 hover:bg-gray-100"
                >
                  {item.label}
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
