import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
   title: {
      absolute: "About Page",
   }
}

export default function AboutPage() {
   return (
      <section className="w-full h-full flex justify-center items-center">
         <div className="flex justify-center items-center">
            <span>
               About Page
            </span>
         </div>
      </section>
   )
}
