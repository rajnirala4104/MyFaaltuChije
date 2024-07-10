import React from 'react'

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
