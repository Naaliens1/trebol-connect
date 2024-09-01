import React from 'react';
import { ExternalLink } from 'lucide-react';

const products = [
  { id: 1, name: 'Libro "Cómo Meditar"', price: '$15.000' },
  { id: 2, name: 'Aceite Esencial de Lavanda', price: '$8.000' },
  { id: 3, name: 'Set de Velas Aromáticas', price: '$12.000' },
  { id: 4, name: 'Incienso de Sándalo', price: '$5.000' },
  { id: 5, name: 'Difusor de Aromas', price: '$20.000' },
  { id: 6, name: 'Libro "Mindfulness Diario"', price: '$18.000' },
  { id: 7, name: 'Libro "El Poder del Ahora"', price: '$15.000' },
  { id: 8, name: 'Libro "El Monje que Vendió su Ferrari"', price: '$15.000' },
  { id: 9, name: 'Libro "El Alquimista"', price: '$15.000' },
  { id: 10, name: 'Libro "Muchas Vidas, Muchos Maestros"', price: '$15.000' },
  { id: 11, name: 'Libro "El Caballero de la Armadura Oxidada"', price: '$15.000' },
  { id: 12, name: 'Libro "Tus Zonas Erróneas"', price: '$15.000' },
  { id: 13, name: 'Libro "La Vaca"', price: '$15.000' },
  { id: 14, name: 'Libro "Padre Rico, Padre Pobre"', price: '$15.000' },
  { id: 15, name: 'Libro "Los Cuatro Acuerdos"', price: '$15.000' },
  { id: 16, name: 'Libro "El Secreto"', price: '$15.000' },
  { id: 17, name: 'Libro "Inteligencia Emocional"', price: '$15.000' },
  { id: 18, name: 'Libro "Piense y Hágase Rico"', price: '$15.000' },
  { id: 19, name: 'Libro "El Hombre en Busca de Sentido"', price: '$15.000' },
  { id: 20, name: 'Libro "El Poder de la Intención"', price: '$15.000' },
  { id: 21, name: 'Libro "El Arte de Amar"', price: '$15.000' },
  { id: 22, name: 'Libro "La Magia del Orden"', price: '$15.000' },
  { id: 23, name: 'Libro "Usted Puede Sanar su Vida"', price: '$15.000' },
  { id: 24, name: 'Libro "El Camino del Artista"', price: '$15.000' },
  { id: 25, name: 'Libro "El Elemento"', price: '$15.000' },
  { id: 26, name: 'Libro "La Buena Suerte"', price: '$15.000' },
  { id: 27, name: 'Libro "El Rinoceronte"', price: '$15.000' },
  { id: 28, name: 'Libro "Sé Imparable"', price: '$15.000' },
  { id: 29, name: 'Libro "Cree en Ti"', price: '$15.000' },
  { id: 30, name: 'Libro "Inquebrantables"', price: '$15.000' },
  { id: 31, name: 'Libro "Desata tu Poder"', price: '$15.000' },
  { id: 32, name: 'Libro "Hábitos Atómicos"', price: '$15.000' },
  { id: 33, name: 'Libro "El Sutil Arte de que te Importe un Carajo"', price: '$15.000' },
  { id: 34, name: 'Libro "El Poder del Metabolismo"', price: '$15.000' },
  { id: 35, name: 'Libro "Comer para Sanar"', price: '$15.000' },
  { id: 36, name: 'Libro "Deja de ser tú"', price: '$15.000' },
  { id: 37, name: 'Libro "El Código de la Emoción"', price: '$15.000' },
  { id: 38, name: 'Libro "La Biología de la Creencia"', price: '$15.000' },
  { id: 39, name: 'Libro "Sanación Pránica"', price: '$15.000' },
  { id: 40, name: 'Libro "Cómo Ganar Amigos e Influir sobre las Personas"', price: '$15.000' },
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
