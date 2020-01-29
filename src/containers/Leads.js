import React, { Component } from 'react'
import { Image, Modal } from 'semantic-ui-react'
import DatePicker from 'react-datepicker'

import LeadTable from '../components/leads/leadTable/LeadTable'

import Title from '../common/Title'
import Chart from '../common/Chart'
import NodeCheckbox from '../common/NodeCheckbox'
import CommonButton from '../common/CommonButtons'
import CommonSelect from '../common/CommonSelect'

import leadLogo from '../assets/images/lead-logo.svg'
import exportIcon from '../assets/images/export.svg'
import {
  dayData,
  dayLabels,
  weekLabels,
  weekData,
  monthLabels,
  monthData
} from '../lib/LeadChartData'
import getLeads from '../config/getLeads'

class Leads extends Component {
  state = {
    //data for chart
    callLog: {
      title: '',
      legend: false,
      stepSize: '10',
      yAxes: true,
      padding: {
        top: '20',
        right: '20',
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
          label: 'call logs',
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
      ],
      isDayActive: false,
      isWeekActive: true,
      isMonthActive: false
    },

    //data for table
    tableData: {
      messages: [],
      call: [],
      schedules: [],
      isCall: false,
      isMessages: true,
      isSchedules: false
    },

    //current table content
    tableDataContent: [],

    //for tanble pagination
    tableDataTotalItem: 0,
    pageNumber: 1,
    startItemCount: 0,
    endItemCount: 0,

    //edit fields checkbox state
    nodeCheckBoxFields: [],

    //filter fields state
    filterTable: {
      type: null,
      startDateFilter: new Date(),
      endDateFilter: new Date(),
      status: null,
      search: null,
      score: null,
      agent: null
    },

    //check if all marked
    isMarkAllCheckbox: false,

    //modal state
    open: false
  }

  componentDidMount() {
    this.fetchData()
    // this.updateData()

    getLeads()
      .then(res => {
        console.log(res)
      })
      .catch(err => console.log(err))
  }

  componentWillUnmount() {
    if (this.interval) {
      clearTimeout(this.interval)
      this.interval = 0
    }
  }

  updateData = () => {
    const category = document
      .querySelectorAll('.filter .active')[1]
      .innerHTML.toLocaleLowerCase()
    this.filterDataPerPage(category)
  }

  fetchData = () => {
    getLeads()
      .then(res => {
        res.data.data.map((item, i) => {
          let { tableData } = this.state
          if (item.type === 'SCHEDULE_CALL') {
            const data = {
              isChecked: false,
              id: item.id,
              time: item.request_call_time,
              contact: item.phone_number,
              email: item.email,
              source: 'Facebook',
              location: 'Banglore, India',
              status: 'Online',
              agent: 'Agent 1',
              score: item.score,
              tag: ['Meeting Scheduled']
            }
            tableData.schedules.push(data)

            this.setState({ tableData }, () => {
              console.log(this.state.tableData)
            })
          } else if (item.type === 'LIVE_CALL') {
            const data = {
              isChecked: false,
              id: item.id,
              time: item.request_call_time,
              contact: item.phone_number,
              email: item.email,
              source: 'Facebook',
              location: 'Banglore, India',
              status: 'Online',
              agent: 'Agent 1',
              score: item.score,
              tag: ['Meeting Scheduled']
            }
            tableData.call.push(data)

            this.setState({ tableData }, () => {
              console.log(this.state.tableData)
            })
          }
        })
        console.log()
      })
      .catch(err => {
        console.log(err)
      })
    // const baseURL = 'http://dev.limecall.com'
    // var form = new FormData()
    // form.append('email', 'mohamed@madridblues.com')
    // form.append('name', 'Mohamed Mamdouh')
    // form.append('password', 'Mm')
    // form.append('password_confirmation', 'Mm')
    // var settings = {
    //   url: `${baseURL}/api/v1/register-api`,
    //   // method: 'POST',
    //   mode: 'no-cors',
    //   headers: {
    //     'Access-Control-Allow-Origin': '*',
    //     'Content-Type': 'application/json'
    //   },
    //   useCredentails: true,
    //   processData: false,
    //   mimeType: 'multipart/form-data',
    //   contentType: false,
    //   data: form
    // }
    // const { url, data, ...rest } = settings
    // axios
    //   .post(url, data, rest)
    //   .then(response => console.log(response))
    //   .catch(err => console.log(err))
    // let { tableData } = this.state
    // const baseURL = 'http://dev.limecall.com'
    // var form = new FormData()
    // form.append('email', 'mohamed@madridblues.com')
    // form.append('name', 'Mohamed Mamdouh')
    // form.append('password', 'Mm')
    // form.append('password_confirmation', 'Mm')
    // var settings = {
    //   url: `${baseURL}/api/v1/register-api`,
    //   method: 'POST',
    //   timeout: 0,
    //   headers: {
    //     Accept: 'application/json'
    //   },
    //   processData: false,
    //   mimeType: 'multipart/form-data',
    //   contentType: false,
    //   data: form
    // }
    // const { url, data, ...rest } = settings
    // axios
    //   .post(url, data, rest)
    //   .then(response => console.log(response))
    //   .catch(err => console.log(err))
    // axios.get(`${baseURL}/api/v1/leads/get-call-by-id?id=117`).then(res => {
    //   const data = res.data
    //   console.log(data)
    //   // tableData.messages = data.messages
    //   // tableData.call = data.call
    //   // tableData.schedules = data.schedules
    //   // this.setState({ ...tableData })
    // })
    // .catch(error => console.log(error))
  }

