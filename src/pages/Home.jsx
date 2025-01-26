import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex flex-col h-screen bg-white text-black">
      <header className="bg-white text-black py-4 px-6 flex justify-between items-center shadow-md">
        <div className="flex items-center">
          <a href="/" className="text-4xl font-bold mr-6">
            Uber
          </a>
        </div>
      </header>

      <div className="bg-white text-black py-16 flex-grow">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between">
          <div className="w-full sm:w-1/2 mb-8 sm:mb-0">
            <img
              src="data:image/png;base64,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"
              alt="Drive when you want, make what you need"
              className="w-full h-auto"
            />
          </div>
          <div className="w-full sm:w-1/2 text-center sm:text-left">
            <h2 className="text-4xl font-bold mb-4">
              Drive when you want, make what you need
            </h2>
            <p className="text-lg mb-8">
              Make money on your schedule with deliveries or rides—or both. You
              can use your own car or choose a rental through Uber.
            </p>
            <div>
              <Link
                to="/login"
                className="block bg-gray-100 text-black rounded-lg px-4 py-2 hover:bg-gray-200 transition duration-200 cursor-pointer"
              >
                <h1 className="text-center">Get Started</h1>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
