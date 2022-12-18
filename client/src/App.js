// import { useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Login from './pages/Login'
import Register from './pages/Register'

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' exact element={<h1>ISP070</h1>} />
          <Route path='/login' exact element={<Login />} />
          <Route path='/register' exact element={<Register />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
