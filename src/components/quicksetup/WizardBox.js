import React from 'react'
import classnames from 'classnames'

import CommonButtons from '../../common/CommonButtons'

import girlIcon from '../../assets/images/girl-icon.svg'

const WizardBox = props => {
  const { activeSetup } = props

  return (
    <div className="wizard">
      <h2 className="wizard-title">Quick Setup</h2>
      <div className="wizard-holder">
        <span
          className={classnames('wizard-item', {
            active: activeSetup === 1
          })}
        >
          Setup call routing
        </span>
        <span
          className={classnames('wizard-item', {
            active: activeSetup === 2
          })}
        >
          Select your Requirement
        </span>
        <span
          className={classnames('wizard-item', {
            active: activeSetup === 3
          })}
        >
          Install
        </span>
        <span
          className={classnames('wizard-item', {
            active: activeSetup === 4
          })}
        >
          Invite your team
        </span>
        <span
          className={classnames('wizard-item', {
            active: activeSetup === 5
          })}
        >
          Go live
        </span>
      </div>
      <div className="wizard-bottom-holder">
        <h2 className="title">Need Help understanding your requirements?</h2>
        <p className="description-text">
          Our Team can assist you, We usually reply in under 10 minutes.
        </p>
        <CommonButtons
          content="CHAT NOW"
          background="blue"
          btnClass="btn-modal-style"
        />
        <img src={girlIcon} alt="call" />
      </div>
    </div>
  )
}

export default WizardBox
