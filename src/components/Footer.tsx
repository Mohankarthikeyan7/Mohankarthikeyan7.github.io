
import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-devops-navy text-white py-12">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Mohan Karthikeyan</h3>
            <p className="text-gray-300 mb-4">DevOps Engineer with 6 years of experience in cloud infrastructure, automation, and security.</p>
            <div className="flex space-x-4">
              <a href="https://github.com/mohankarthikeyan7" className="text-gray-300 hover:text-white transition-colors" aria-label="GitHub">
                <Github size={20} />
              </a>
              <a href="https://linkedin.com/in/mohankarthikeyan" className="text-gray-300 hover:text-white transition-colors" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
              <a href="mailto:mohankarthick52@gmail.com" className="text-gray-300 hover:text-white transition-colors" aria-label="Email">
                <Mail size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/" className="text-gray-300 hover:text-white transition-colors">Home</a></li>
              <li><a href="/projects" className="text-gray-300 hover:text-white transition-colors">Projects</a></li>
              <li><a href="/resume" className="text-gray-300 hover:text-white transition-colors">Resume</a></li>
              <li><a href="/contact" className="text-gray-300 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <p className="text-gray-300 mb-1">Liverpool, UK (Open for Relocation)</p>
            <p className="text-gray-300 mb-1">+44-7407036084</p>
            <p className="text-gray-300">mohankarthick52@gmail.com</p>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-6 text-center">
          <p className="text-gray-400">© {new Date().getFullYear()} Mohan Karthikeyan. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
