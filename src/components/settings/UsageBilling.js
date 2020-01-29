import React, { Component } from 'react'

import CommonTable from '../../common/CommonTable'

class Usage extends Component {
  state = {
    dataTable: {
      type: '3',
      header: [
        {
          headerTitle: 'Call Made To'
        },
        {
          headerTitle: 'Time'
        },
        {
          headerTitle: 'Credits Used'
        }
      ],
      tableContentData: [
        {
          columnOne: '+71-5676545443',
          columnTwo: '22-05-2019 22:45',
          columnThree: '$0.87'
        }
      ]
    }
  }

  render() {
    return (
      <div className="usage-wrapper">
        <h2 className="default-text">Total Usage</h2>
        <CommonTable dataTable={this.state.dataTable} />
      </div>
    )
  }
}

export default Usage
