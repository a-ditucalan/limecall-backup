import React, { useState } from 'react'
import ReactPhoneInput from 'react-phone-input-2'

import CommonButtons from '../../common/CommonButtons'
import ContentFooter from './ContentFooter'

const CallRouting = ({ onClick }) => {
  const [verifyNumber, SetVerifyNumber] = useState('')

  const onChangeCountry = value => {
    SetVerifyNumber(value)
  }

  return (
    <div className="call-routing">
      <div className="call-title-holder">
        <p className="title-text">Set up your calling wizard</p>
      </div>
      <div className="call-routing-content">
        <h3 className="call-routing-text">Verify your number</h3>
        <p className="call-routing-description">
          to start receiving calls from your leads
        </p>
        <div className="phone-number-holder">
          <ReactPhoneInput onChange={onChangeCountry} />
          <CommonButtons
            content="Verify"
            background="blue"
            btnClass="btn-verify"
          />
        </div>
        <div className="code-holder">
          <CommonButtons content="Resend Code" />
          <CommonButtons content="Verify via call instead" />
        </div>
      </div>
      <ContentFooter onClick={onClick} />
    </div>
  )
}

export default CallRouting
