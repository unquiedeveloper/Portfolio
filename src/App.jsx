import React from 'react'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Home from './pages/Home';
import AdminDashboard from './pages/Admin/AdminDashboard';
import AdminLogin from './pages/Admin/AdminLogin';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/admin' element={<AdminDashboard />} />
      <Route path='/login' element={<AdminLogin/>} />
      <Route path='*' element={<Home />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App;
