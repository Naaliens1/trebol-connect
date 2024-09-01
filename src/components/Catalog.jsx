import React from 'react';

const Catalog = () => {
  return (
    <section id="catalog" className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center text-purple-800">Nuestro Catálogo en Vivo</h2>
        <p className="text-xl mb-8 text-center max-w-2xl mx-auto">Explora nuestro catálogo de productos en tiempo real.</p>
        <div className="w-full max-w-4xl mx-auto">
          <iframe 
            src="https://wa.me/c/56978784632" 
            title="Catálogo en Vivo" 
            className="w-full h-[600px] border-none rounded-lg shadow-lg"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Catalog;
