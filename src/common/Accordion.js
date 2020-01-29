import React, { useState } from 'react'
import { Icon } from 'semantic-ui-react'
import classnames from 'classnames'

import Toggle from '../common/CommonToggle'
import CommonInput from '../common/CommonInput'
import CommonButton from './CommonButtons'

import wordpress from '../assets/images/Dashboard-99.png'
import google from '../assets/images/Dashboard-100.png'

const Accordion = ({ handleDataRef, script }) => {
  const callToggle = {
    callTitle: 'JavaScript Snippet',
    callDesc:
      'When turned on, our system is permitted to make automated calls to your customers when requited',
    callId: 'toogleJavaScriptSnippet',
    callref: 'javaScriptSnippet'
  }

  const [javaScriptSnippet, setJavascriptSnippet] = useState(false)
  const [email, setEmail] = useState('')
  const [collapsable, setCollapsable] = useState({
    javascriptCollapse: false,
    setupCollapse: false,
    sendsnipperCollapse: false
  })

  const handleToggleData = toggleData => {
    setJavascriptSnippet(!toggleData)
  }

  const onClickTitle = e => {
    const key = e.target.getAttribute('data')
    setCollapsable({ [key]: !collapsable[key] })
  }

  const onChangeInput = e => {
    const ref = e.target.name
    const value = e.target.value

    setEmail(value)
    return handleDataRef(ref, value)
  }

  return (
    <div className="collapse">
      <div
        className={classnames('collapse-panel', {
          'collapse-expanded': collapsable.javascriptCollapse
        })}
      >
        <h3
          className="collapse-header"
          onClick={onClickTitle}
          data="javascriptCollapse"
        >
          {collapsable.javascriptCollapse === true ? (
            <Icon name="caret up" />
          ) : (
            <Icon name="dropdown" />
          )}
          JavaScript Snippet
        </h3>
        <div className="collapse-body">
          <h2 className="collapse-title">
            Paste your javaScript in the head of your website.
          </h2>
          <div className="javascript-toggle">
            <Toggle
              dataToggleActive={javaScriptSnippet}
              handleToggleData={handleToggleData}
              dataStateToggle={callToggle}
            />
            <div className="javascript-toggle-desc-wrapper">
              <h3 className="javascript-toggle-title">
                Annonymise IP addresses
              </h3>
              <p className="javascript-toggle-desc">
                Avoid Sending personally identifiable information to Limecall
                Analytics. Learn More
              </p>
            </div>
          </div>
          <div className="javscript-description-holder">
            <p className="collapse-description">{script}</p>
          </div>
        </div>
      </div>
      <div
        className={classnames('collapse-panel', {
          'collapse-expanded': collapsable.setupCollapse
        })}
      >
        <h3
          className="collapse-header"
          onClick={onClickTitle}
          data="setupCollapse"
        >
          {collapsable.setupCollapse === true ? (
            <Icon name="caret up" />
          ) : (
            <Icon name="dropdown" />
          )}
          Set up with an integration(e.g. Wordpress, Segment, GTM)
        </h3>
        <div className="collapse-body">
          <h2 className="collapse-title">
            Easy, code-free setup with popular services.
          </h2>
          <p className="suggestions-text">
            Or, select from these popular suggestions:
          </p>
          <div className="suggestion-logo-wrapper">
            <div className="suggestion-logo-holder">
              <img src={wordpress} alt="logo" />
            </div>
            <div className="suggestion-logo-holder">
              <img src={google} alt="logo" />
            </div>
          </div>
        </div>
      </div>
      <div
        className={classnames('collapse-panel', {
          'collapse-expanded': collapsable.sendsnipperCollapse
        })}
      >
        <h3
          className="collapse-header"
          data="sendsnipperCollapse"
          onClick={onClickTitle}
        >
          {collapsable.sendsnipperCollapse === true ? (
            <Icon name="caret up" />
          ) : (
            <Icon name="dropdown" />
          )}
          Send your snipper to your teammate
        </h3>
        <div className="collapse-body">
          <h2 className="collapse-title">
            Send no-nonsense instructions to your favourite developer.
          </h2>
          <CommonInput
            onChange={onChangeInput}
            placeholder="Email"
            name="email"
            type="email"
          />
          <CommonButton content="Send" background="green" btnClass="btn-send" />
        </div>
      </div>
    </div>
  )
}

export default Accordion
