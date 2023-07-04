import React from 'react';
import { Layout, Home, MainAbout, MainChef, MainBlog, FAQ, Shop, Menu } from './component/index';
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom';
import './App.css'



const app = createBrowserRouter(createRoutesFromElements(
  <Route element={<Layout />}>
    <Route index path='/' element={<Home />} />
    <Route path='menu' element={<Menu />} />
    <Route path='shop' element={<Shop />} />
    <Route path='mainBlog' element={<MainBlog />} />
    <Route path='mainAbout' element={<MainAbout />} />
    <Route path='mainChef' element={<MainChef />} />
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