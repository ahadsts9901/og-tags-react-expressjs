import React, { useEffect, useState } from 'react'
import "./Product.css"
import { useParams } from 'react-router-dom'
import { Clipboard } from 'react-bootstrap-icons'

const Product = () => {

  const { id } = useParams()
  useEffect(() => {
    seeProduct(id)
    console.log(product);
  }, [id])

  const [product, setProduct] = useState(null)
  const [isCopy, setIsCopy] = useState("Copy url")

  const seeProduct = async (productId) => {

    fetch(`https://fakestoreapi.com/products/${productId}`)
      .then((res) => res.json())
      .then((json) => setProduct(json));

  }

  const copy = () => {
    window.navigator.clipboard.writeText(window.location.href)
    setIsCopy("Copied")
    setTimeout(() => {
      setIsCopy("Copy url")
    }, [1000])
  }

  return (
    <>
      <div className="padding"></div>
      {
        product ?
            <div className="productCont">
              <img className='productPageImg' src={product?.image} alt="product image" />
              <div className="details">
                <h2>{product?.title}</h2>
                <p>{product?.description}</p>
                <div className="productButtonCont">
                  <h2>{product?.price} $</h2>
                  <button onClick={copy}> <Clipboard /> {isCopy}</button>
                </div>
              </div>
            </div>
          : <span id="loader"></span>
      }
    </>
  )
}

export default Product