  filterDataPerPage = cat => {
    this.interval = setTimeout(() => {
      const { tableData } = this.state
      const category = cat.toLowerCase()
      let { tableDataTotalItem, pageNumber } = this.state

      tableDataTotalItem = tableData[category].length
      const limit = 10
      // let totalPages = Math.ceil(tableDataTotalItem / limit)
      let offset = (pageNumber - 1) * limit
      let start = offset + 1
      let lastItemCount = offset + limit
      let end = Math.min(lastItemCount, tableDataTotalItem)

      let temporaryContainer = []

      tableData[category].forEach((value, index) => {
        if (index + 1 >= start && index + 1 <= end) {
          temporaryContainer.push(value)
        } else {
          temporaryContainer.splice(index, 1)
        }
      })

      this.setState({
        startItemCount: start,
        lastItemCount: end,
        tableDataTotalItem,
        tableDataContent: temporaryContainer
      })
    }, 200)
  }

  handleStartDate = date => {
    const { filterTable } = this.state

    filterTable.startDateFilter = date
    this.setState({ ...filterTable })
  }

  handleEndDate = date => {
    const { filterTable } = this.state

    filterTable.endDateFilter = date
    this.setState({ ...filterTable })
  }

  onClickIncrementPage = () => {
    let { pageNumber, tableDataTotalItem } = this.state
    const limit = 10
    let totalPages = Math.ceil(tableDataTotalItem / limit)

    if (pageNumber < totalPages) {
      pageNumber = pageNumber + 1
      this.setState({ pageNumber })
    }

    this.updateData()
  }

  onClickDecrementPage = () => {
    let { pageNumber } = this.state

    if (pageNumber > 1) {
      pageNumber = pageNumber - 1
      this.setState({ pageNumber })
    }

    this.updateData()
  }

  onChangeNodeCheckbox = e => {
    const value = e.target.innerText
    const { nodeCheckBoxFields } = this.state
    const index = nodeCheckBoxFields.indexOf(value)

    if (index === -1) {
      nodeCheckBoxFields.push(value)
    } else {
      nodeCheckBoxFields.splice(index, 1)
    }

    this.setState({ nodeCheckBoxFields })
  }

  onClickMarkCheckbox = e => {
    let { tableDataContent } = this.state
    const index = e.target.parentNode.parentNode.parentNode.getAttribute(
      'data-key'
    )

    tableDataContent[index].isChecked = !tableDataContent[index].isChecked
    this.setState({ ...tableDataContent })
  }

