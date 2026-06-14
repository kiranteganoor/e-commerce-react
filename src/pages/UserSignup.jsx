import React, { useState, useRef } from "react";
import axios from "axios";
import { useNavigate ,Link} from "react-router-dom";
import { toast } from "react-toastify";

const UserSignup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [profilePic, setProfilePic] = useState("");

    const navigate = useNavigate();

  const inputRef = useRef(null);

  function handleImage(e) {
    let file = e.target.files[0];
    

    if (file.size > 100000) {
      toast.error("Choose less than 100kb");
      return;
    }

    const reader = new FileReader();
    reader.onloadend = () => {
      setProfilePic(reader.result);
    };
    reader.readAsDataURL(file);
  }

  function signup(e) {
    e.preventDefault();

    const user = { name, email, phone, password, profilePic };
    axios
      .post("http://localhost:3000/users", user)
      .then(() => {
        toast.success("Signup successful");
        setName("");
        setEmail("");
        setPhone("");
        setPassword("");
        setProfilePic("");
        if (inputRef.current) {
          inputRef.current.value = "";
        }
      })
      .catch(() => toast.error("Signup failed"));
  }

  return (
    <>
      <center>
        <h1>Signup Page</h1>
      
      <form onSubmit={signup}>
        <input
          type="text"
          placeholder="Enter UserName"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <input
          type="email"
          placeholder="Enter Email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <input
          type="tel"
          placeholder="Enter Phone.No"
          required
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <br />
        <input
          type="password"
          placeholder="Enter Password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <input type="file" required onChange={handleImage} ref={inputRef} />
        <br />
        <button>Signup</button>
      </form>
      </center>

      <center>Are you Existing User? <Link to ={"/userlogin"}>Login</Link></center>
    </>
  );
};

export default UserSignup;
