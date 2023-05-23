import React from 'react'

const SingleProduct = (product) => {
   
  return (
    <>
    <div className="container my-5 py-3">
    <div className="row">
        <div className="col-md-6 d-flex justify-content-center mx-auto product">
        
            <img src={product.imgURL} alt={product.name}height="400px" />
        </div>
        <div className="col-md-6 d-flex flex-column justify-content-center">
            <h1 className="display-5 fw-bold">{product.name}</h1>
            <hr />
            <h2 className="my-4">${product.price}</h2>
            <p className="lead">{product.quantity}</p>
            <button className="btn btn-outline-primary my-5">cartBtn</button>
        </div>
    </div>
</div>
    </>
  )
}

export default SingleProduct