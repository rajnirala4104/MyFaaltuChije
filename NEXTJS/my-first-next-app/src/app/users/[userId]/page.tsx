import React from 'react'

interface params {
   params: {
      userId: string
   }
}
export default function SingleUser(props: params) {
   return (
      <div>SingleUser {props.params.userId}</div>
   )
}
