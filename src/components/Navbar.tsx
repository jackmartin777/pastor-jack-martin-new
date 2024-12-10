import React, { useState } from 'react';
import { Menu, X, Cross } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#approach', label: 'Approach' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <nav className="fixed w-full bg-white/90 backdrop-blur-sm z-50 border-b border-gray-100">
      <div className="container-padding">
        <div className="flex justify-between items-center h-16">
          <a href="#" className="flex items-center gap-2 group">
            <Cross className="h-5 w-5 text-primary-accent group-hover:rotate-90 transition-transform duration-300" />
            <span className="text-lg font-light">Pastor Jack Martin</span>
          </a>
          
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                className="text-sm uppercase tracking-wide hover:text-primary-accent transition-colors"
              >
                {label}
              </a>
            ))}
            <a 
              href="#contact"
              className="btn-primary"
            >
              Book Session
            </a>
          </div>

          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden"
          >
            {isOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            {navLinks.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                className="block py-2 text-sm uppercase tracking-wide hover:text-primary-accent transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {label}
              </a>
            ))}
            <a 
              href="#contact"
              className="btn-primary block text-center mt-4"
              onClick={() => setIsOpen(false)}
            >
              Book Session
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;