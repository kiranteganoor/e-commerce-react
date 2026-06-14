import React from "react";
import { useNavigate } from "react-router-dom";
import {toast} from "react-toastify"


 const AdminLogin = () => {
  const [email,setEmail] = React.useState("");
  const [password,setPassword] = React.useState("");  

  const navigate = useNavigate();

  function adminLogin(e){
    e.preventDefault();
    if(email==="admin@gmail.com" && password==="admin123"){
        toast.success("Login Successfully")
        navigate("/admindashboard")
    }else{
        toast.error("Invalid Credentials")
    }
  }
  return (
   <>
   <center> <h1>Admin Login</h1>
   <form action="" onSubmit={adminLogin}>
    <input type="text" placeholder="Enter Email" required value={email} onChange={(e)=>setEmail(e.target.value)}/><br/><br/>
    <input type="text" placeholder="Enter Password" required value={password} onChange={(e)=>setPassword(e.target.value)}/><br/><br/>
    <button type="submit">Login</button>
    <br/>
    </form>
    </center>
   </>
  )
}

export default AdminLogin;