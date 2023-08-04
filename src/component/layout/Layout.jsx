import React from 'react'
import { Outlet } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from '../store/store'
import Navbar  from '../navbar/Navbar'
import Footer from '../footer/Footer'

const Layout = () => {
  return (
    <Provider store={store}>
        <Navbar />
        <Outlet />
        <Footer />
    </Provider>
  )
}

export default Layout