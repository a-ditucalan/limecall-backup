import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import CommonButton from '../common/CommonButtons'
import CommonInput from '../common/CommonInput'

import Heading from '../components/loginregister/Heading'
import GoogleButton from '../components/loginregister/GoogleButton'
import MicrosoftButton from '../components/loginregister/MicrosoftButton'
import LoginFooter from '../components/loginregister/LoginFooter'

import postLogin from '../config/postLogin.js'

const Login = () => {
  const [credentials, setCredentials] = useState({
    email: '',
    password: ''
  })
  const [validate, setValidate] = useState(true)

  const handleInput = e => {
    const value = e.target.value
    const name = e.target.name

    setCredentials({
      ...credentials,
      [name]: value
    })

    // if (credentials.email !== '' && credentials.password !== '') {
    //   setValidate(true)
    // } else {
    //   setValidate(false)
    // }
  }

  const handleLogin = event => {
    event.preventDefault()

    postLogin(credentials)
      .then(res => {
        sessionStorage.setItem('access_token', res.data.data.access_token)
        window.location.hash = '#/getstarted'
        console.log(res.data.data, 'login')
      })
      .catch(err => console.log(err))
  }

  return (
    <div className="login">
      <div className="login-box">
        <form onSubmit={handleLogin}>
          <Heading title="Login to LimeCall" />

          <div className="login-content">
            <div className="login-btn-wrapper">
              <GoogleButton content="Login with Google" />
              <MicrosoftButton content="Login with Linkedin" />
            </div>
            <div className="or">
              <p className="or-text">or</p>
            </div>
            <CommonInput
              onChange={handleInput}
              name="email"
              title="Email"
              required="required"
            />
            <CommonInput
              onChange={handleInput}
              name="password"
              title="Password"
              type="password"
              required="required"
            />
            <CommonButton
              type="submit"
              btnClass={validate ? 'btn-login enable' : 'btn-login'}
              content="Log In"
            />
            <p className="login-to-register">
              Already have an account?<Link to="/signup">Sign up</Link>
            </p>
          </div>

          <LoginFooter validate={validate} />
        </form>
      </div>
    </div>
  )
}

export default Login
