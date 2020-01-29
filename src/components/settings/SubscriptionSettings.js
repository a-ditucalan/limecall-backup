import React, { Component } from 'react'
import { Icon } from 'semantic-ui-react'

import Toggle from '../../common/CommonToggle'
import SubscriptionTable from './SubscriptionTable'
import getAvailablePlans from '../../config/getAvailablePlans'
const callToggle = {
  callTitle: '',
  callDesc: '',
  callId: 'autoRecharge',
  callref: 'toggleRecharge'
}

class SubscriptionSettings extends Component {
  state = {
    tables: {
      totalUsage: {
        type: '3',
        header: [
          { headerTitle: 'Call Made To' },
          { headerTitle: 'Time' },
          { headerTitle: 'Credits Used' }
        ],
        tableContentData: [
          {
            columnOne: '+ 71-5676545443',
            columnTwo: '22-05-2019 22:45',
            columnThree: '$ 0.87'
          }
        ]
      },
      subscription: {
        header: [
          { headerTitle: 'Product' },
          { headerTitle: 'Current Plan' },
          { headerTitle: 'Status' },
          { headerTitle: 'Ends at' },
          { headerTitle: '' },
          { headerTitle: '' }
        ],
        tableContentData: [
          {
            product: 'Limecall',
            currentPlan: 'Starter',
            status: 'Active',
            ends: '08/09/2019',
            cancel: 'Cancel Subscription',
            upgrade: 'Upgrade your plan',
            isModalOpen: false
          }
        ]
      }
    },
    activeToggle: false
  }

  handleToggleData = toggleData => {
    this.setState({ activeToggle: toggleData })
  }

  componentDidMount() {
    getAvailablePlans()
      .then(res => {
        console.log(res.data)
      })
      .catch(err => {
        console.log(err)
      })
  }

  render() {
    const { tables } = this.state

    return (
      <div className="billing-subscription">
        <div className="credits">
          <div className="available-credits">
            <p className="title available-phone-credits">
              Available Phone Credits
            </p>
            <p className="credit-value">
              $ 0.786 <span className="btn-add-credits">Add Credits</span>
            </p>
          </div>
          <div className="auto-recharge">
            <p className="title auto-recharge-text">
              Auto recharge
              <Icon fitted name="question circle" />
            </p>
            <Toggle
              dataStateToggle={callToggle}
              dataToggleActive={this.state.activeToggle}
              handleToggleData={this.handleToggleData}
            />
          </div>
        </div>
        <div className="holder-subscription">
          <SubscriptionTable dataTable={tables.subscription} />
        </div>
      </div>
    )
  }
}

export default SubscriptionSettings
