import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-green-100 shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <img src="https://imgur.com/gallery/tr-bol-logo-con-todo-wGXf88F" alt="Trébol de Cuatro Hojas Logo" className="h-16" />
        <nav>
          <ul className="flex space-x-6">
            <li><Link to="/" className="hover:text-green-600">Inicio</Link></li>
            <li><Link to="/catalogo" className="hover:text-green-600">Catálogo</Link></li>
            <li><Link to="/contacto" className="hover:text-green-600">Contacto</Link></li>
            <li><Link to="/redes-sociales" className="hover:text-green-600">Redes Sociales</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;