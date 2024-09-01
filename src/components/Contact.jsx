import React, { useState } from 'react';
import { Phone, Instagram } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const message = encodeURIComponent(`Nombre: ${formData.name}\nEmail: ${formData.email}\nMensaje: ${formData.message}`);
    window.open(`https://wa.me/56978784632?text=${message}`, '_blank');
  };

  return (
    <section id="contact" className="py-12 bg-purple-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center text-purple-800">Contáctanos</h2>
        <div className="flex flex-col md:flex-row justify-between items-start">
          <form onSubmit={handleSubmit} className="w-full md:w-1/2 mb-8 md:mb-0">
            <div className="mb-4">
              <label htmlFor="name" className="block text-purple-700 mb-2">Nombre</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-purple-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-purple-700 mb-2">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-purple-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-purple-700 mb-2">Mensaje</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="4"
                className="w-full px-4 py-2 border border-purple-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-purple-500 text-white px-6 py-2 rounded-full hover:bg-purple-600 transition-colors"
            >
              Enviar Mensaje por WhatsApp
            </button>
          </form>
          <div className="w-full md:w-1/3">
            <img src="https://imgur.com/gallery/trebol-logo-solo-Nz8Ognd" alt="Trébol de Cuatro Hojas Logo Alternativo" className="w-32 mx-auto mb-6" />
            <div className="flex justify-center space-x-4 mb-6">
              <a href="https://www.instagram.com/trebolde4hojaschile/" target="_blank" rel="noopener noreferrer" className="text-purple-800 hover:text-purple-600 transition-colors">
                <Instagram size={32} />
              </a>
              <a href="https://wa.me/56978784632" target="_blank" rel="noopener noreferrer" className="text-purple-800 hover:text-purple-600 transition-colors">
                <Phone size={32} />
              </a>
            </div>
            <p className="text-center text-purple-700">Síguenos en nuestras redes sociales para estar al día con nuestras novedades y ofertas especiales.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
