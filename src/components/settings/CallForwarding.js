import React, { Component } from 'react'

import CallForwardingToogle from '../../common/CallFowardingToggle'
import CommonGroupButton from '../../common/CommonGroupButton'
import CommonButton from '../../common/CommonButtons'
import plus from '../../assets/images/plus.png'

const mobileAppData = {
  callId: 'mobileAppToggle',
  forwardRef: 'mobileApp',
  forwardingTitle: ['Phone number (contact)', 'Timeout', ' Enabled'],
  phoneValue: 'mobile',
  timeout: 60,
  timeoutRef: 'mobileappTime'
}

const webAppData = {
  callId: 'webAppToggle',
  forwardRef: 'webApp',
  phoneValue: 'web',
  timeout: 60,
  timeoutRef: 'webAppTime'
}

const numberData = {
  type: 'select',
  callId: 'numberToggle',
  forwardRef: 'numberApp',
  timeout: 60,
  timeoutRef: 'numberAppTime'
}

const sipData = {
  callId: 'sipToggle',
  forwardRef: 'sip',
  phoneValue: 'SIP',
  timeout: 30,
  timeoutRef: 'sipAppTime'
}

class CallForwarding extends Component {
  state = {
    mobileApp: false,
    webApp: false,
    numberApp: false,
    addForwardNumber: '',
    mobileAppTime: '',
    webAppTime: '',
    numberAppTime: '',
    sipAppTime: ''
  }

  handleDataRef = (DataRef, DataState) => {
    this.setState({ [DataRef]: DataState })
  }

  onChangeCountry = value => {
    this.setState({ numberAppNumber: value })
  }

  handleGroupBtnData = (toggleBtn, id) => {
    this.setState({ [id]: toggleBtn })
  }

  render() {
    console.log(this.state)
    return (
      <div className="call-forwarding-wrapper">
        <div className="call-forwarding-holder">
          <CallForwardingToogle
            handleDataRef={this.handleDataRef}
            dataToggle={mobileAppData}
          />
          <CallForwardingToogle
            handleDataRef={this.handleDataRef}
            dataToggle={webAppData}
          />
          <CallForwardingToogle
            handleDataRef={this.handleDataRef}
            dataToggle={numberData}
            onChangeCountry={this.onChangeCountry}
            dataNumber={this.state.numberAppNumber}
          />
          <CallForwardingToogle
            handleDataRef={this.handleDataRef}
            dataToggle={sipData}
          />
        </div>
        <div className="add-forwarding-wrapper">
          <div className="add-number">
            <img src={plus} alt="plus" />
            Add Forwarding number
          </div>
        </div>
        <div className="ring-number-wrapper">
          <CommonGroupButton
            title="Ring the numbers"
            identity="addForwardNumber"
            leftBtn="Sequeantially"
            rightBtn="Simultaneously"
            groupStyle="displaynumber-btn"
            handleGroupBtnData={this.handleGroupBtnData}
          />
        </div>

        <div className="callfowarding-btn-wrapper">
          <CommonButton
            content="Save changes"
            background="green"
            btnClass="btn-save"
          />
          <CommonButton
            content="Cancel"
            background="white"
            btnClass="btn-cancel"
          />
        </div>
      </div>
    )
  }
}

export default CallForwarding
