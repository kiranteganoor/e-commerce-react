import React,{useState} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
    




 const UserLogin = () =>{
    const[email,setEmail]=useState("");
    const[password,setPassword]=useState("");

    const navigate = useNavigate()

    function login (e){
        e.preventDefault();
        axios.get("http://localhost:3000/users")
        .then(x=>{
            let users =x.data
            let result =users.find((y)=>{
                return (y.email===email && y.password===password)
            })
            if (result){
                toast.success("Login Success")
                setEmail("")
                setPassword("")
                localStorage.setItem("id", result.id)
                localStorage.setItem("email", result.email)
                localStorage.setItem("name", result.name)
                localStorage.setItem("profilePic", result.profilePic || "")
                localStorage.setItem("loggedIn", true)
                
                navigate("/userdashboard")
            }else{
                toast.error("Invalid Credentials")
            }
        })

    }

   

   

    return (
        <div className="login-page">
            <div className="login-card">
                <h1>User Login</h1>
                <form className="login-form" onSubmit={login}>
                    <label htmlFor="user-email">Email</label>
                    <input
                        id="user-email"
                        name="email"
                        type="email"
                        placeholder="Enter your email"
                        required
                        autoComplete="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <label htmlFor="user-password">Password</label>
                    <input
                        id="user-password"
                        name="password"
                        type="password"
                        placeholder="Enter your password"
                        required
                        autoComplete="current-password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button type="submit">Login</button>
                </form>
                <p className="login-link">
                    Don't have an account? <a href="/usersignup">Signup</a>
                </p>
            </div>
        </div>
    )
 }
 export default UserLogin;