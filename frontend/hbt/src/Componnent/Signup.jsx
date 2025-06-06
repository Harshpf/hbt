import React, { useState } from "react";
import { signupUser } from "./api";
import './Signup.css';
import myimg from '../assets/hb pic.jpg';
import {useNavigate} from 'react-router-dom';

const Signup = () => {
  const [form, setForm] = useState({ name: "",  email: "", password: "" });
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();


  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await signupUser( form.name, form.email, form.password);
      setMsg(res.data.message || "Signup successful");
      navigate('/login');
    } catch (err) {
      setMsg(err.response?.data?.message || "Signup failed");
    }
  };

  return (
    <div className="main">

      <div className="img-container">
        <img src={myimg} alt="" className="img"/>
      </div>

    <form onSubmit={handleSubmit} className="form-container">
      <h2 className="head-container"> Signup </h2>
      <input name="name" placeholder="username" onChange={handleChange} />
      <input name="email" placeholder="Email" onChange={handleChange} />
      <input name="password" type="password" placeholder="Password" onChange={handleChange} />
      <button type="submit">Sign Up</button>
      <p>{msg}</p>
    </form>

      

    </div>

    
  );
};

export default Signup;
