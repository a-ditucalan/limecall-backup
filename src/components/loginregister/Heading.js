import React from 'react'
import { Image } from 'semantic-ui-react'

import loginLogo from '../../assets/images/login-logo.svg'

const Heading = props => {
  const { title } = props

  return (
    <div className="login-header">
      <div className="login-logo">
        Limeca
        <span className="logo">
          <Image src={loginLogo} />
        </span>
      </div>
      <p className="login-header-title">{title}</p>
    </div>
  )
}

export default Heading
