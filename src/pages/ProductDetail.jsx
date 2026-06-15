import React from 'react'
import Navbar2 from '../components/Navbar2'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'
import { useNavigate, useParams } from 'react-router-dom'
const ProductDetail = () => {
  let {id} = useParams()
  const [product, setProduct] = useState({})
  useEffect(()=>{
    axios.get(`http://localhost:3000/products/${id}`)
    .then(x=>{setProduct(x.data)})
    .catch(err=>console.log(err))
  },[])
  return (
    <>
      <Navbar2/>
      <center><h1>{product.name}</h1></center>
      <img height={"200px"} src={product.image} alt="" />
      <h2>{product.description}</h2>
      <h2>{product.price}</h2>
      <button>Order</button>
    </>
  )
}

export default ProductDetail