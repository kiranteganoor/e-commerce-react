import React from "react";
import { useNavigate, Link } from "react-router-dom";
import Navbar from "../components/Navbar";


const Homepage = () =>{
    const navigate = useNavigate();

    return(
        <>
        <Navbar/>
        <div className="ad">
            <img src="https://www.apple.com/newsroom/images/product/iphone/standard/Apple_iphone_11-rosette-family-lineup-091019_big.jpg.large.jpg" alt="" />
            <img src="https://mygemma.com/cdn/shop/articles/NEW-WPD-BLOG-Top-Image-10-1_e1e49516-dea0-435b-b70f-79887759c40f.png?v=1743699120" alt="" />
            <img src="https://cdn.dotpe.in/longtail/item_thumbnails/7465514/0tZTkgHI-800-800.webp" alt="" />
            <img src="https://5.imimg.com/data5/WP/LH/MY-11392161/branded-formal-shirts.jpg" alt="" />
            <img src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/B00-Surface-Laptop-13-inch-1Ed-Rational-Ocean-Front?wid=1200&hei=900&qlt=90&bgc=F2F2F2F2&fmt=jpg" alt="" />
            <img src="https://t4.ftcdn.net/jpg/05/36/96/93/360_F_536969308_ISujy0XpgP9IjFUHZK2DcBPuPzcAi6lO.jpg" alt="" />     
        </div>
        <div className="middle">
            <center>
            <h1><p>Welcome to E-Commerce Website</p></h1><br/>
            <button id="btn-middle" onClick={() => navigate('/usersignup')}>Shop Now</button>
            </center>
        </div>
          <center><h1>Products</h1></center>

      <div className="products">
        <img src="https://static.vecteezy.com/system/resources/thumbnails/002/086/009/small/headphones-on-white-background-free-photo.jpg" alt="" />
        <img src="https://amateurphotographer.com/wp-content/uploads/sites/7/2020/11/eos-80d.jpg" alt="" />
        <img src="https://wiscon.in/cdn/shop/files/1_d5fe0789-ac39-49ca-bbae-205b0495ee7f_533x.jpg?v=1779530992" alt="" />
      </div>


           <div className="products">
        <img src="https://cdn.fynd.com/v2/falling-surf-7c8bb8/fyprod/wrkr/products/pictures/item/free/original/000000410540561002/TgENrfRWYYp-000000410540561002_8.jpg" alt="" />
        <img src="https://png.pngtree.com/png-clipart/20240608/original/pngtree-3d-photo-of-colorful-toys-for-children-on-transparent-background-png-image_15280851.png" alt="" />
        <img src="https://focally.in/wp-content/uploads/2024/01/Spectunes_blackwayfraeresamrtglass1.png" alt="" />
      </div>

        <footer className="homepage-footer">
          <div className="footer-content">
            <div>
              <h2>ShopEase</h2>
              <p>Fast shopping, easy checkout, and secure payment.</p>
            </div>

            <div className="footer-links">
              <Link to="/userlogin">Login</Link>
              <Link to="/usersignup">Sign Up</Link>
              <Link to="/usersignup">Dashboard</Link>
            </div>
          </div>
          <p className="footer-copy">© 2026 ShopEase. All rights reserved.</p>
        </footer>
        </>
    )
}
export default Homepage;