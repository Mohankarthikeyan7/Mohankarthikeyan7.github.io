
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container-custom py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className="font-bold text-xl text-devops-navy">
              MK<span className="text-devops-teal">.</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="hover:text-devops-teal transition-colors">Home</Link>
            <Link to="/projects" className="hover:text-devops-teal transition-colors">Projects</Link>
            <Link to="/resume" className="hover:text-devops-teal transition-colors">Resume</Link>
            <Link to="/contact" className="hover:text-devops-teal transition-colors">Contact</Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              onClick={() => setIsOpen(!isOpen)}
              className="p-2"
              aria-label="Toggle menu"
            >
              <Menu size={24} />
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-4">
              <Link 
                to="/"
                onClick={() => setIsOpen(false)} 
                className="block py-2 px-4 hover:bg-gray-50 rounded-md"
              >
                Home
              </Link>
              <Link 
                to="/projects"
                onClick={() => setIsOpen(false)}
                className="block py-2 px-4 hover:bg-gray-50 rounded-md"
              >
                Projects
              </Link>
              <Link 
                to="/resume"
                onClick={() => setIsOpen(false)}
                className="block py-2 px-4 hover:bg-gray-50 rounded-md"
              >
                Resume
              </Link>
              <Link 
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="block py-2 px-4 hover:bg-gray-50 rounded-md"
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
