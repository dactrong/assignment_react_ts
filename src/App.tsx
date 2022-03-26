import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/client/HomePage'
import WebsiteLayout from './pages/client/WebsiteLayout'
import Products from './pages/client/Products'
import AdminLayout from './pages/admin/AdminLayout'
import Dashboard from './pages/admin/Dashboard'
import ProductAdd from './pages/admin/ProductAdd'
import "bootstrap/dist/css/bootstrap.min.css";
import ProductList from './pages/admin/ProductList'


function App() {


  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<WebsiteLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/product" element={<Products />} />
        </Route>
        <Route path="admin" element={<AdminLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="product">
            <Route index element={<ProductList />} />
            <Route path = "add" element={<ProductAdd/>}/>

          </Route>

        </Route>
      </Routes>
    </div>
  )
}

export default App
