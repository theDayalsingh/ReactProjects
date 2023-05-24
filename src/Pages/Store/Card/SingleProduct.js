import React from 'react'
import { useParams } from 'react-router-dom'

const SingleProduct = () => {
    const params=useParams()
  return (
    <>
    <div>SingleProduct</div>
    <div>{params.productId}</div>
    </>
  )
}

export default SingleProduct