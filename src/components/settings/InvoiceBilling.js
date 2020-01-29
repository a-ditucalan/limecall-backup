import React, { Component } from 'react'

import CommonTable from '../../common/CommonTable'

class Invoice extends Component {
  state = {
    dataTable: {
      type: '5',
      header: [
        {
          headerTitle: 'ID'
        },
        {
          headerTitle: 'Price'
        },
        {
          headerTitle: 'Date'
        },
        {
          headerTitle: 'Status'
        },
        {
          headerTitle: 'Transaction ID'
        }
      ],
      tableContentData: [
        {
          columnOne: '',
          columnTwo: '',
          columnThree: '',
          columnFour: '',
          columnFive: ''
        }
      ]
    }
  }

  render() {
    return (
      <div className="invoice-wrapper">
        <CommonTable dataTable={this.state.dataTable} />
      </div>
    )
  }
}

export default Invoice
