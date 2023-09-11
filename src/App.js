import React from 'react';
import { Layout, Home, MainAbout, MainChef, MainBlog, FAQ, Shop, ShopDetail, Menu, Cart, Checkout } from './component/index';
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom';
import './App.css'



const app = createBrowserRouter(createRoutesFromElements(
  <Route element={<Layout />}>
    <Route index path='/' element={<Home />} />
    <Route path='menu' element={<Menu />} />
    <Route path='cart' element={<Cart />} />
    <Route path='shop' element={<Shop />} />
    <Route path='/shop/:id' element={<ShopDetail />} />
    <Route path='mainBlog' element={<MainBlog />} />
    <Route path='mainAbout' element={<MainAbout />} />
    <Route path='mainChef' element={<MainChef />} />
    <Route path='cart/checkout' element={<Checkout />} />
    <Route path='FAQ' element={<FAQ />} />
  </Route>
))
const App = () => {
  return (
    <div className='app'>
       <RouterProvider router={app} />
    </div>
  )
}

export default App