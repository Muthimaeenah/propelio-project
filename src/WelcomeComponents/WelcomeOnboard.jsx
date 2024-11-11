import React from 'react'
import "./WelcomeOnboard.css"
import AgentLandCard from '../Components/AgentLandCard'
import { Link } from 'react-router-dom'

const WelcomeOnboard = () => {
  return (
    <div className='welc-main'>
      <section className='main-welcome-div'>
        <article className='image-logo'>
          <img src={"propeliologo.png"} alt="" />
        </article>

        <h1>Welcome to propelio</h1>
        <p>It's more convenient to manage your home with an account
          Kindly select the type of account you will like to register,</p>
        <samp>or <Link to={"/login"} className='link'>click here to sign in to your account.</Link></samp>

        <aside className='landLord-Buyer-div'>
          <AgentLandCard
            h1Text={"Landlord/Agent"}
            pText={"You own a property and would like to sell/rent it out."}
          />

          <AgentLandCard
            h1Text={"Buyer/Tenant"}
            pText={"You are looking to buy/rent or invest in an apartment"}
          />
        </aside>

        {/* <button className='BTN'>Register</button> */}
      </section>

    </div>
  )
}

export default WelcomeOnboard