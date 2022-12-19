// import { useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Login from './pages/Login'
import Register from './pages/Register'
import LandingPage from './pages/LandingPage';
import DashBoard from './pages/DashBoard';
function App() {  

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' exact element={<LandingPage/>} />
          <Route path='/login' exact element={<Login />} />
          <Route path='/register' exact element={<Register />} />
          <Route path='/dashboard' exact element={<DashBoard />} />

        </Routes>
      </Router>
    </>
  );
}

export default App;
