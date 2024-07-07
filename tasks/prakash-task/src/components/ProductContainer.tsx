// src/components/ProductContainer.tsx

import React from 'react';

interface Product {
   id: number;
   name: string;
   price: string;
   imageUrl: string;
}

const products = JSON.parse(localStorage.getItem('products') || '[]')

// { id: 1, name: 'Product 1', price: '$10', imageUrl: 'https://via.placeholder.com/150' },

export const ProductContainer: React.FC = () => {
   return (
      <div className="flex justify-center overflow-x-auto py-4 px-2">
         {products.length === 0 && <p>No products found.</p>}
         {products.map((product: Product) => (
            <div key={product.id} className="min-w-[150px] mr-4 flex-shrink-0 border p-4 rounded-lg shadow-lg bg-white">
               <img src={product.imageUrl} alt={product.name} className="w-full h-40 object-cover rounded-lg mb-2" />
               <h3 className="text-lg font-semibold">{product.name}</h3>
               <p className="text-gray-600">₹{product.price}</p>
            </div>
         ))}
      </div>
   );
};


