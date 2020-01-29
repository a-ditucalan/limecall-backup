import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Accordion, Image } from 'semantic-ui-react'

import CommonButtons from '../../common/CommonButtons'
import CommonCheckbox from '../../common/CommonCheckbox'
import CommonSelect from '../../common/CommonSelect'
import CommonInput from '../../common/CommonInput'
import NodeCheckbox from '../../common/NodeCheckbox'

import Warning from '../../assets/images/warning.svg'

class NotificationSettings extends Component {
  state = {
    activeIndexes: [0],
    //Notification Data
    data: {
      checkboxForMobile: false,
      checkboxCallNotif: false,
      selectConvoType: '',
      selectConvoSound: '',
      inputBillingEmail: '',
      checkboxBrowserDeiplayNotif: false,
      checkboxDesktopNotifOnScreen: false,
      selectAdvanceSound: '',
      checkboxNotifRepeat: false,
      selectEmailNotif: '',
      nodeCheckboxEmail: [],
      nodeCheckboxDesktop: [],
      nodeCheckboxMobile: []
    }
  }

  onChangeInput = e => {
    const { name, value } = e.target
    const { data } = this.state
    data[name] = value

    this.setState({ data })
  }

  onChangeCheckbox = e => {
    const { name } = e.target.parentNode.querySelector('.hidden')
    const { data } = this.state
    data[name] = !data[name]

    this.setState(data)
  }

  onChangeNodeCheckbox = e => {
    const name = e.target.parentNode.parentNode.parentNode.getAttribute('name')
    const value = e.target.innerText
    const { data } = this.state

    const index = data[name].indexOf(value)
    if (index === -1) {
      data[name].push(value)
    } else {
      data[name].splice(index, 1)
    }

    this.setState(data)
  }

  onChangeSelect = e => {
    const name = e.target.parentNode.parentNode.parentNode.getAttribute('name')
    const value = e.target.innerText
    const { data } = this.state
    data[name] = value

    this.setState({ data })
  }

  onSave = () => {
    const { data } = this.state

    console.log(data)
  }

  handleClick = (e, titleProps) => {
    const { index } = titleProps
    const { activeIndexes } = this.state
    const newIndex = activeIndexes

    const currentIndexPosition = activeIndexes.indexOf(index)
    if (currentIndexPosition > -1) {
      newIndex.splice(currentIndexPosition, 1)
    } else {
      newIndex.push(index)
    }

    this.setState({ activeIndexes: newIndex })
  }

