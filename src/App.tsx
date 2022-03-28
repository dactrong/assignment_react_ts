import { useEffect, useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/client/HomePage'
import WebsiteLayout from './pages/client/WebsiteLayout'
import Products from './pages/client/Products'
import AdminLayout from './pages/admin/AdminLayout'
import Dashboard from './pages/admin/Dashboard'
import ProductAdd from './pages/admin/product/ProductAdd'
import "bootstrap/dist/css/bootstrap.min.css";
import ProductList from './pages/admin/product/ProductList'
import { ProductType } from './types/Types'
import { create, list, remove, update } from './api/products'
import ProductEdit from './pages/admin/product/ProductEdit'


function App() {

  const [products, setProduct] = useState<ProductType[]>([]);

  useEffect(() => {
    const getProduct = async () => {
      const { data } = await list();
      setProduct(data)
    }
    getProduct();
  }, [])
  const onHandleAdd = async (product:any) => {
    const { data } = await create(product);
        setProduct([...products, data])
  }
  const onHandleRemove = (_id: number) => {
    remove(_id);
    setProduct(products.filter(item => item._id !== _id));
  }
  const onHandleUpdate = async (product: ProductType) => {
    try {
      const { data } = await update(product)
      setProduct(products.map(item => item._id === data._id ? product : item))
    } catch (error) {

    }
  }

  
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<WebsiteLayout />}>
          <Route index element={<HomePage product={products} />} />
          <Route path="/product" element={<Products product={products} />} />
        </Route>
        <Route path="admin" element={<AdminLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="product">
            <Route index element={<ProductList product={products} onRemove ={onHandleRemove} />} />
            <Route path="add" element={<ProductAdd onAdd = {onHandleAdd} />} />
            <Route  path=":id/edit" element= {<ProductEdit onUpdate={onHandleUpdate} />} />

          </Route>

        </Route>
      </Routes>
    </div>
  )
}

export default App
