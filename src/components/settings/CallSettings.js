import React, { Component } from 'react'
import { Form, TextArea } from 'semantic-ui-react'

import NodeToggle from '../../common/NodeToggle'
import CommonButtons from '../../common/CommonButtons'
import getRequestFromDashboard from '../../config/getRequestFromDashboard'

const callToggle = [
  {
    callTitle: 'Automated Calls',
    callDesc:
      'When turned on, our system is permitted to make automated calls to your customers when requited',
    callId: 'toogleAutomated',
    callref: 'automatedCall'
  },
  {
    callTitle: 'Call Recording',
    callDesc: 'Download Call Recording',
    callId: 'toggleRecord',
    callref: 'callRecording'
  },
  {
    callTitle: 'Caller ID Masking',
    callDesc:
      'If turned off, customer will see the call rep’s number instead of Limecall’s Number',
    callId: 'toggleMasking',
    callref: 'callerId'
  }
]

class Calls extends Component {
  state = {
    automatedCall: false,
    callRecording: false,
    callerId: false,
    voiceMessage: ''
  }

  handleDataTextAreaChange = e => {
    this.setState({ voiceMessage: e.target.value })
  }

  handleDataRef = (DataRef, DataState) => {
    this.setState({ [DataRef]: DataState })
  }

  componentDidMount() {
    getRequestFromDashboard()
      .then(res => {
        console.log(res)
      })
      .catch(err => {
        console.log(err)
      })
  }

  render() {
    return (
      <div className="callsettings-wrapper">
        {callToggle.map((item, i) => {
          return (
            <NodeToggle
              key={i}
              handleDataRef={this.handleDataRef}
              dataToggle={item}
            />
          )
        })}
        <div className="call-bottom-wrapper">
          <div className="call-bottom-holder">
            <h3 className="call-title">Voice Message</h3>
            <p className="call-textarea-description">
              Automated voice message when call reps answer a call
            </p>
          </div>
          <div className="call-textarea-holder">
            <Form>
              <TextArea
                onChange={this.handleDataTextAreaChange}
                rows={9}
                className="call-textarea"
              />
            </Form>
          </div>
        </div>
        <CommonButtons type="submit" content="Update" background="blue" />
      </div>
    )
  }
}

export default Calls
