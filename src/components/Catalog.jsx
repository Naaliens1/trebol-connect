import React from 'react';
import { ExternalLink } from 'lucide-react';

const products = [
  { id: 1, name: 'Libro "Cómo Meditar"', price: '$15.000', link: 'https://wa.me/p/5997600320279939/56978784632' },
  { id: 2, name: 'Libro "El Poder del Ahora"', price: '$15.000', link: 'https://wa.me/p/6630717336950273/56978784632' },
  { id: 3, name: 'Libro "El Monje que Vendió su Ferrari"', price: '$15.000', link: 'https://wa.me/p/6630717336950273/56978784632' },
  { id: 4, name: 'Libro "El Alquimista"', price: '$15.000', link: 'https://wa.me/p/6630717336950273/56978784632' },
  { id: 5, name: 'Libro "Muchas Vidas, Muchos Maestros"', price: '$15.000', link: 'https://wa.me/p/6630717336950273/56978784632' },
  { id: 6, name: 'Libro "El Caballero de la Armadura Oxidada"', price: '$15.000', link: 'https://wa.me/p/6630717336950273/56978784632' },
  { id: 7, name: 'Libro "Tus Zonas Erróneas"', price: '$15.000', link: 'https://wa.me/p/6630717336950273/56978784632' },
  { id: 8, name: 'Libro "La Vaca"', price: '$15.000', link: 'https://wa.me/p/6630717336950273/56978784632' },
  { id: 9, name: 'Libro "Padre Rico, Padre Pobre"', price: '$15.000', link: 'https://wa.me/p/6630717336950273/56978784632' },
  { id: 10, name: 'Libro "Los Cuatro Acuerdos"', price: '$15.000', link: 'https://wa.me/p/6630717336950273/56978784632' },
  { id: 11, name: 'Libro "El Secreto"', price: '$15.000', link: 'https://wa.me/p/6630717336950273/56978784632' },
  { id: 12, name: 'Libro "Inteligencia Emocional"', price: '$15.000', link: 'https://wa.me/p/6630717336950273/56978784632' },
  { id: 13, name: 'Libro "Piense y Hágase Rico"', price: '$15.000', link: 'https://wa.me/p/6630717336950273/56978784632' },
  { id: 14, name: 'Libro "El Hombre en Busca de Sentido"', price: '$15.000', link: 'https://wa.me/p/6630717336950273/56978784632' },
  { id: 15, name: 'Libro "El Poder de la Intención"', price: '$15.000', link: 'https://wa.me/p/6630717336950273/56978784632' },
];

const Catalog = () => {
  return (
    <section id="catalog" className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center text-purple-800">Nuestro Catálogo</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div key={product.id} className="flex flex-col items-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <a
                href={product.link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full mb-4"
              >
                <img src={`https://via.placeholder.com/150?text=${encodeURIComponent(product.name)}`} alt={product.name} className="w-full h-40 object-cover rounded-lg" />
              </a>
              <h3 className="text-lg font-semibold mb-2 text-purple-800">{product.name}</h3>
              <p className="text-purple-600 font-bold mb-4">{product.price}</p>
              <a
                href={product.link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-green-500 text-white px-4 py-2 rounded-full hover:bg-green-600 transition-colors flex items-center justify-center"
              >
                <span>Ver en WhatsApp</span>
                <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <a
            href="https://wa.me/c/56978784632"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-purple-600 text-white font-semibold rounded-full hover:bg-purple-700 transition-colors"
          >
            Ver Catálogo Completo en WhatsApp
            <ExternalLink className="ml-2 h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Catalog;
