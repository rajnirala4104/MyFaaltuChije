// components/Spinner.tsx
import React from 'react';

export const Spinner: React.FC = () => {
   return (
      <div className="flex justify-center items-center w-full h-screen">
         <div className="w-16 h-16 border-4 border-blue-500 border-dotted rounded-full animate-spin"></div>
      </div>
   );
};


