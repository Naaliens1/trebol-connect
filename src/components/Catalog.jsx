import React from 'react';
import { ExternalLink } from 'lucide-react';

const products = [
  { id: 1, name: 'Libro de Meditación', price: '$15.000', image: 'https://example.com/meditation-book.jpg' },
  { id: 2, name: 'Aceite Esencial de Lavanda', price: '$8.000', image: 'https://example.com/lavender-oil.jpg' },
  { id: 3, name: 'Set de Velas Aromáticas', price: '$12.000', image: 'https://example.com/scented-candles.jpg' },
  // Add more products as needed
];

const Catalog = () => {
  const handleWhatsAppOrder = (product) => {
    const message = encodeURIComponent(`Quiero comprar el producto ${product.name}`);
    window.open(`https://wa.me/56978784632?text=${message}`, '_blank');
  };

  return (
    <section id="catalog" className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center text-purple-800">Nuestro Catálogo</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div key={product.id} className="flex flex-col items-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <img src={product.image} alt={product.name} className="w-full h-48 object-cover mb-4 rounded" loading="lazy" />
              <h3 className="text-lg font-semibold mb-2 text-purple-800">{product.name}</h3>
              <p className="text-purple-600 font-bold mb-4">{product.price}</p>
              <button
                onClick={() => handleWhatsAppOrder(product)}
                className="w-full bg-green-500 text-white px-4 py-2 rounded-full hover:bg-green-600 transition-colors flex items-center justify-center"
              >
                <span>Comprar en WhatsApp</span>
                <ExternalLink className="ml-2 h-4 w-4" />
              </button>
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
