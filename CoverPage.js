
import React from 'react';
import { createRoot } from 'react-dom/client';
import { useNavigate,BrowserRouter } from 'react-router-dom';

const CoverPage = () => {
  const navigate = useNavigate();

  const redirectToLoginPage = () => {
    navigate('/login');
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-r from-blue-100 via-blue-300 to-blue-500">
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold mb-6 text-center text-gray-800">HI</h1>
        <p className="text-lg mb-6 text-center text-gray-700">Welcome to placement cell.</p>
        <div className="flex justify-center">
        <button onClick={()=>{navigate('/login')}} className="bg-purple-600 text-white py-3 px-6 rounded-lg hover:bg-purple-700 transition duration-300">Login</button>
        </div>
      </div>
    </div>
  );
};
export default CoverPage;
/*const root = createRoot(document.getElementById('root'));
root.render(
<BrowserRouter>
<CoverPage />
</BrowserRouter>);*/
