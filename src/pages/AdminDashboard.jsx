import React,{useState, useEffect,useRef} from 'react'
import { toast } from 'react-toastify'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'


const AdminDashboard = () => {
  const [id,setId] = useState("")
  const [name,setName] = useState("")
  const [category,setCategory] = useState("")
  const [price, setPrice] = useState("")
  const [description, setDescription] = useState("")
  const [image,setImage] = useState("")
  const [ratings, setRatings] = useState("")
  const inputRef = useRef(null)

  let navigate = useNavigate()

  function handleImage(e){
    let file = e.target.files[0]
    if(file.size>100000){
      toast.error("Choose file size less than 100KB")
      return;
    }
    const reader = new FileReader()

    reader.onloadend = ()=>{
      setImage(reader.result)
    }

    reader.readAsDataURL(file)
  }

  async function addProduct(e){
    e.preventDefault()
    if (!image) {
      toast.error("Please select an image")
      return
    }

    const product = {id, name, price, category, description, image, ratings}
    try {
      await axios.post("http://localhost:3000/products", product)
      toast.success("Product Added")
      setId("")
      setName("")
      setPrice("")
      setCategory("")
      setDescription("")
      setImage("")
      setRatings("")
      if (inputRef.current) inputRef.current.value = ""
    } catch (err) {
      console.error("Add product failed", err)
      toast.error(err?.response?.data || err?.message || "Failed to Add")
    }
  }
  return (
    <>
    <div style={{background:"linear-gradient(rgb(108, 124, 120))", height:"75px"}}>
        <Link to={"/"}><h2>Back to Home page</h2></Link>
    </div>
    <button onClick={()=>{navigate("/addedproducts")}}>View Added Products</button>
      <center><h1>Welcome to Dashboard</h1></center>

      <center>Add Products</center>
      <center>
        <form onSubmit={addProduct}>
          <input 
          type="text" 
          placeholder='Enter Product ID' 
          required
          value={id}
          onChange={(e)=>{setId(e.target.value)}}
          /> <br />

          <input 
          type="text" 
          placeholder='Enter Product name' 
          required 
          value={name}
          onChange={(e)=>{setName(e.target.value)}}
          /> <br />

          <input 
          type="text" 
          placeholder='Enter category' 
          required 
          value={category}
          onChange={(e)=>{setCategory(e.target.value)}}
          /> <br />
          <input 
          type="text" 
          value={price}
          onChange={(e)=>{setPrice(e.target.value)}}
          placeholder='Enter Price' 
          required /> <br />

          <textarea 
          placeholder='Enter Description'
          required
          value={description}
          onChange={(e)=>{setDescription(e.target.value)}}
          ></textarea> <br />

          <input 
          type="file" 
          required 
          accept="image/*"
          onChange={handleImage}
          ref={inputRef}
          /> <br />

          <input 
          type="text" 
          placeholder='Enter rating' 
          required
          value={ratings}
          onChange={(e)=>setRatings(e.target.value)}
          /> <br />
          <button>Add</button>
        </form>
      </center>
    </>
  )
}

export default AdminDashboard