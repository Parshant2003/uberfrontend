import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaGoogle, FaApple } from "react-icons/fa";

const CaptainLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [captainData, setCaptainData] = useState({});

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);
    setCaptainData({ email: email, password: password });
    console.log(captainData);
    setEmail("");
    setPassword("");
  };

  return (
    <>
      <header className="bg-white text-black py-4 px-6 flex justify-between items-center shadow-md">
        <div className="flex items-center">
          <a href="/" className="text-4xl font-bold mr-6">
            Uber
          </a>
        </div>
      </header>
      <div className="m-1 flex flex-col items-center justify-center h-screen bg-gray-50">
        <h1 className="text-2xl font-bold mb-4">
          Captain, please sign in
        </h1>

        {/* Form */}
        <form className="flex flex-col items-center" onSubmit={submitHandler}>
          {/* Email Field */}
          <input
            type="text"
            className="w-80 px-4 py-2 border rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter email"
          />

          {/* Password Field */}
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-80 px-4 py-2 border border-gray-300 rounded mb-4"
            placeholder="Enter your password"
          />

          {/* Create Account Link */}
          <div className="flex justify-between w-80">
            <Link to="/captain-register" className="p-2 text-black-500 hover:underline ">
              Create Your New Captain Account
            </Link>
          </div>

          {/* Continue Button */}
          <button
            type="submit"
            className="w-80 bg-black text-white py-2 rounded-md mb-4 hover:bg-gray-800"
          >
            Continue
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center w-80 my-2">
          <hr className="flex-grow border-gray-300" />
          <span className="px-2 text-gray-500 text-sm">or</span>
          <hr className="flex-grow border-gray-300" />
        </div>

        {/* Continue with Google */}
        <button className="flex items-center justify-center w-80 bg-gray-100 text-black py-2 rounded-md mb-4 hover:bg-gray-200">
          <FaGoogle className="mr-2" />
          Continue with Google
        </button>
        <button className="flex items-center justify-center w-80 bg-gray-100 text-black py-2 rounded-md mb-4 hover:bg-gray-200">
          <Link to="/login" className="w-full text-center">
            Sign in as User
          </Link>
        </button>
      </div>
      
    </>
  );
};

export default CaptainLogin;
