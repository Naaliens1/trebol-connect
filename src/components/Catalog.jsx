import React from 'react';
import { Button } from "@/components/ui/button";
import { ExternalLink } from 'lucide-react';

const Catalog = () => {
  return (
    <section id="catalog" className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center text-purple-800">Nuestro Catálogo en Vivo</h2>
        <p className="text-xl mb-8 text-center max-w-2xl mx-auto">Explora nuestro catálogo de productos en tiempo real.</p>
        <div className="w-full max-w-4xl mx-auto text-center">
          <Button 
            variant="outline" 
            size="lg" 
            className="bg-purple-500 text-white hover:bg-purple-600"
            onClick={() => window.open('https://wa.me/c/56978784632', '_blank')}
          >
            Ver Catálogo <ExternalLink className="ml-2 h-4 w-4" />
          </Button>
          <p className="mt-4 text-sm text-gray-600">
            Al hacer clic, se abrirá el catálogo de WhatsApp en una nueva pestaña.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Catalog;
