import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import CommonButton from '../common/CommonButtons'
import CommonInput from '../common/CommonInput'

import Heading from '../components/loginregister/Heading'
import GoogleButton from '../components/loginregister/GoogleButton'
import MicrosoftButton from '../components/loginregister/MicrosoftButton'
import LoginFooter from '../components/loginregister/LoginFooter'

import postRegister from '../config/postRegister'

const SignUp = () => {
  const [credentials, setCredentials] = useState({
    email: '',
    firstname: '',
    lastname: '',
    password: '',
    confirmpassword: ''
  })
  const [validate, setValidate] = useState(false)

  const handleInput = e => {
    const value = e.target.value
    const name = e.target.name

    setCredentials({
      ...credentials,
      [name]: value
    })

    if (
      credentials.email !== '' &&
      credentials.password !== '' &&
      credentials.firstname !== '' &&
      credentials.lastname !== ''
    ) {
      setValidate(true)
    } else {
      setValidate(false)
    }
  }

  const handleSubmit = creds => {
    postRegister(creds)
  }

  return (
    <div className="login">
      <div className="login-box">
        <Heading title="Start your 14 day Trial now" />
        <div className="login-content">
          <div className="login-btn-wrapper">
            <GoogleButton content="Sign up with Google" />
            <MicrosoftButton content="Sign up with Microsoft" />
          </div>
          <div className="or">
            <p className="or-text">or</p>
          </div>
          <CommonInput
            onChange={handleInput}
            name="email"
            title="Email"
            type="email"
          />
          <CommonInput
            onChange={handleInput}
            name="firstname"
            title="First Name"
          />
          <CommonInput
            onChange={handleInput}
            name="lastname"
            title="Last Name"
          />
          <CommonInput
            onChange={handleInput}
            name="password"
            title="Password"
            type="password"
          />
          <CommonInput
            onChange={handleInput}
            name="confirmpassword"
            title="Confirm Password"
            type="password"
          />
          <CommonButton
            onClick={() => {
              handleSubmit(credentials)
            }}
            btnClass={validate ? 'btn-login enable' : 'btn-login'}
            content="Create Account"
          />
          <p className="login-to-register">
            Already have an account?<Link to="/login">Log in</Link>
          </p>
        </div>

        <LoginFooter />
      </div>
    </div>
  )
}

export default SignUp
