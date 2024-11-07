import React from 'react'
import "./DashboardOutlet.css"
import { NavLink, Outlet } from 'react-router-dom'
import { RxDashboard } from 'react-icons/rx'
import { IoWalletOutline } from 'react-icons/io5'
import { BsHouses } from 'react-icons/bs'
import { RiPaypalLine } from 'react-icons/ri'
import { BiSupport } from 'react-icons/bi'
import { TbLogout2, TbSettings2 } from 'react-icons/tb'
import { TfiWorld } from 'react-icons/tfi'
import { IoIosNotificationsOutline } from 'react-icons/io'
import { GoChevronDown } from 'react-icons/go'
import BuyToken from '../BuyTokenComponent/BuyToken'

const DashboardOutlet = () => {

    return (
        <div className='Main-dashboard-div'>
            <section className='left-aside-main'>
                <article className='logo-div'>
                    <img src={"./propeliologo.png"} alt="" />
                </article>

                <article className='write-up-div'>
                    <NavLink to="/dashBoard" className={({ isActive }) => isActive ? 'active' : 'notActive'}>
                        <RxDashboard style={{ width: '50px', height: '20px' }} />
                        <p>DashBoard</p>
                    </NavLink>

                    <NavLink to="/properties" className={({ isActive }) => isActive ? 'active' : 'notActive'}>
                        <BsHouses style={{ width: '50px', height: '20px' }} />
                        <p>Properties</p>
                    </NavLink>

                    <NavLink to="/wallet" className={({ isActive }) => isActive ? 'active' : 'notActive'}>
                        <IoWalletOutline style={{ width: '50px', height: '20px' }} />
                        <p>Wallet</p>
                    </NavLink>

                    <NavLink to="/payments" className={({ isActive }) => isActive ? 'active' : 'notActive'}>
                        <RiPaypalLine style={{ width: '50px', height: '20px' }} />
                        <p>Payments</p>
                    </NavLink>
                </article>

                <article className='supp-sett-div'>
                    <div>
                        <BiSupport style={{ width: '50px', height: '20px' }} />
                        <p>Support</p>
                    </div>

                    <div>
                        <TbSettings2 style={{ width: '50px', height: '20px' }} />
                        <p>Settings</p>
                    </div>

                    <div>
                        <TbLogout2 style={{ width: '50px', height: '20px' }} />
                        <p>Logout</p>
                    </div>
                </article>
            </section>


            <section className='right-aside-main'>
                <article className='header-main-div'>
                    <div className='right-header-div'>
                        <aside className='left1'>
                            <TfiWorld style={{ width: '50px', height: '20px' }} />
                            <p>ENG</p>
                            <GoChevronDown style={{ width: '40px', height: '30px', cursor: "pointer" }} />
                            <IoIosNotificationsOutline style={{ width: '52px', height: '26px' }} />
                        </aside>

                        <aside className='right1'>
                            <article></article>

                            <ul className='ul-div'>
                                <li>Welcome back,</li>
                                <li style={{ fontSize: "14px", fontWeight: "bold", color: "black" }}>Precious</li>
                            </ul>

                            <GoChevronDown style={{ width: '25px', height: '25px', cursor: "pointer" }} />
                        </aside>
                    </div>
                </article>

                <article className='routPage-main-div'>
                    <Outlet />
                </article>
            </section>

        </div>
    )
}

export default DashboardOutlet
