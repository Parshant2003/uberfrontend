import React, { useState, useEffect } from "react";
import { FaGoogle, FaApple } from "react-icons/fa";
import { Link } from "react-router-dom";

const UserLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userData, setUserData] = useState({});

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);

    // Set the user data
    setUserData({ email: email, password: password });

    // Reset input fields
    setEmail("");
    setPassword("");
  };

  // useEffect to log the updated userData whenever it changes
  useEffect(() => {
    if (userData.email) {
      console.log("Updated userData:", userData); // Logs when userData is updated
    }
  }, [userData]); // This effect will run whenever userData changes

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
          What's your phone number or email?
        </h1>

        {/* Form */}
        <form className="flex flex-col items-center" onSubmit={submitHandler}>
          {/* Email Field */}
          <input
            type="text"
            className="w-80 px-4 py-2 border rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter phone number or email"
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
          <div className="flex justify-end w-80">
            <Link to="/register" className="p-2 text-black-500 hover:underline">
              Create New Account
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

        {/* Continue with Apple */}
        <button className="flex items-center justify-center w-80 bg-gray-100 text-black py-2 rounded-md mb-4 hover:bg-gray-200">
          <FaApple className="mr-2" />
          Continue with Apple
        </button>
        <button className="flex items-center justify-center w-80 bg-gray-100 text-black py-2 rounded-md mb-4 hover:bg-gray-200">
          <Link to="/captain-login" className="w-full text-center">
            Sign in as Captain
          </Link>
        </button>
      </div>
    </>
  );
};

export default UserLogin;
