// App.js
import React from 'react';

import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import CoverPage from './CoverPage';
import LoginPage from './LoginPage'; 
import StuDash from './StuDash';
import Faculty from './Faculty';
import Admin from './Administrator';
import Dashboard from "./Dashboard";

export const App = () => {
  return (
    
    <Router>
      <Routes>
        <Route  path="/" element={<CoverPage/>} />
        <Route path="/login" element={<LoginPage/>} />
        <Route path="/StuDash" element={<StuDash/>} />
        <Route path="/Faculty" element={<Faculty/>} />
        <Route path="/Admin" element={<Admin/>} />
        <Route path="/Dashboard" element={<Dashboard/>} />
      </Routes>
    </Router>
  );
};


export default App;