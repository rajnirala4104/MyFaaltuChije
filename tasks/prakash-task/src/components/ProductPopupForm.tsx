// src/components/ProductPopupForm.tsx

import React, { useState, useEffect, useContext } from 'react';
import { ProductPopupFormContext } from '../contaxt';

interface Product {
   id: number;
   name: string;
   price: string;
   imageUrl: string;
}


export const ProductPopupForm: React.FC = () => {
   const [name, setName] = useState('');
   const [price, setPrice] = useState('');
   const [imageUrl, setImageUrl] = useState('');

   const { productPopupFormOnOff, setProductPopupFormOnOff } = useContext(ProductPopupFormContext)

   const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();

      if (!name || !price || !imageUrl) {
         alert("Missing required fields: name, price, imageUrl");
         return;
      }

      const newProduct: Product = {
         id: Date.now(), // Use timestamp as a unique ID
         name,
         price,
         imageUrl,
      };

      try {
         const existingProducts = JSON.parse(localStorage.getItem('products') || '[]');
         const existingProduct = existingProducts.find((p: Product) => p.name === newProduct.name || p.imageUrl === newProduct.imageUrl);
         if (existingProduct) {
            alert("Product already exists, please choose a different name or image URL.");
            return;
         }
         localStorage.setItem('products', JSON.stringify([newProduct, ...existingProducts]));
      } catch (error) {
         console.error("Error parsing products from localStorage:", error);
         return;
      }

      window.location.reload();
   };

   return (
      <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center">
         <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
            <h2 className="text-2xl font-bold mb-4">Add New Product</h2>
            <form onSubmit={handleSubmit}>
               <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                     Product Name
                  </label>
                  <input
                     type="text"
                     id="name"
                     value={name}
                     onChange={(e) => setName(e.target.value)}
                     className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                     required
                  />
               </div>
               <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="price">
                     Price
                  </label>
                  <input
                     type="text"
                     id="price"
                     value={price}
                     onChange={(e) => setPrice(e.target.value)}
                     className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                     required
                  />
               </div>
               <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="imageUrl">
                     Image URL
                  </label>
                  <input
                     type="text"
                     id="imageUrl"
                     value={imageUrl}
                     onChange={(e) => setImageUrl(e.target.value)}
                     className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                     required
                  />
               </div>
               <div className="flex items-center justify-between">
                  <button
                     type="submit"
                     className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  >
                     Save
                  </button>
                  <button
                     type="button"
                     onClick={() => setProductPopupFormOnOff(!productPopupFormOnOff)}
                     className="text-red-500 hover:text-red-700"
                  >
                     Cancel
                  </button>
               </div>
            </form>
         </div>
      </div>
   );
};
