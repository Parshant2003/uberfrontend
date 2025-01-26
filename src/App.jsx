import React from 'react'
import { Route, Routes } from 'react-router-dom'
import UserLogin from './pages/UserLogin';
import UserSignUp from './pages/UserSignUp';
import CaptainLogin from './pages/CaptainLogin';
import CaptainSignUp from './pages/CaptainSignUp';
import Home from './pages/Home';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<UserLogin/>} />
        <Route path="/register" element={<UserSignUp/>} />
        <Route path="/captain-login" element={<CaptainLogin/>} />
        <Route path="/captain-register" element={<CaptainSignUp/>} />
      </Routes>
    </div>
  )
}

export default App