import React from 'react'
import './Signup.css'
import logo from '../assets/logo.png'

const SignUp = () => {
  return (
    <div className='signup'>
       <div className='signup-img'>
          <div className='signup-img-content'>
             <h2>Join us today!</h2>
              <p>Propelio is a real estate platform that <br /> aims to guide individuals in actualizing <br />
                 their home ownership and investment <br /> dreams easier and faster.
              </p>
          </div>
       </div>
       <div className='signup-section2'>
          <div className='signup-logo'>
            <img src={logo} alt="" />
          </div>
          <div></div>
          <div></div>
         
       </div>
       <div>
         
        </div> 
    </div>
  )
}

export default SignUp