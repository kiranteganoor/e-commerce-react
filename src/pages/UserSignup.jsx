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
    <div className="signup-page">
      <div className="signup-card">
        <h1>Signup Page</h1>
        <form className="signup-form" onSubmit={signup}>
          <input
            type="text"
            placeholder="Enter username"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            placeholder="Enter email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="tel"
            placeholder="Enter phone number"
            required
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <input
            type="password"
            placeholder="Enter password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input type="file" required onChange={handleImage} ref={inputRef} />
          <button type="submit">Signup</button>
        </form>
        <p className="signup-footer">
          Already have an account? <Link to="/userlogin">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default UserSignup;
