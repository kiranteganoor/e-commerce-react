import React from 'react'
import Navbar2 from '../components/Navbar2'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'
import { useNavigate, useParams } from 'react-router-dom'
import OrderDetail from './Orderdetail'
const ProductDetail = () => {
  let {id} = useParams()
  const [product, setProduct] = useState({})
  const [quantity, setQuantity] = useState(1)
  const [address, setAddress] = useState("")
  let navigate = useNavigate()
  useEffect(()=>{
    axios.get(`http://localhost:3000/products/${id}`)
    .then(x=>{setProduct(x.data)})
    .catch(err=>console.log(err))
  },[])

  function increment(){
    setQuantity(quantity+1)
  }
  function decrement(){
    if(quantity>1){
      setQuantity(quantity-1)
    }
  }

  function placeOrder(e){
    e.preventDefault()
    let orderData = {
      userId:localStorage.getItem("id"),
      productId:product.id,
      productName:product.name,
      productImage:product.image,
      quantity:quantity,
      price:product.price,
      total:quantity*product.price,
      date:new Date().toLocaleDateString(),
      address:address,
      status:"Delivered"
    }
    axios.post("http://localhost:3000/orders",orderData)
    .then(()=>{
      toast.success("Order placed🎉🎉")
      navigate("/userdashboard")
    })
    .catch(err=>toast.error("Failed to place"))
  }
  return (
    <>
      <Navbar2/>
      <center><h1>{product.name}</h1></center>
      <img height={"200px"} src={product.image} alt="" />
      <h2>{product.description}</h2>
      <h2>{product.price}</h2>
      
        <button onClick={decrement}>-</button>
      <h2>{quantity}</h2>
      <button onClick={increment}>+</button>
      

      <form action="" onSubmit={placeOrder}>
        <textarea placeholder='Enter Address' required value={address} onChange={(e)=>setAddress(e.target.value)}></textarea> <br />
        <button onClick={OrderDetail}>Place Order</button>
      </form>

    </>
  )
}

export default ProductDetail