  onClickMarkAllCheckbox = () => {
    let { isMarkAllCheckbox, tableDataContent } = this.state

    isMarkAllCheckbox = !isMarkAllCheckbox

    if (isMarkAllCheckbox) {
      tableDataContent.map(data => {
        return (data.isChecked = true)
      })

      this.setState({ isMarkAllCheckbox, ...tableDataContent })
    } else {
      tableDataContent.map(data => {
        return (data.isChecked = false)
      })

      this.setState({ isMarkAllCheckbox, ...tableDataContent })
    }
  }

  onChangeSelectFilter = e => {
    let { filterTable } = this.state
    const type = e.target.innerHTML
    const name = e.target.parentNode.parentNode.parentNode.getAttribute('name')

    filterTable[name] = type
    this.setState({ ...filterTable })

    const datePicker = document.querySelector('.holder-date')

    if (filterTable.dateRange === 'Custom Date') {
      datePicker.classList.add('show')
    } else {
      datePicker.classList.remove('show')
    }
  }

  onChangeInputFilter = e => {
    let { filterTable } = this.state
    const value = e.target.value
    const name = e.target.name

    filterTable[name] = value
    this.setState({ ...filterTable })
  }

  onClickMark = () => {
    let { isMarkOpen } = this.state
    const body = document.querySelector('body')

    isMarkOpen = !isMarkOpen
    body.classList.add('overflow-hide')

    this.setState({ isMarkOpen })
  }

  onClickDay = () => {
    let { callLog } = this.state

    const day = dayLabels
    const data = dayData

    callLog.labels = day
    callLog.datasets[0].data = data
    callLog.isDayActive = true
    callLog.isWeekActive = false
    callLog.isMonthActive = false

    this.setState({ callLog })
  }

  onClickWeek = () => {
    let { callLog } = this.state

    const week = weekLabels
    const data = weekData

    callLog.labels = week
    callLog.datasets[0].data = data
    callLog.isDayActive = false
    callLog.isWeekActive = true
    callLog.isMonthActive = false

    this.setState({ callLog })
  }

  onClickMonth = () => {
    let { callLog } = this.state

    const month = monthLabels
    const data = monthData

    callLog.labels = month
    callLog.datasets[0].data = data
    callLog.isDayActive = false
    callLog.isWeekActive = false
    callLog.isMonthActive = true

    this.setState({ callLog })
  }

  onClickTableCategory = e => {
    let { tableData, tableDataContent, pageNumber } = this.state
    const target = e.target.innerHTML

    if (target === 'Call') {
      tableData.isCall = true
      tableData.isMessages = false
      tableData.isSchedules = false
    } else if (target === 'Messages') {
      tableData.isCall = false
      tableData.isMessages = true
      tableData.isSchedules = false
    } else {
      tableData.isCall = false
      tableData.isMessages = false
      tableData.isSchedules = true
    }

    pageNumber = 1
    this.filterDataPerPage(target)
    this.setState({
      tableDataContent,
      isMarkAllCheckbox: false,
      pageNumber
    })
  }

  handleScore = e => {
    let { tableDataContent } = this.state
    const dataId = e.target.parentNode.parentNode.parentNode.querySelectorAll(
      'td'
    )[1].innerText

    const score = e.target.getAttribute('data-score')

    tableDataContent.forEach(value => {
      if (value.id === dataId) {
        value.score = score
      }
    })

    this.setState({ tableDataContent })
  }

  toggleTags = e => {
    const dropdown = e.target.querySelector('.holder-dropdown')
    const allDropdown = document.querySelectorAll('.holder-dropdown')

    if (dropdown) {
      allDropdown.forEach(value => {
        value.classList.remove('holder-dropdown-active')
      })
      dropdown.classList.add('holder-dropdown-active')
    } else {
      return
    }
  }

