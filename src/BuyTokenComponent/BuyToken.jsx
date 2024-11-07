import React, { useContext, useState } from 'react'
import "./BuyToken.css"
import { Contexts } from '../ContexApiComponent/Context'
import { MdOutlineCancel } from 'react-icons/md'

const BuyToken = () => {
    const { showBuyToken, setShowBuyToken } = useContext(Contexts)

    return (
        <div className='blur-main-div'>
            <section className='list-token-div'>
                <MdOutlineCancel className='cancel-icon' onClick={() => setShowBuyToken(!showBuyToken)} />

                <h1>Buy listing token</h1>
                <p>You need to purchase tokens in order to list your properties</p>


                <div className='inputs-div'>
                    <aside className='numOfToken'>
                        <samp>Number of tokens</samp>
                        <input type='number' placeholder='5' />
                        <samp style={{ fontSize: "12px", color: "black" }}> Minimum is 5 token</samp>
                    </aside>

                    <aside className='amount-token'>
                        <samp>Amount</samp>
                        <article>1000 NGN</article>
                    </aside>
                </div>

                <select name="" id="" className='select-div'>
                    <option value="" style={{ color: "black" }}>Select payment method</option>
                    <option value="">Card payment</option>
                    <option value="">Bank Transfer</option>
                </select>
                
                <section className='routh-path-div'></section>
            </section>

        </div>
    )
}

export default BuyToken