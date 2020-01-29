import React, { Component } from 'react'

import Title from '../common/Title'
import HomeBanner from '../components/home/HomeBanner'
import HomeContent from '../components/home/HomeContent'
import Chart from '../common/Chart'
import CardBox from '../common/CardBox'
import CommonTable from '../common/CommonTable'

class Home extends Component {
  state = {
    titleContent: {
      titleOne: 'Welcome Back,',
      titleTwo: 'Ravi'
    },
    visitor: {
      title: 'visitors',
      legend: false,
      stepSize: '5',
      yAxes: false,
      padding: {
        top: '20',
        right: '80',
        bottom: '20',
        left: '50'
      },
      gridLines: false,
      fontSize: 16,
      fontStyle: '400',
      labels: [
        '3rd April',
        '6th April',
        '7th April',
        '8th April',
        '9th April',
        '10th April'
      ],
      datasets: [
        {
          label: 'All Calls',
          fill: false,
          backgroundColor: 'rgba(249,166,9,1)',
          borderColor: 'rgba(249,166,9,1)',
          borderCapStyle: 'butt',
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: 'miter',
          pointBorderColor: 'rgba(249,166,9,1)',
          pointBackgroundColor: '#fff',
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: 'rgba(249,166,9,1)',
          pointHoverBorderColor: 'rgba(249,166,9,1)',
          pointHoverBorderWidth: 1,
          pointRadius: 10,
          pointHitRadius: 10,
          data: [3, 4, 5, 6, 7, 8],
          options: {
            legend: {
              diplay: false
            },
            tooltips: {
              enabled: false
            }
          }
        }
      ]
    },
    data: {
      title: 'all activities',
      legend: true,
      stepSize: '10',
      yAxes: true,
      padding: {
        top: '0',
        right: '0',
        bottom: '0',
        left: '0'
      },
      fontSize: 14,
      fontStyle: '600',
      gridLines: true,
      labels: [
        '',
        '23/03/29',
        '23/04/2019',
        '23/05/2019',
        '23/06/2019',
        '23/07/2019',
        '23/08/2019',
        '23/10/2019'
      ],
      datasets: [
        {
          label: 'All Calls',
          fill: false,
          backgroundColor: 'rgba(31,133,254,1)',
          borderColor: 'rgba(31,133,254,1)',
          borderCapStyle: 'butt',
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: 'miter',
          pointBorderColor: 'rgba(31,133,254,1)',
          pointBackgroundColor: '#fff',
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: 'rgba(31,133,254,1)',
          pointHoverBorderColor: 'rgba(31,133,254,1)',
          pointHoverBorderWidth: 1,
          pointRadius: 8,
          pointHitRadius: 10,
          data: [0, 2, 4, 5, 2, 1],
          options: {
            tooltips: {
              mode: 'point'
            }
          }
        },
        {
          label: 'Successful calls',
          fill: false,
          backgroundColor: 'rgba(41,128,2,1)',
          borderColor: 'rgba(41,128,2,1)',
          borderCapStyle: 'butt',
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: 'miter',
          pointBorderColor: 'rgba(41,128,2,1)',
          pointBackgroundColor: '#fff',
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: 'rgba(41,128,2,1)',
          pointHoverBorderColor: 'rgba(41,128,2,1)',
          pointHoverBorderWidth: 2,
          pointRadius: 8,
          pointHitRadius: 10,
          data: [0, 2, 5, 7, 5, 4, 8, 4]
        },
        {
          label: 'Unsuccessful call',
          fill: false,
          backgroundColor: 'rgba(102,102,102,1)',
          borderColor: 'rgba(102,102,102,1)',
          borderCapStyle: 'butt',
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: 'miter',
          pointBorderColor: 'rgba(102,102,102,1)',
          pointBackgroundColor: '#fff',
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: 'rgba(102,102,102,1)',
          pointHoverBorderColor: 'rgba(102,102,102,1)',
          pointHoverBorderWidth: 2,
          pointRadius: 8,
          pointHitRadius: 10,
          data: [0, 4, 5, 6, 7, 8]
        },
        {
          label: 'Calls from website',
          fill: false,
          backgroundColor: 'rgba(59,89,153,1)',
          borderColor: 'rgba(59,89,153,1)',
          borderCapStyle: 'butt',
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: 'miter',
          pointBorderColor: 'rgba(59,89,153,1)',
          pointBackgroundColor: '#fff',
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: 'rgba(59,89,153,1)',
          pointHoverBorderColor: 'rgba(59,89,153,1)',
          pointHoverBorderWidth: 2,
          pointRadius: 8,
          pointHitRadius: 10,
          data: [0, 1, 2, 3]
        },
        {
          label: 'Lorem Ipsum',
          fill: false,
          backgroundColor: 'rgba(249,166,9,1)',
          borderColor: 'rgba(249,166,9,1)',
          borderCapStyle: 'butt',
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: 'miter',
          pointBorderColor: 'rgba(249,166,9,1)',
          pointBackgroundColor: '#fff',
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: 'rgba(249,166,9,1)',
          pointHoverBorderColor: 'rgba(249,166,9,1)',
          pointHoverBorderWidth: 2,
          pointRadius: 8,
          pointHitRadius: 10,
          data: [0, 10, 3, 9, 4, 5, 8, 2],
          options: {
            bezierCurve: true,
            title: {
              fontSize: 25
            },
            tooltips: {
              mode: 'point',
              enabled: true
            },
            layout: {
              padding: {
                left: 50,
                right: 0,
                top: 0,
                bottom: 0
              }
            }
          }
        }
      ]
    },
    toplead: {
      type: 'topLead',
      title: 'Top Lead Generating Pages'
    },
    cardboxData: [
      {
        type: 'flatRate',
        title: 'LEAD RESPONSE TIME',
        callLog: '00',
        callSup: 's'
      },
      {
        type: 'flatRate',
        title: 'AGENT ANSWERRATE',
        callLog: '00%'
      },
      {
        type: 'flatRate',
        title: 'CUSTOMER ANSWER RATE',
        callLog: '00%'
      },
      {
        type: 'flatRate',
        title: 'AVERAGE CALL DURATION',
        callLog: '00',
        callSup: 's'
      }
    ],
    usage: {
      type: 'usage',
      title: 'Usage',
      usageLog: '0/0',
      usageDescription: 'in this subscription period'
    },
    currentCall: {
      type: 'currentCalls',
      title: 'Current Calls'
    },
    dataTable: {
      type: '3',
      header: [
        {
          headerTitle: 'ID'
        },
        {
          headerTitle: 'Source'
        },
        {
          headerTitle: 'Scheduled time'
        }
      ],
      tableContentData: [
        {
          id: '#456765',
          name: 'Alpha Team',
          type: 'Primary'
        }
      ]
    }
  }

  render() {
    return (
      <div className="fullwidth-container">
        <Title data={this.state.titleContent} />
        <HomeBanner />
        <HomeContent />
        <div className="chart-wrapper">
          <Chart data={this.state.data} />
        </div>
        <div className="homecontent-wrapper">
          <div className="cardbox-wrapper">
            {this.state.cardboxData.map((item, i) => {
              return <CardBox key={i} cardContent={item} />
            })}
          </div>
          {/* <div className="cardbox-wrapper-lead">
            <CardBox cardContent={this.state.toplead} />
          </div> */}
          <div className="cardbox-container flex-usage-current">
            <div className="cardbox-wrapper-usage">
              <CardBox cardContent={this.state.usage} />
            </div>
            <div className="cardbox-wrapper-current">
              <CardBox cardContent={this.state.currentCall} />
            </div>
          </div>
          <div className="cardbox-container flex-schedule">
            <div className="upcomming-scheduled-wrapper">
              <h2 className="scheduled-text">Upcomming scheduled calls</h2>
              <CommonTable dataTable={this.state.dataTable} />
            </div>
            <div className="visitor-graph-wrapper">
              <div className="visitor-graph-holder">
                <Chart data={this.state.visitor} />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Home
