import React from 'react';
import Header from '../components/Header';
import Catalog from '../components/Catalog';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white text-green-800">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8 text-center">Bienvenidos a Trébol de Cuatro Hojas</h1>
        <p className="text-xl mb-8 text-center">Descubre nuestra selección de libros y productos naturales</p>
        <Catalog />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
