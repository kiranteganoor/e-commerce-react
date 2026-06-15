import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Navbar2 from "../components/Navbar2";
import axios from "axios";

const UserDashboard = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState({});
  const [products, setProducts] = useState([]);

  const loggedInID = localStorage.getItem("id");

  function logout() {
    localStorage.clear();
    navigate("/userlogin");
    toast.success("Logout Done...");
  }

  useEffect(() => {
    axios
      .get(`http://localhost:3000/users/${loggedInID}`)
      .then((res) => setUser(res.data))
      .catch((err) => console.log(err));
  }, [loggedInID]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/products")
      .then((res) => setProducts(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <style>{`
      
      *{
        margin:0;
        padding:0;
        box-sizing:border-box;
        font-family:'Poppins',sans-serif;
      }

      body{
        background:#f8fafc;
      }

      .dashboard{
        min-height:100vh;
        background:#f8fafc;
        padding:30px;
      }

      /* Header */

      .welcome-title{
        text-align:center;
        color:#0f172a;
        margin-bottom:25px;
        font-size:2.7rem;
        font-weight:700;
        animation:fadeDown .8s ease;
      }

      /* Profile Section */

      .profile-card{
        width:85%;
        margin:0 auto 40px auto;

        background:rgba(255,255,255,0.7);
        backdrop-filter:blur(20px);
        -webkit-backdrop-filter:blur(20px);

        border-radius:25px;
        padding:30px;

        border:1px solid rgba(255,255,255,0.3);

        box-shadow:
        0 10px 30px rgba(0,0,0,.08);

        text-align:center;

        animation:fadeUp 1s ease;
      }

      .profile-img{
        width:180px;
        height:180px;

        object-fit:cover;
        border-radius:50%;

        border:5px solid white;

        box-shadow:
        0 10px 30px rgba(0,0,0,.15);

        transition:.5s;

        animation:floatImage 4s ease-in-out infinite;
      }

      .profile-img:hover{
        transform:scale(1.08);
      }

      .username{
        margin-top:20px;
        color:#0f172a;
        font-size:2rem;
      }

      .logout-btn{
        border:none;
        outline:none;

        padding:12px 28px;

        border-radius:30px;

        background:linear-gradient(
          135deg,
          #ef4444,
          #dc2626
        );

        color:white;
        font-size:15px;
        font-weight:600;

        cursor:pointer;

        transition:.4s;
      }

      .logout-btn:hover{
        transform:translateY(-4px);

        box-shadow:
        0 10px 25px rgba(239,68,68,.3);
      }

      /* Search */

      .search-box{
        display:flex;
        justify-content:center;
        align-items:center;
        gap:15px;

        margin:30px 0;
      }

      .search-input{
        width:400px;
        padding:14px 20px;

        border:none;
        outline:none;

        border-radius:30px;

        background:white;

        box-shadow:
        0 5px 20px rgba(0,0,0,.08);

        font-size:15px;
      }

      .search-btn{
        border:none;
        padding:14px 25px;

        border-radius:30px;

        background:linear-gradient(
          135deg,
          #2563eb,
          #3b82f6
        );

        color:white;
        cursor:pointer;

        transition:.4s;
      }

      .search-btn:hover{
        transform:scale(1.05);
      }

      /* Categories */

      .category-section{
        display:flex;
        justify-content:center;
        flex-wrap:wrap;

        gap:15px;

        margin:35px 0;
      }

      .category-btn{
        border:none;

        padding:12px 24px;

        border-radius:30px;

        background:white;

        color:#334155;
        font-weight:600;

        cursor:pointer;

        box-shadow:
        0 5px 15px rgba(0,0,0,.08);

        transition:.4s;
      }

      .category-btn:hover{
        background:#2563eb;
        color:white;

        transform:
        translateY(-5px)
        scale(1.05);
      }

      /* Products */

      .products-title{
        text-align:center;
        color:#0f172a;

        margin:20px 0 35px;

        font-size:2.3rem;
      }

      .products-container{
        display:grid;

        grid-template-columns:
        repeat(auto-fit,minmax(280px,1fr));

        gap:25px;
      }

      .product-card{
        background:white;

        border-radius:20px;

        padding:18px;

        text-align:center;

        box-shadow:
        0 10px 25px rgba(0,0,0,.08);

        transition:.5s;

        overflow:hidden;
      }

      .product-card:hover{
        transform:
        translateY(-10px);

        box-shadow:
        0 20px 40px rgba(37,99,235,.15);
      }

  .product-image{
  width:100%;
  height:220px;
  object-fit:contain;
  background:#fff;
}

      .product-card:hover .product-image{
        transform:scale(1.05);
      }

      .product-name{
        margin:18px 0;
        color:#0f172a;
      }

      .view-btn{
        border:none;

        padding:12px 22px;

        border-radius:25px;

        background:linear-gradient(
          135deg,
          #06b6d4,
          #2563eb
        );

        color:white;

        cursor:pointer;

        transition:.4s;
      }

      .view-btn:hover{
        transform:scale(1.08);
      }

      /* Animations */

      @keyframes fadeDown{
        from{
          opacity:0;
          transform:translateY(-40px);
        }
        to{
          opacity:1;
          transform:translateY(0);
        }
      }

      @keyframes fadeUp{
        from{
          opacity:0;
          transform:translateY(40px);
        }
        to{
          opacity:1;
          transform:translateY(0);
        }
      }

      @keyframes floatImage{
        0%{
          transform:translateY(0);
        }
        50%{
          transform:translateY(-10px);
        }
        100%{
          transform:translateY(0);
        }
      }

      /* Responsive */

      @media(max-width:768px){

        .dashboard{
          padding:15px;
        }

        .profile-card{
          width:100%;
        }

        .welcome-title{
          font-size:2rem;
        }

        .username{
          font-size:1.5rem;
        }

        .profile-img{
          width:140px;
          height:140px;
        }

        .search-box{
          flex-direction:column;
        }

        .search-input{
          width:100%;
        }
      }

      `}</style>

      <Navbar2 />

      <div className="dashboard">
        <h1 className="welcome-title">Welcome to Dashboard</h1>

        <div className="profile-card">
          <button className="logout-btn" onClick={logout}>
            Logout
          </button>

          <br />
          <br />

          <img
            src={user.profilePic}
            alt="Profile"
            className="profile-img"
          />

          <h1 className="username">
            Welcome, {user.name}
          </h1>
        </div>

        <form className="search-box">
          <input
            type="text"
            placeholder="Search Products..."
            className="search-input"
            required
          />

          <button className="search-btn">
            Search
          </button>
        </form>

        <div className="category-section">
          <button className="category-btn">
            Electronics
          </button>

          <button className="category-btn">
            Fashion
          </button>

          <button className="category-btn">
            Mobiles
          </button>

          <button className="category-btn">
            Laptops
          </button>
        </div>

        <h1 className="products-title">
          Products
        </h1>

        <div className="products-container">
          {products.map((x) => (
            <div
              className="product-card"
              key={x.id}
            >
              <img
                src={x.image}
                alt={x.name}
                className="product-image"
              />

              <h3 className="product-name">
                {x.name}
              </h3>

              <button className="view-btn" onClick={()=>{
                navigate(`/productdetail/${x.id}`)
              }}>
                View Product
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default UserDashboard;