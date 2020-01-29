import React, { Component } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

import CardBox from '../../common/CardBox'

import message from '../../assets/images/message.png'
import phone from '../../assets/images/Dashboard-11.png'
import clock from '../../assets/images/Dashboard-13.png'

const cardboxData = [
  {
    type: 'monthyUsage',
    title: 'monthly call usage',
    callLog: '0 / 20',
    callDate: '30/04/19 - 29/05/19'
  },
  {
    type: 'contenttext',
    cardImage: message,
    cardNum: '0',
    cardDescription: 'Messages Today'
  },
  {
    type: 'contenttext',
    cardImage: phone,
    cardNum: '0',
    cardDescription: 'Calls Today'
  },
  {
    type: 'contenttext',
    cardImage: clock,
    cardNum: '0',
    cardDescription: 'Upcoming Calls'
  }
]

export default class HomeContent extends Component {
  state = {
    filterTable: {
      type: null,
      startDateFilter: new Date(),
      endDateFilter: new Date(),
      status: null,
      id: null,
      search: null
    }
  }

  handleStartDate = date => {
    const { filterTable } = this.state

    this.setState({
      filterTable: {
        startDateFilter: date,
        endDateFilter: filterTable.endDateFilter
      }
    })
  }

  handleEndDate = date => {
    const { filterTable } = this.state

    this.setState({
      filterTable: {
        startDateFilter: filterTable.startDateFilter,
        endDateFilter: date
      }
    })
  }

  render() {
    const { filterTable } = this.state
    return (
      <div className="homecontent-wrapper">
        <div className="filter-wrapper">
          <div className="filter-holder">
            <DatePicker
              selected={filterTable.startDateFilter}
              onChange={this.handleStartDate}
              dateFormat="MMMM d, yyyy"
            />
            <span className="dash">-</span>
            <DatePicker
              selected={filterTable.endDateFilter}
              onChange={this.handleEndDate}
              dateFormat="MMMM d, yyyy"
            />
          </div>
        </div>
        <div className="cardbox-wrapper">
          {cardboxData.map((item, i) => {
            return <CardBox key={i} cardContent={item} />
          })}
        </div>
      </div>
    )
  }
}
