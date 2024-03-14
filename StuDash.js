import React, { useState } from "react";
import { useNavigate} from 'react-router-dom';


const StuDash = () => {
  
  const [showOptions, setShowOptions] = useState(false);
  
  const toggleOptions = () => {
    setShowOptions(!showOptions);
  };

  const navigate = useNavigate();

  const redirectToLoginPage = () => {
    navigate('/login');
  };

  return (
    <div className="min-h-screen bg-blue-50">
      
      <nav container="fluid" className="bg-gradient-to-r from-blue-100 via-blue-300 to-blue-200 hover:from-green-200 hover:via-green-300 hover:to-green-200"
style={{  height: '40px', fontSize: '20px' }}
>
        <div className="flex justify-between items-center">
          <h1 className="text-xl font-bold">Student Info</h1>
          <div className="relative">
            <button
              className="flex items-center space-x-2 focus:outline-none"
              onClick={toggleOptions}
            >
              <span>John Doe</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 12a2 2 0 100-4 2 2 0 000 4zM3 10a2 2 0 114 0 2 2 0 01-4 0zm14 0a2 2 0 11-4 0 2 2 0 014 0z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            {showOptions && (
              <div className="absolute top-full right-0 bg-white rounded-lg shadow-md mt-2">
                <ul>
                  <li className="py-2 px-4 hover:bg-gray-100 cursor-pointer">
                    Help
                  </li>
                  <button onClick={redirectToLoginPage} type="button" className="py-2 px-4 hover:bg-gray-100 cursor-pointer">
        Logout
      </button>
                </ul>
              </div>
            )}
          </div>
        </div>
      </nav>

  
      <div className="container mx-auto py-8">
        <div className="bg-white rounded-lg shadow-lg p-8 max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold mb-4">Student Information</h2>
          <div className="mb-4">
            <p className="text-lg font-semibold">Name: John Doe</p>
          </div>
          <div className="mb-4">
            <p className="text-lg font-semibold">Email: john.doe@example.com</p>
          </div>
          <div className="mb-4">
            <p className="text-lg font-semibold">Registration Number: ABC123</p>
          </div>
          <div className="mb-4">
            <p className="text-lg font-semibold">Department: INT</p>
          </div>

          <div className="flex space-x-4">
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-300">
              Upload Document
            </button>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-300">
              Update Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StuDash;
