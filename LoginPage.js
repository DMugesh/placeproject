// App.js
import React, { useState } from 'react';
import './index.css';
import { useNavigate } from 'react-router-dom';


const LoginPage = () => {
  const [role, setRole] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleRoleChange = (e) => {
    setRole(e.target.value);
    
  };

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    console.log({ role, username, password });
  };
  const navigate = useNavigate();

  const redirectToFaculty = () => {
    navigate('/Admin');
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-r from-blue-100 via-blue-300 to-blue-500">
  <div className="bg-white p-8 rounded-lg shadow-lg w-96">
    <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Login</h2>
    <form onSubmit={handleSubmit}>
      <div className="mb-6">
        <label htmlFor="role" className="block text-lg font-semibold mb-2 text-gray-700">Role</label>
        <select
          id="role"
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
          value={role}
          onChange={handleRoleChange}
        >
          <option value="">Select a role</option>
          <option value="student">Student</option>
          <option value="faculty">Faculty</option>
          <option value="admin">Admin</option>
        </select>
      </div>
      <div className="mb-6">
        <label htmlFor="username" className="block text-lg font-semibold mb-2 text-gray-700">Username</label>
        <input
          type="text"
          id="username"
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
          value={username}
          onChange={handleUsernameChange}
        />
      </div>
      <div className="mb-6">
        <label htmlFor="password" className="block text-lg font-semibold mb-2 text-gray-700">Password</label>
        <input
          type="password"
          id="password"
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
          value={password}
          onChange={handlePasswordChange}
        />
      </div>
      <button onClick={redirectToFaculty}type="submit" className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition duration-300">
        Login
      </button>
    </form>
  </div>
</div>

    
  );
};

export default LoginPage;
