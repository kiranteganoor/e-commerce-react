import React from "react";
import { Link } from "react-router-dom";


const Navbar = ()=>{
    return(
        <>
        <div className="nav">
            <div className="left">
                <h2>Logo</h2>
            </div>
            <div className="right">
                <Link to="/adminlogin" style={{textDecoration:"none",color:"white"}}><h2>Admin</h2></Link>
                <Link to="/usersignup" style={{textDecoration:"none",color:"white"}}><h2>User</h2></Link>
            </div>
        </div>
       
        </>
    )
}
export default Navbar;