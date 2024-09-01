import React from 'react';
import { Instagram, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="social" className="bg-purple-100 py-8">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <img src="https://imgur.com/gallery/trebol-logo-solo-Nz8Ognd" alt="Trébol de Cuatro Hojas Logo Alternativo" className="h-16 mb-4 md:mb-0" />
        <div className="flex space-x-4">
          <a href="https://www.instagram.com/trebolde4hojaschile/" target="_blank" rel="noopener noreferrer" className="text-purple-800 hover:text-purple-600 transition-colors">
            <Instagram size={24} />
          </a>
          <a href="https://wa.me/56978784632" target="_blank" rel="noopener noreferrer" className="text-purple-800 hover:text-purple-600 transition-colors">
            <Phone size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
