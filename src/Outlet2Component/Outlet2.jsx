import React from 'react'
import { Outlet } from 'react-router-dom'
import Onboard from '../OnboardComponent/Onboard'
import "./Outlet2.css"
const Outlet2 = () => {
    return (
        <div className='mainDiv'>
            <Onboard />
            <Outlet />
        </div>
    )
}

export default Outlet2