  handleTagsData = e => {
    let { tableDataContent } = this.state
    const tag = e.target.innerText
    const dataId = e.target.parentNode.parentNode.parentNode.querySelectorAll(
      'td'
    )[1].innerText

    tableDataContent.forEach(value => {
      if (value.id === dataId) {
        const index = value.tag.indexOf(tag)

        if (index === -1) {
          value.tag.push(tag)
        } else {
          value.tag.splice(index, 1)
        }
      }
    })

    this.setState({ tableDataContent })
  }

  show = size => () => this.setState({ size, open: true })
  close = () => this.setState({ open: false })

  closeDropdown = e => {
    const { isMarkOpen } = this.state
    const target = e.target.className
    const body = document.querySelector('body')
    const allDropdown = document.querySelectorAll('.holder-dropdown')
    const dropDown = document.querySelector('.holder-export-options')

    if (e.target.classList[0] !== 'btn-export') {
      dropDown.classList.remove('show')
    }

    if (e.target.classList[0] !== 'tags') {
      allDropdown.forEach(value => {
        value.classList.remove('holder-dropdown-active')
      })
    }

    if (isMarkOpen) {
      if (target !== 'checkbox-item' || target !== 'mark active') {
        body.classList.remove('overflow-hide')
        this.setState({ isMarkOpen: false })
      }
    }
  }

  openExportFile = e => {
    const dropDown = document.querySelector('.holder-export-options')
    dropDown.classList.toggle('show')
  }

