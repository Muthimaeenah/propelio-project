import React from 'react'
import Header from '../HeaderComponent/Header'
import { Outlet } from 'react-router-dom'

const OutletPage = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  )
}

export default OutletPage