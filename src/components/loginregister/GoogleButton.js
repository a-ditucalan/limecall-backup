import React, { Fragment } from 'react'

import GoogleLogin from 'react-google-login'

import CommonButton from '../../common/CommonButtons'
import postGoogleAuth from '../../config/postGoogleAuth'

const GoogleButton = props => {
  const { content } = props

  const responseSuccessGoogle = response => {
    postGoogleAuth(response)
      .then(res => {
        sessionStorage.setItem('access_token', res.data.data.token)
        console.log(res.data.data, 'google btn')
        window.location.hash = '#/getstarted'
      })
      .catch(err => {
        console.log(err)
      })
  }

  const responseErrorGoogle = response => {
    console.log(response)
  }

  return (
    <Fragment>
      <GoogleLogin
        clientId="579546508842-rno6vo557b1ebdavltfb86q21nanei6i.apps.googleusercontent.com"
        buttonText="Login"
        onSuccess={responseSuccessGoogle}
        onFailure={responseErrorGoogle}
        cookiePolicy={'single_host_origin'}
      />
      <CommonButton btnClass="login-with login-google" content={content} />
    </Fragment>
  )
}

export default GoogleButton
