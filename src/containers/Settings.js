import React, { Component } from 'react'

import InnerNavigation from '../common/InnerNavigation'

import icon from '../assets/images/settingIcon.png'

const titleContent = {
  type: 'image',
  titleOne: icon,
  titleTwo: 'Settings'
}

const settingsData = [
  {
    mainSidebar: 'My Settings',
    innerTabs: ['Account', 'Notifications']
  },
  {
    mainSidebar: 'Call Settings',
    innerTabs: ['Calls', 'Schedules', 'Countries', 'SMS', 'BlackList']
  },
  {
    mainSidebar: 'Team Settings',
    innerTabs: ['Team Settings', 'Manage Teammates']
  },
  {
    mainSidebar: 'Billing',
    innerTabs: [
      'Subscription',
      'Invoices',
      'Usage',
      'Billing info',
      'Payment methods'
    ]
  },
  {
    mainSidebar: 'Integration',
    innerTabs: ['Integration']
  },
  {
    mainSidebar: 'Call Forwarding',
    innerTabs: ['Call Forwarding']
  }
]

class Settings extends Component {
  render() {
    return (
      <div className="fullwidth-container">
        <InnerNavigation
          dataComponent={settingsData}
          activeTab={this.props.activeTab}
          activeComponent={this.props.activeComponent}
          dataTitle={titleContent}
        />
      </div>
    )
  }
}

export default Settings
