import React from 'react';
import { ExternalLink } from 'lucide-react';

const products = [
  { id: 1, name: 'Libro "Cómo Meditar"', price: '$15.000' },
  { id: 2, name: 'Aceite Esencial de Lavanda', price: '$8.000' },
  { id: 3, name: 'Set de Velas Aromáticas', price: '$12.000' },
  { id: 4, name: 'Incienso de Sándalo', price: '$5.000' },
  { id: 5, name: 'Difusor de Aromas', price: '$20.000' },
  { id: 6, name: 'Libro "Mindfulness Diario"', price: '$18.000' },
];

const Catalog = () => {
  return (
    <section id="catalog" className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center text-purple-800">Nuestro Catálogo</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div key={product.id} className="flex flex-col items-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-lg font-semibold mb-2 text-purple-800">{product.name}</h3>
              <p className="text-purple-600 font-bold mb-4">{product.price}</p>
              <a
                href={`https://wa.me/56978784632?text=Hola, me interesa comprar: ${encodeURIComponent(product.name)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-green-500 text-white px-4 py-2 rounded-full hover:bg-green-600 transition-colors flex items-center justify-center"
              >
                <span>Comprar en WhatsApp</span>
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
