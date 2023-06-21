import React from 'react';
import { Layout, Home } from './component/index';
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom';
import './App.css'



const app = createBrowserRouter(createRoutesFromElements(
  <Route element={<Layout />}>
    <Route index path='/' element={<Home />} /> 
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