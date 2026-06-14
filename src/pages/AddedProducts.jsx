import React,{useEffect,useState} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddedProducts = () =>{
    const [products,setProducts]= useState([])
    let navigate=useNavigate();
    useEffect(()=>{
        axios.get("http://localhost:3000/products")
        .then((x)=>setProducts(x.data))
        .catch(err=>console.log(err))
    },[])
    return (
        <>
        <button onClick={()=> navigate('/admindashboard')}>DashBoard</button>
        <center><h1>Products List</h1></center>
        {products.map((x)=>{
            return <div>
                <img src={x.image} height={"200px"} alt="" />
            </div>
        })}
        </>
    )
}
export default AddedProducts;