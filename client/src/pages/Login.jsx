import React, { useState } from "react";
import image from "../assets/BookBackground.jpeg";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/ContextProvider";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
const Login = () => {
  const myImage = {
    backgroundImage: `url(${image})`,
    // backgroundSize:"cover",
    height: "100vh",
  };
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const {login} = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:2000/api/auth/login",
        {email, password }
      );
      if(response.data.success){
        toast.success("login successfully");
        login(response.data.user);
        localStorage.setItem("token",response.data.token);
     navigate("/home");
      }
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div
      className="flex justify-center items-center min-h-screen bg-gray-100"
      style={myImage}
    >
      <div className="border shadow p-6 w-80 bg-white">
        <h2 className="text-2xl font-bold mb-4">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700">
              Email
            </label>
            <input
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter Email"
              required
              className="w-full px-3 py-2 border"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700">
              Password
            </label>
            <input
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              placeholder="*******"
              required
              className="w-full px-3 py-2 border"
            />
          </div>
          <div className="mb-4">
            <button
              type="submit"
              className="w-full bg-teal-800 text-white py-2"
            >
              Login
            </button>

            <p className="text-center">
              Don't have an Account ? <Link to="/register">Register</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};








export default Login;
