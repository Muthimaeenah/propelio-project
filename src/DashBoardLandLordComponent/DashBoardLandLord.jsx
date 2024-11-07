import React, { useContext, useState } from 'react'
import "./DashBoardLandLord.css"
import { CgAddR } from 'react-icons/cg'
import { GoLocation } from 'react-icons/go'
import { LiaHouseDamageSolid } from 'react-icons/lia'
import BarChart from '../BarChartComponent/BarChart'
import BuyToken from '../BuyTokenComponent/BuyToken'
import { Contexts } from '../ContexApiComponent/Context'


const DashBoardLandLord = () => {
    const { showBuyToken, setShowBuyToken } = useContext(Contexts)

    return (
        <div className='dashBoardMain'>
            <section className='main-top'>
                <article className='token-div'>
                    <div className='number-div'>
                        <p>Token Balance</p>
                        <h1>00</h1>
                    </div>

                    <div className='add-token-div'>
                        <aside className='token-circle-div' onClick={() => setShowBuyToken(!showBuyToken)}>
                            <p>Add token</p>
                            <CgAddR style={{ width: "17px", height: "17px" }} />
                        </aside>
                    </div>

                </article>

                <article className='total-div'>
                    <div className='sale-div'>
                        <p>Token Sales</p>
                        <h1>N00.00</h1>
                    </div>

                    <div className='sale-token-div'>
                        <aside className='sale-circle-div'>

                        </aside>
                    </div>
                </article>
            </section>

            <section className='main-bottom'>
                <article className='sales-analytics-div'>
                    <div className='chart-div'>
                        <BarChart />
                    </div>

                    <div className='recent-transaction-div'>
                        <ul>
                            <li>Recent Transactions</li>
                            <li style={{ color: "#ff7900", cursor: "pointer", fontSize: "13px" }}>See all</li>
                        </ul>
                        <aside className='order-id-res-div'></aside>
                    </div>

                </article>

                <article className='numberOfProperty-div'>
                    <div className='property-visit'></div>

                    <div className='recently-added-property'>
                        <p>Recently Added Property</p>
                        <article>
                            <img src={"./rooms1.png"} alt="" />
                        </article>
                        <p style={{ marginTop: "1.1rem" }}>The Ambiance 3 Smart Homes</p>

                        <aside>
                            <GoLocation />
                            <p>Abraham adesanya, ijaye, Lagos</p>
                        </aside>
                        <aside>
                            <LiaHouseDamageSolid />
                            <p>2, Bedroom Tenance Duplex +BQ</p>
                        </aside>
                    </div>
                </article>
            </section>

            {
                showBuyToken ? <BuyToken /> : ""
            }
        </div>
    )
}

export default DashBoardLandLord