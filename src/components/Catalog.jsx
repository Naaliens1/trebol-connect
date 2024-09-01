import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { Search } from 'lucide-react';

const fetchCatalog = async () => {
  // In a real scenario, you would integrate with the WhatsApp Business API
  // For now, we'll use a simulated catalog
  return [
    { id: 1, name: 'Libro 1', price: '$10.99', image: 'https://via.placeholder.com/150', category: 'Ficción' },
    { id: 2, name: 'Libro 2', price: '$12.99', image: 'https://via.placeholder.com/150', category: 'No Ficción' },
    { id: 3, name: 'Libro 3', price: '$9.99', image: 'https://via.placeholder.com/150', category: 'Infantil' },
    // Add more products as needed
  ];
};

const Catalog = () => {
  const { data: products, isLoading, error } = useQuery({
    queryKey: ['catalog'],
    queryFn: fetchCatalog,
  });

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  const handleWhatsAppOrder = (product) => {
    const message = encodeURIComponent(`Hola, estoy interesado en solicitar el siguiente producto:\n- Producto: ${product.name}\n- Precio: ${product.price}\nPor favor, envíenme más información. Gracias.`);
    window.open(`https://wa.me/56978784632?text=${message}`, '_blank');
  };

  const filteredProducts = products?.filter(product => 
    product.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (selectedCategory === '' || product.category === selectedCategory)
  );

  if (isLoading) return <div className="text-center py-8">Cargando catálogo...</div>;
  if (error) return <div className="text-center py-8 text-red-500">Error al cargar el catálogo</div>;

  return (
    <section id="catalog" className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center text-purple-800">Nuestro Catálogo</h2>
        <div className="mb-8 flex flex-col md:flex-row justify-between items-center">
          <div className="relative mb-4 md:mb-0">
            <input
              type="text"
              placeholder="Buscar productos..."
              className="pl-10 pr-4 py-2 border border-purple-300 rounded-full focus:outline-none focus:ring-2 focus:ring-purple-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-purple-400" size={20} />
          </div>
          <select
            className="px-4 py-2 border border-purple-300 rounded-full focus:outline-none focus:ring-2 focus:ring-purple-500"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            <option value="">Todas las categorías</option>
            <option value="Ficción">Ficción</option>
            <option value="No Ficción">No Ficción</option>
            <option value="Infantil">Infantil</option>
          </select>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <div key={product.id} className="border rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
              <img src={product.image} alt={product.name} className="w-full h-48 object-cover mb-4 rounded" />
              <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
              <p className="text-purple-600 font-bold mb-2">{product.price}</p>
              <p className="text-gray-600 mb-4">{product.category}</p>
              <button
                onClick={() => handleWhatsAppOrder(product)}
                className="w-full bg-purple-500 text-white px-4 py-2 rounded-full hover:bg-purple-600 transition-colors"
              >
                Solicitar por WhatsApp
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Catalog;
