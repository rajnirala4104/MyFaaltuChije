import React from 'react'

// This is the Docs component. It is a React functional component that receives
// an object as a prop with a property named "params". The "params" property is
// an object that contains an array of strings named "endpoints".
export default function Docs({ params }: { params: { endpoints: string[] } }) {
   return (
      <div>
         {params.endpoints?.length === 0 || params.endpoints === undefined ? (
            <div className='flex justify-center items-center h-[90vh]'>
               {/* Display a message indicating that the user is viewing the documentation for all features */}
               docs
            </div>
         ) : (
            <div className='flex justify-center items-center h-[90vh]'>
               {/* Display a message indicating which features are being viewed */}
               docs / {params.endpoints?.join(' / ')}
            </div>
         )}
      </div>
   )
}
