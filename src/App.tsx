import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/client/HomePage'
import WebsiteLayout from './pages/client/WebsiteLayout'
import Products from './pages/client/Products'
import AdminLayout from './pages/admin/AdminLayout'
import Dashboard from './pages/admin/Dashboard'

function App() {


  return (
    <div className="App">
      <Routes>
        <Route path="/" element ={<WebsiteLayout/>}>
            <Route index element={<HomePage/>}/>
            <Route path="/product" element ={<Products/>}/>
        </Route>
        <Route path ="admin" element ={<AdminLayout/>}>
          <Route index element={<Dashboard/>}/>

        </Route>
      </Routes>
    </div>
  )
}

export default App
