import React from "react";
import { Link } from "react-router-dom";

const Navbar2 = () =>{
    return(
        <>
        <div className="nav2">
            <div className="right2">
                <h1>Logo</h1>
            </div>
            <div className="left2">
                <h1>Products</h1>
                <h1>Orders</h1>
                <Link to="/userlogin" style={{textDecoration:"none",color:"white"}}><h1>LogOut</h1></Link>
                
            </div>
        </div>
        
        </>
    )
}
export default Navbar2;