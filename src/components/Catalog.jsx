import React, { useState, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';

const fetchCatalog = async () => {
  // Simulated API call to fetch catalog data
  // In a real scenario, you would integrate with the WhatsApp Business API
  return [
    { id: 1, name: 'Libro 1', price: '$10.99', image: 'https://via.placeholder.com/150' },
    { id: 2, name: 'Libro 2', price: '$12.99', image: 'https://via.placeholder.com/150' },
    { id: 3, name: 'Libro 3', price: '$9.99', image: 'https://via.placeholder.com/150' },
  ];
};

const Catalog = () => {
  const { data: products, isLoading, error } = useQuery({
    queryKey: ['catalog'],
    queryFn: fetchCatalog,
  });

  const handleWhatsAppOrder = (product) => {
    const message = encodeURIComponent(`Hola, me interesa el producto: ${product.name} - Precio: ${product.price}`);
    window.open(`https://wa.me/56978784632?text=${message}`, '_blank');
  };

  if (isLoading) return <div>Cargando catálogo...</div>;
  if (error) return <div>Error al cargar el catálogo</div>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map((product) => (
        <div key={product.id} className="border rounded-lg p-4 shadow-md">
          <img src={product.image} alt={product.name} className="w-full h-48 object-cover mb-4 rounded" />
          <h3 className="text-lg font-semibold">{product.name}</h3>
          <p className="text-green-600 font-bold">{product.price}</p>
          <button
            onClick={() => handleWhatsAppOrder(product)}
            className="mt-4 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition-colors"
          >
            Solicitar por WhatsApp
          </button>
        </div>
      ))}
    </div>
  );
};

export default Catalog;