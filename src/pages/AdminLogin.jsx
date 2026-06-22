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
    <main className="admin-login-page">
      <div className="admin-login-card">
        <h1>Admin Login</h1>
        <form className="admin-login-form" onSubmit={adminLogin}>
          <input
            type="email"
            placeholder="Enter Email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Enter Password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit">Login</button>
        </form>
      </div>
    </main>
   </>
  )
}

export default AdminLogin;