  render() {
    const { activeIndexes, data } = this.state

    return (
      <div className="account-settings">
        <form method="" action="">
          <div className="holder-notification">
            <h1 className="bold-text">Notification Settings</h1>
            <p className="subtext">Send me desktop notifications about...</p>
            <div className="holder-enable-notification">
              <p className="notification-title">
                <Image src={Warning} />
                Desktop Notifications are not enabled
              </p>
              <p className="notification-desc">
                It looks like you don't have desktop notification enabled for
                Drift! We highly recommend enabling them so you don't miss any
                important conversations in Limecall!
              </p>
              <CommonButtons
                content="Enable Desktop Notifications"
                background="green"
              />
            </div>
            <div className="checkbox-formobile">
              <CommonCheckbox
                onChange={this.onChangeCheckbox}
                name="checkboxForMobile"
                checked={data.checkboxForMobile}
                text="Use different settings for my mobile devices"
                italicText="will use some settings as desktop if not selected"
              />
            </div>
            <div className="holder-select">
              <CommonSelect
                onChange={this.onChangeSelect}
                name="selectConvoType"
                isGray
                placeholder="Select Conversation Type"
                options={[
                  'Select Conversation Type',
                  "All Conversation's",
                  "Conversation's I'm in and empty conversation's",
                  "Only conversations I'm in",
                  "Don't send me any push notifications"
                ]}
              />
              <CommonSelect
                onChange={this.onChangeSelect}
                name="selectConvoSound"
                isGray
                placeholder="Select"
                options={['Select', 'With Sounds', 'Without Sound']}
              />
              <CommonButtons
                content="Send Test"
                icon="mobile alternate"
                background="alt-blue"
              />
            </div>
            <span className="warning-text">
              You must have the Limecall app on iOS or Android to receive push
              notifications on your mobile devices
            </span>
            <div className="schedule-call-notif">
              <h2 className="title-label">Scheduled Call Notifications</h2>
              <CommonCheckbox
                onChange={this.onChangeCheckbox}
                name="checkboxCallNotif"
                checked={data.checkboxCallNotif}
                text="Send an SMS notifying thee customer about a schedule call"
              />
            </div>
            <div className="billing-notif">
              <h2 className="title-label">Billing notifications</h2>
              <CommonInput
                onChange={this.onChangeInput}
                name="inputBillingEmail"
                background="gray"
                type="text"
                title="Send invoices to this email address"
              />
            </div>
            <CommonButtons
              onClick={this.onSave}
              type="submit"
              content="Save"
              background="blue"
            />
            <Accordion>
              <div className="accordion-holder advance-settings">
                <Accordion.Title
                  active={activeIndexes.includes(0)}
                  index={0}
                  onClick={this.handleClick}
                >
                  <p className="bold-text accordion-title">Advance settings</p>
                  <p className="subtext accordion-desc">
                    Customize advance notification settings
                  </p>
                </Accordion.Title>
                <Accordion.Content active={activeIndexes.includes(0)}>
                  <div className="desktop-notification">
                    <h2 className="title-label">Desktop Notification</h2>
                    <CommonCheckbox
                      onChange={this.onChangeCheckbox}
                      name="checkboxBrowserDeiplayNotif"
                      checked={data.checkboxBrowserDeiplayNotif}
                      text="Display desktop notification even when Limecall is not open in a browser."
                    />
                    <CommonCheckbox
                      onChange={this.onChangeCheckbox}
                      name="checkboxDesktopNotifOnScreen"
                      checked={data.checkboxDesktopNotifOnScreen}
                      text="Keep desktop notification on-screen until I interact with them"
                    />
                    <p className="subtext">with this sound</p>
                    <div className="holder-sound-select">
                      <CommonSelect
                        onChange={this.onChangeSelect}
                        name="selectAdvanceSound"
                        isGray
                        placeholder="Select"
                        options={['Select', 'No sound', 'With sound']}
                      />
                      <CommonButtons
                        content="Send Test"
                        icon="mobile alternate"
                        background="alt-blue"
                      />
                    </div>
                  </div>
                  <div className="email-notification">
                    <h2 className="title-label">Email Notifications</h2>
                    <CommonCheckbox
                      onChange={this.onChangeCheckbox}
                      name="checkboxNotifRepeat"
                      checked={data.checkboxNotifRepeat}
                      text="Send me email notification once every 15 minute for"
                    />
                    <CommonSelect
                      onChange={this.onChangeSelect}
                      name="selectEmailNotif"
                      isGray
                      placeholder="Select"
                      options={[
                        'Select',
                        "Only conversations I'm in",
                        'Option 2'
                      ]}
                    />
                    <CommonButtons
                      content="Send Test"
                      icon="mobile alternate"
                      background="alt-blue"
                    />
                    <p className="subtext">
                      You wil recieve these at <Link to="">alpha@gama.com</Link>
                    </p>
                  </div>
                  <div className="holder-checkboxes">
                    <p className="title-label">
                      Set notifications which you would like to recieve
                    </p>
                    <NodeCheckbox
                      onChange={this.onChangeNodeCheckbox}
                      name="nodeCheckboxEmail"
                      title="Email"
                      checkboxlist={[
                        'Missed call',
                        'New call',
                        'New schedule call',
                        "Widget's weekly reports",
                        'Scheduld call failed',
                        'Custom fields completed by visitors',
                        'New message'
                      ]}
                    />
                    <NodeCheckbox
                      onChange={this.onChangeNodeCheckbox}
                      name="nodeCheckboxDesktop"
                      title="Desktop"
                      checkboxlist={[
                        'New call',
                        'Call completed',
                        'Visitor left additions data',
                        'New scheduled call',
                        'Updated from Callpage',
                        'New widget installed',
                        'New message'
                      ]}
                    />
                    <NodeCheckbox
                      onChange={this.onChangeNodeCheckbox}
                      name="nodeCheckboxMobile"
                      title="Mobile"
                      checkboxlist={[
                        'New call',
                        'Scheduled call',
                        'Call ringing',
                        'New message',
                        'Manager availablity status has been changed'
                      ]}
                    />
                  </div>
                </Accordion.Content>
              </div>
            </Accordion>
          </div>
        </form>
      </div>
    )
  }
}

export default NotificationSettings
