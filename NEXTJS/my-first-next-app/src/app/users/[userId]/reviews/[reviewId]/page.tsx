import React from 'react'
import { Metadata } from 'next'

interface props {
   params: {
      userId: string,
      reviewId: string
   }
}

/**
 * This function generates the metadata for the page. Metadata is used by Next.js
 * to provide the title, description, and other information to the browser.
 *
 * The function takes an object as a parameter, which contains the parameters
 * for the page. In this case, the parameters are the userId and reviewId.
 *
 * The function returns an object that contains the title of the page. The title
 * is a string that is used by the browser to display the title of the page in
 * the tab and in the search engines.
 *
 * @param {props} params - An object that contains the parameters for the page.
 * @return {Metadata} An object that contains the title of the page.
 */
export const generateMetadata = ({ params }: props): Metadata => {
   /**
    * The title of the page. This is a string that is used by the browser to
    * display the title of the page in the tab and in the search engines.
    *
    * @type {string}
    */
   return {
      title: `User ${params.userId} Review ${params.reviewId}`
   }
}

export default function Review({ params }: {
   params: {
      userId: string,
      reviewId: string
   }
}) {
   return (
      <div>User {params.userId} Review {params.reviewId}</div>
   )
}
