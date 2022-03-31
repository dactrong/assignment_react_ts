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
import CategoryList from './pages/admin/categories/CategoryList'
import Signup from './pages/client/Signup'
import Signin from './pages/client/Signin'
import CategoryAdd from './pages/admin/categories/CategoryAdd'
import { CategoryType } from './types/category'
import { listCategory, creat } from './api/category'
import CategoryEdit from './pages/admin/categories/CategoryEdit'
import PrivateRouter from './components/PrivateRouter'
import ProductDetail from './pages/client/ProductDetail'


function App() {

  const [products, setProduct] = useState<ProductType[]>([]);
  const [categorys, setCategory] = useState<CategoryType[]>([]);

  useEffect(() => {
    const getProduct = async () => {
      const { data } = await list();
      setProduct(data)
    }
    getProduct();
  }, [])

  useEffect(() => {
    const getCategory = async () => {
      const { data } = await listCategory();
      setCategory(data)
    }
    getCategory();
  }, [])

  const onHandleAdd = async (product: any) => {
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
  const handleAddCategory = async (category: CategoryType) => {

    const { data } = await creat(category);
    setCategory([...categorys, data])
  }
  const onHandleRemoveCategory = (_id: number) =>{
    remove(_id);
    setCategory(categorys.filter(item => item._id !==_id));
  }
  



  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<WebsiteLayout />}>
          <Route index element={<HomePage product={products} />} />
          <Route path="product" element={<Products product={products} />} />
          <Route path="product/:id" element={<ProductDetail />} />
        </Route>
        
        <Route path="admin" element={<PrivateRouter><AdminLayout /></PrivateRouter>}>
          <Route index element={<Dashboard />} />
          <Route path="product">
            <Route index element={<ProductList product={products} onRemove={onHandleRemove} />} />
            <Route path="add" element={<ProductAdd onAdd={onHandleAdd} />} />
            <Route path=":id/edit" element={<ProductEdit onUpdate={onHandleUpdate} />} />
          </Route>
          <Route path="category">
            <Route index element={<CategoryList category={categorys} onRemoveCategory ={onHandleRemoveCategory}  />} />
            <Route path="add" element={<CategoryAdd onAddCategory={handleAddCategory} />} />
            <Route path=":id/edit" element={<CategoryEdit />} />
          </Route>
        </Route>
        <Route path="signup" element={<Signup />} />
        <Route path="signin" element={<Signin />} />
      </Routes>
    </div>
  )
}

export default App
