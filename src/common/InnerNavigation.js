import React, { Component } from 'react'

import Title from './Title'
import InnerSideBar from './InnerSidebar'
import InnerTabs from './InnerTabs'
import MySettingsNotifications from '../components/settings/NotificationSettings'
import MySettingsAccount from '../components/settings/AccountSettings'
import MySettingsCalls from '../components/settings/CallSettings'
import ScheduleSettings from '../components/settings/ScheduleSettings'
import CountriesSettings from '../components/settings/CountriesSettings'
import SmsSettings from '../components/settings/SmsSettings'
import TeamSettings from '../components/settings/TeamSettings'
import BlackListSettings from '../components/settings/BlackListSettings'
import ManageTeammates from '../components/settings/ManageTeammates'
import Invoices from '../components/settings/InvoiceBilling'
import BillingInfo from '../components/settings/BillingInfo'
import Usage from '../components/settings/UsageBilling'
import PaymentMethod from '../components/settings/PaymentMethods'
import SubscriptionSettings from '../components/settings/SubscriptionSettings'
import Integration from '../components/settings/Integration'
import CallForwarding from '../components/settings/CallForwarding'

class Settings extends Component {
  state = {
    activeComponent: this.props.activeComponent,
    activeTab: this.props.activeTab
  }

  handleData = (data, initialTab) => {
    this.setState({
      activeComponent: data,
      activeTab: initialTab
    })
  }

  handleTabData = tabData => {
    this.setState({ activeTab: tabData })
  }

  render() {
    const { dataComponent, dataTitle } = this.props

    const { activeComponent, activeTab } = this.state

    let dataInnerMenu = []

    dataComponent.forEach(item => {
      dataInnerMenu.push(item.mainSidebar)
    })

    let matchedItem = dataComponent.find(item => {
      return item.mainSidebar.replace(/\s/g, '') === activeComponent
    })

    let dataInnerTabs = []
    let dataInnerTabsMenu

    if (matchedItem) {
      dataInnerTabs = matchedItem.innerTabs
      dataInnerTabsMenu = matchedItem.innerTabs[0]
    }

    let ActiveTabComponent = MySettingsAccount
    if (activeComponent === 'MySettings' && activeTab === 'Account') {
      ActiveTabComponent = MySettingsAccount
    } else if (
      activeComponent === 'MySettings' &&
      activeTab === 'Notifications'
    ) {
      ActiveTabComponent = MySettingsNotifications
    } else if (activeComponent === 'CallSettings' && activeTab === 'Calls') {
      ActiveTabComponent = MySettingsCalls
    } else if (
      activeComponent === 'CallSettings' &&
      activeTab === 'Schedules'
    ) {
      ActiveTabComponent = ScheduleSettings
    } else if (
      activeComponent === 'CallSettings' &&
      activeTab === 'Countries'
    ) {
      ActiveTabComponent = CountriesSettings
    } else if (activeComponent === 'CallSettings' && activeTab === 'SMS') {
      ActiveTabComponent = SmsSettings
    } else if (
      activeComponent === 'TeamSettings' &&
      activeTab === 'Team Settings'
    ) {
      ActiveTabComponent = TeamSettings
    } else if (
      activeComponent === 'TeamSettings' &&
      activeTab === 'Manage Teammates'
    ) {
      ActiveTabComponent = ManageTeammates
    } else if (
      activeComponent === 'CallSettings' &&
      activeTab === 'BlackList'
    ) {
      ActiveTabComponent = BlackListSettings
    } else if (activeComponent === 'Billing' && activeTab === 'Invoices') {
      ActiveTabComponent = Invoices
    } else if (activeComponent === 'Billing' && activeTab === 'Billing info') {
      ActiveTabComponent = BillingInfo
    } else if (activeComponent === 'Billing' && activeTab === 'Usage') {
      ActiveTabComponent = Usage
    } else if (
      activeComponent === 'Billing' &&
      activeTab === 'Payment methods'
    ) {
      ActiveTabComponent = PaymentMethod
    } else if (activeComponent === 'Billing' && activeTab === 'Subscription') {
      ActiveTabComponent = SubscriptionSettings
    } else if (
      activeComponent === 'Integration' &&
      activeTab === 'Integration'
    ) {
      ActiveTabComponent = Integration
    } else if (
      activeComponent === 'CallForwarding' &&
      activeTab === 'Call Forwarding'
    ) {
      ActiveTabComponent = CallForwarding
    }
    console.log(activeComponent)
    return (
      <div>
        <Title data={dataTitle} dataInvoice={this.state.activeTab} />
        <div className="dashboard-wrapper inner-main-contaner">
          <InnerSideBar
            dataInnerMenu={dataComponent}
            tabs={dataInnerTabs}
            activeComponent={this.props.activeComponent}
            handleData={this.handleData}
          />
          <div className="tab-wrapper">
            <InnerTabs
              tabs={dataInnerTabs}
              dataTabs={dataInnerTabsMenu}
              handleTabData={this.handleTabData}
            />
            <div className="activeComponent-wrapper">
              <ActiveTabComponent />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Settings
