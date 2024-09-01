import React from 'react';
import { Link } from 'react-scroll';

const Header = () => {
  return (
    <header className="bg-white shadow-md fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <img src="https://imgur.com/gallery/tr-bol-logo-con-todo-wGXf88F" alt="Trébol de Cuatro Hojas Logo" className="h-16" />
        <nav>
          <ul className="flex space-x-6">
            <li><Link to="home" smooth={true} duration={500} className="hover:text-purple-600 cursor-pointer">Inicio</Link></li>
            <li><Link to="catalog" smooth={true} duration={500} className="hover:text-purple-600 cursor-pointer">Catálogo</Link></li>
            <li><Link to="contact" smooth={true} duration={500} className="hover:text-purple-600 cursor-pointer">Contacto</Link></li>
            <li><Link to="social" smooth={true} duration={500} className="hover:text-purple-600 cursor-pointer">Redes Sociales</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
