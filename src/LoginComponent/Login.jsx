import React from 'react'
import "./Login.css"

const Login = () => {
  return (
    <div className='main-login'>
      <section className='welcome-back-div'>
        <article className='image-logos'>
          <img src={"propeliologo.png"} alt="" />
        </article>

        <h1>Welcome Back</h1>

        <article>
          <button>Sign up with Google</button>
          <button>Sign up with Apple</button>
        </article>

        <hr />

        <p>Sign in to your Propelio account to continue</p>

        <article>
          <input type="text" placeholder='Email address' />
          <input type="text" placeholder='Password' />
        </article>

        <div>
          <input type="check" />
          <p>Keep me signed in</p>
          <p>Forgot password?</p>
        </div>
        <button className='signInBTN'>Sign in</button>

        <p>Don’t have an account?  <span> Sign up</span></p>
      </section>

    </div>
  )
}

export default Login