import React from 'react'
import { useState,useEffect } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
const UserLogin = () => {

  const [email,setEmail] = useState("")
  const [password, setPassword] = useState("")

  let navigate = useNavigate()
  function login(e){
  e.preventDefault()
  axios.get("http://localhost:3000/users")
    .then(x=>{
      let users = x.data
      let result = users.find((y)=>{
          return (y.email===email && y.password===password)
      }) 
      if(result){
          toast.success("Login success")
          setEmail("")
          setPassword("")
          localStorage.setItem("id",result.id)
          localStorage.setItem("email",result.email)
          localStorage.setItem("loggedIn",true)
          navigate("/userdashboard")
      }else{
        toast.error("Invalid credentials")
      }
    })
}
  return (
    <>
      <center><h1>Login Page</h1></center>
      <center>
        <form onSubmit={login}>
          <input type="text" placeholder='Enter Email' required value={email} onChange={(e)=>{setEmail(e.target.value)}} /> <br />
          <input type="text" placeholder='Enter password' required value={password} onChange={(e)=>setPassword(e.target.value)} /> <br />
          <button>Login</button>
        </form>
      </center>
    </>
  )
}

export default UserLogin