  render() {
    const {
      callLog,
      tableDataContent,
      tableData,
      isMarkOpen,
      filterTable,
      isMarkAllCheckbox,
      tableDataTotalItem,
      startItemCount,
      lastItemCount,
      pageNumber,
      open,
      size
    } = this.state

    const title = {
      type: 'image',
      titleOne: leadLogo,
      titleTwo: 'Leads'
    }

    const filter = {
      type: ['Type', 'Existing', 'Meeting', 'Opportunity'],
      status: ['Civil Status', 'Online', 'Offline'],
      score: ['Score', '1 star', '2 star', '3 star'],
      agent: ['Agent', 'Agent 1', 'Agent 2', 'Agent 3'],
      dateRange: ['Date', 'Today', 'Last 7 Days', 'Last 30 Days', 'Custom Date']
    }

    return (
      <div className="fullwidth-container lead-container">
        <Title data={title} />
        <div
          onClick={this.closeDropdown}
          className={isMarkOpen ? 'holder-content mark-open' : 'holder-content'}
        >
          {/* <div className="holder-chart">
            <div className="chart-filter">
              <p className="chart-title">Call Log</p>
              <div className="filter">
                <span
                  onClick={this.onClickDay}
                  className={callLog.isDayActive ? 'active' : null}
                >
                  Day
                </span>
                <span
                  onClick={this.onClickWeek}
                  className={callLog.isWeekActive ? 'active' : null}
                >
                  Week
                </span>
                <span
                  onClick={this.onClickMonth}
                  className={callLog.isMonthActive ? 'active' : null}
                >
                  Month
                </span>
              </div>
            </div>
            <Chart data={callLog} />
          </div> */}
          <div className="holder-table">
            <div className="holder-filter">
              <span className="filter-title">Filter By</span>
              <div className="holder-type">
                <CommonSelect
                  onChange={this.onChangeSelectFilter}
                  name="type"
                  placeholder="Type"
                  options={filter.type}
                />
              </div>
              <div className="holder-status">
                <CommonSelect
                  onChange={this.onChangeSelectFilter}
                  name="status"
                  placeholder="Call Status"
                  options={filter.status}
                />
              </div>
              <div className="holder-score">
                <CommonSelect
                  onChange={this.onChangeSelectFilter}
                  name="score"
                  placeholder="Score"
                  options={filter.score}
                />
              </div>
              <div className="holder-agent">
                <CommonSelect
                  onChange={this.onChangeSelectFilter}
                  name="agent"
                  placeholder="Agent"
                  options={filter.agent}
                />
              </div>
              <div className="holder-search">
                <input
                  onChange={this.onChangeInputFilter}
                  name="search"
                  type="text"
                  placeholder="Search..."
                />
              </div>
              <div className="holder-date-range">
                <CommonSelect
                  onChange={this.onChangeSelectFilter}
                  name="dateRange"
                  placeholder="Date"
                  options={filter.dateRange}
                />
              </div>
              <div className="holder-date">
                {/* <span className="title">Date</span> */}
                <div className="holder-datepicker">
                  <DatePicker
                    selected={filterTable.startDateFilter}
                    onChange={this.handleStartDate}
                    dateFormat="MM/dd/yy"
                  />
                </div>
                <span className="dash">-</span>
                <div className="holder-datepicker">
                  <DatePicker
                    selected={filterTable.endDateFilter}
                    onChange={this.handleEndDate}
                    dateFormat="MM/dd/yy"
                  />
                </div>
              </div>
            </div>

            <div className="table">
              <div className="chart-filter">
                <div className="heading">
                  <div className="holder-btn-export">
                    <button
                      className="btn-export"
                      type="button"
                      onClick={this.openExportFile}
                    >
                      <Image src={exportIcon} />
                      Export
                    </button>
                    <div className="holder-export-options">
                      <span>xls</span>
                      <span>cvs</span>
                    </div>
                  </div>
                  <div className="filter">
                    <span
                      onClick={this.onClickTableCategory}
                      className={tableData.isCall ? 'active' : null}
                    >
                      Call
                    </span>
                    <span
                      onClick={this.onClickTableCategory}
                      className={tableData.isMessages ? 'active' : null}
                    >
                      Messages
                    </span>
                    <span
                      onClick={this.onClickTableCategory}
                      className={tableData.isSchedules ? 'active' : null}
                    >
                      Schedules
                    </span>
                  </div>
                </div>
              </div>

              <div className="table-content">
                <div className="holder-pagination">
                  <div className="pagination">
                    <span>Page</span>
                    <div className="page-number">
                      <span className="page">{pageNumber}</span>
                      <button
                        onClick={this.onClickIncrementPage}
                        className="increment"
                      >
                        <i className="fas fa-chevron-up"></i>
                      </button>
                      <button
                        onClick={this.onClickDecrementPage}
                        className="decrement"
                      >
                        <i className="fas fa-chevron-down"></i>
                      </button>
                    </div>
                    <p>
                      {startItemCount} to {lastItemCount} records of total{' '}
                      {tableDataTotalItem}
                    </p>
                  </div>
                  <div className="holder-edit-fields">
                    <button onClick={this.show('large')}>Edit Fields</button>
                    <Modal
                      className="edit-field-modal"
                      size={size}
                      open={open}
                      onClose={this.close}
                    >
                      <Modal.Header>
                        You can edit the type of information that you want to
                        display on your leads` list. You can configure your list
                        with unlimited number of columns, but we recommend to
                        limit columns to max 8.
                      </Modal.Header>
                      <Modal.Content scrolling>
                        <NodeCheckbox
                          onChange={this.onChangeNodeCheckbox}
                          checkboxlist={[
                            'key',
                            'ID',
                            'Name',
                            'Email',
                            'Phone',
                            'Status',
                            'Duration',
                            'List',
                            'Call',
                            'Rating',
                            'View',
                            'Blacklist',
                            'Source/Medium',
                            'Data Created'
                          ]}
                        />
                        <div className="holder-btns">
                          <CommonButton content="Save" background="blue" />
                          <CommonButton
                            onClick={this.close}
                            content="Cancel"
                            background="transparent"
                          />
                        </div>
                      </Modal.Content>
                    </Modal>
                  </div>
                </div>
                <div className="lead-table-holder">
                  <LeadTable
                    tableDataContent={tableDataContent}
                    isMarkAllCheckbox={isMarkAllCheckbox}
                    isMarkOpen={isMarkOpen}
                    onClickMarkAllCheckbox={this.onClickMarkAllCheckbox}
                    onClickMark={this.onClickMark}
                    onClickMarkCheckbox={this.onClickMarkCheckbox}
                    handleScore={this.handleScore}
                    onHoverScore={this.onHoverScore}
                    toggleTags={this.toggleTags}
                    handleTagsData={this.handleTagsData}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Leads
