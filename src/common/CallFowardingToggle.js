import React, { Component, Fragment } from 'react'
import ReactPhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/dist/style.css'

import { Label } from 'semantic-ui-react'

import CommonInput from './CommonInput'
import Toggle from './CommonToggle'

const AppMobile = () => (
  <div className="phone-number-wrapper">
    <Label color="blue">APP</Label>
    <p className="default-text">Mobile App (Incoming calls)</p>
    <i className="fas fa-info-circle"></i>
  </div>
)

const AppWeb = () => (
  <div className="phone-number-wrapper">
    <Label color="green">WEB</Label>
    <p className="default-text">MightyCall Webphone</p>
  </div>
)

const Sip = () => (
  <div className="phone-number-wrapper">
    <Label color="orange">SIP</Label>
    <p className="default-text">Sip Phone</p>
  </div>
)

class CallFowardingToggle extends Component {
  state = {
    activeToggle: false,
    toggleRef: this.props.dataToggle.forwardRef
  }

  handleToggleData = toggleData => {
    this.setState({ activeToggle: toggleData }, () => {
      return this.props.handleDataRef(
        this.state.activeToggle,
        this.state.toggleRef
      )
    })
  }

  render() {
    const { dataToggle, onChangeCountry, dataNumber } = this.props

    return (
      <div className="toogle-forwading-wrapper">
        <div className="input-contact">
          {dataToggle.forwardingTitle ? (
            <Fragment>
              <div className="forwarding-title-holder">
                <p className="forwarding-title">
                  {dataToggle.forwardingTitle[0]}
                </p>
              </div>
            </Fragment>
          ) : (
            ''
          )}
          {dataToggle.type === 'select' ? (
            <Fragment>
              <div className="input-select-wrapper">
                <ReactPhoneInput
                  defaultCountry={'us'}
                  value={dataNumber}
                  onChange={onChangeCountry}
                />
              </div>
            </Fragment>
          ) : (
            <Fragment>
              {dataToggle.phoneValue === 'mobile' ? (
                <AppMobile />
              ) : dataToggle.phoneValue === 'web' ? (
                <AppWeb />
              ) : (
                <Sip />
              )}
            </Fragment>
          )}
        </div>
        <div className="input-timeout">
          {dataToggle.forwardingTitle ? (
            <Fragment>
              <div className="forwarding-title-holder">
                <p className="forwarding-title">
                  {dataToggle.forwardingTitle[1]}
                  <i className="fas fa-info-circle"></i>
                </p>
              </div>
            </Fragment>
          ) : (
            ''
          )}
          <CommonInput
            type="number"
            value={dataToggle.timeout}
            name={dataToggle.timeoutRef}
          />
        </div>
        <div className="toggle-enable-holder">
          {dataToggle.forwardingTitle ? (
            <Fragment>
              <div className="forwarding-title-holder">
                <p className="forwarding-title">
                  {dataToggle.forwardingTitle[2]}
                  <i className="fas fa-info-circle"></i>
                </p>
              </div>
            </Fragment>
          ) : (
            ''
          )}

          <Toggle
            handleToggleData={this.handleToggleData}
            dataToggleActive={this.state.activeToggle}
            dataStateToggle={dataToggle}
          />
        </div>
      </div>
    )
  }
}

export default CallFowardingToggle
