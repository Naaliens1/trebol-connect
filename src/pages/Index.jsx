import React from 'react';
import Header from '../components/Header';
import Catalog from '../components/Catalog';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white text-purple-800">
      <Header />
      <main className="flex-grow">
        <section id="home" className="bg-purple-100 py-20 mt-16">
          <div className="container mx-auto px-4">
            <h1 className="text-5xl font-bold mb-8 text-center">Bienvenidos a Trébol de Cuatro Hojas</h1>
            <p className="text-xl mb-8 text-center max-w-2xl mx-auto">Descubre nuestra cuidadosa selección de libros, pensados para enriquecer tu mente y nutrir tu espíritu.</p>
            <div className="text-center">
              <a href="#catalog" className="bg-purple-500 text-white px-8 py-3 rounded-full hover:bg-purple-600 transition-colors inline-block">Explorar Catálogo</a>
            </div>
          </div>
        </section>
        <Catalog />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
