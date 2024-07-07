// src/components/Navbar.tsx

import React, { useState } from 'react';

export const Navbar: React.FC = () => {
   const [searchQuery, setSearchQuery] = useState('');

   const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setSearchQuery(e.target.value);
   };

   const handleSearchSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      // Implement search functionality here
      console.log('Searching for:', searchQuery);
   };

   return (
      <nav className="bg-slate-800 shadow-md p-4">
         <div className="container mx-auto flex items-center justify-between">
            <div className="text-xl font-bold text-white">!product.com</div>
            <form onSubmit={handleSearchSubmit} className="flex w-full max-w-lg mx-auto">
               <input
                  type="text"
                  value={searchQuery}
                  onChange={handleSearchChange}
                  className="w-full p-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Search..."
               />
               <button
                  type="submit"
                  className="bg-blue-500 hover:bg-blue-700 text-white p-2 rounded-r-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
               >
                  Search
               </button>
            </form>
         </div>
      </nav>
   );
};

