import React from 'react';
import './Wallet.css';
import { MdAttachMoney } from 'react-icons/md';
import { AiOutlineArrowUp } from 'react-icons/ai';
import { AiOutlineDollar } from "react-icons/ai";
import { BiCartAlt } from "react-icons/bi";
import { PiCubeLight } from "react-icons/pi";

const Wallet = () => {
  return (
    <>
      <div className='wallet_body'>
        <section className='wallet_top_card_container'>
          <article className='wallet_top_card'>
            <div className='wallet_top_card_icon_container TE'>
              <AiOutlineArrowUp/>
            </div>
            <div className='wallet_top_card_text_container'>
              <p>Total Earnings</p>
              <h3>₦8,410,000</h3>
            </div>
          </article>
          <article className='wallet_top_card'>
            <div className='wallet_top_card_icon_container PE'>
              <AiOutlineDollar/>
            </div>
            <div className='wallet_top_card_text_container'>
              <p>Pending Earnings</p>
              <h3>₦500,000</h3>
            </div>
          </article>
          <article className='wallet_top_card'>
            <div className='wallet_top_card_icon_container TS'>
              <PiCubeLight/>
            </div>
            <div className='wallet_top_card_text_container'>
              <p>Total Sales</p>
              <h3>12</h3>
            </div>
          </article>
          <article className='wallet_top_card'>
            <div className='wallet_top_card_icon_container PS'>
              <BiCartAlt/>
            </div>
            <div className='wallet_top_card_text_container'>
              <p>Pending Sales</p>
              <h3>2</h3>
            </div>
          </article>
        </section>
        <section className='wallet_balance_container'></section>
      </div>
    </>
  )
}

export default Wallet