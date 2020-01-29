import React, { Component } from 'react'

import Input from '../../common/CommonInput'
import SingleTable from '../../common/CommonSingleTable'
import CommonButtons from '../../common/CommonButtons'

class SmsSettings extends Component {
  state = {
    tableData: [
      {
        success: 'Successful Calls',
        from: 'Limecall'
      },
      {
        success: 'Unsuccessful Calls',
        from: 'Limecall'
      }
    ]
  }

  render() {
    return (
      <div className="sms-settings-wrapper">
        <div className="sms-header-holder">
          <div className="sms-title-wrapper">
            <h2 className="sms-title bold-text">SMS Configuration</h2>
            <p className="sms-description default-text subtext">
              The default selected country in all your widgets.
            </p>
          </div>
          <div className="sms-subject-holder">
            <p className="sms-text semibold-text">From</p>
            <div className="sms-info">
              <Input type="text" value="Limecall" />
              <p className="text-length default-text subtext">
                Length 4 - 11 Character
              </p>
            </div>
          </div>
        </div>
        {this.state.tableData.map((item, i) => {
          return <SingleTable key={i} tableData={item} />
        })}
        <div className="sms-button-wrapper">
          <p className="subtext default-text">
            - Click to insert placeholders for your call rep's details -
          </p>
          <div className="btn-group">
            <CommonButtons
              btnClass="btn-sms"
              type="submit"
              content="Call Rep Name"
              background="grey"
            />
            <CommonButtons
              btnClass="btn-sms"
              type="submit"
              content="Call Rep Number"
              background="grey"
            />
            <CommonButtons
              btnClass="btn-sms"
              type="submit"
              content="Company"
              background="grey"
            />
          </div>
          <CommonButtons type="submit" content="Update" background="blue" />
        </div>
      </div>
    )
  }
}

export default SmsSettings
