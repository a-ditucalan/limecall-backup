import React, { useState } from 'react'

import CommonInput from '../../common/CommonInput'
import CommonButtons from '../../common/CommonButtons'
import CommonTable from '../../common/CommonTable'

const BlackListSettings = () => {
  const [tables, setTables] = useState({
    phoneNumber: {
      type: '3',
      header: [
        { headerTitle: 'Phone Number' },
        { headerTitle: 'Reason' },
        { headerTitle: 'Date' }
      ],
      tableContentData: []
    },
    ipAddress: {
      type: '3',
      header: [
        { headerTitle: 'IP Address' },
        { headerTitle: 'Reason' },
        { headerTitle: 'Date' }
      ],
      tableContentData: []
    },
    users: {
      type: '3',
      header: [
        { headerTitle: 'ID' },
        { headerTitle: 'Reason' },
        { headerTitle: 'Date' }
      ],
      tableContentData: []
    }
  })
  const [inputs, setInputs] = useState({ id: '', reason: '', date: '' })

  const onChange = e => {
    const { name, value } = e.target

    //Init new date variable
    const dateObj = new Date()
    const month = dateObj.getUTCMonth() + 1 //months from 1-12
    const day = dateObj.getUTCDate()
    const year = dateObj.getUTCFullYear()
    const newdate = day + '/' + month + '/' + year

    inputs[name] = value
    inputs.date = newdate

    setInputs(inputs)
  }

  const onSave = () => {
    //regex for mac addresses
    // const isMac = /^(([A-Fa-f0-9]{2}[:]){5}[A-Fa-f0-9]{2}[,]?)+$/i
    //regex for ip addresses
    const isIpAdd = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/
    //regex for ph phone number
    const isPhoneNumber = /^(09|\+639)\d{9}$/

    const dataContent = {
      columnOne: inputs.id,
      columnTwo: inputs.reason,
      columnThree: inputs.date
    }

    if (isIpAdd.test(inputs.id)) {
      let data = tables.ipAddress.tableContentData
      let existingData = []

      data.forEach(item => {
        existingData.push(item.columnOne)
      })

      if (existingData.indexOf(dataContent.columnOne) === -1) {
        tables.ipAddress.tableContentData = [
          ...tables.ipAddress.tableContentData,
          dataContent
        ]
      } else {
        alert(`${inputs.id} has a duplicate!`)
      }
      setTables(tables)
    } else if (isPhoneNumber.test(inputs.id)) {
      let data = tables.phoneNumber.tableContentData
      let existingData = []

      data.forEach(item => {
        existingData.push(item.columnOne)
      })

      if (existingData.indexOf(dataContent.columnOne) === -1) {
        tables.phoneNumber.tableContentData = [
          ...tables.phoneNumber.tableContentData,
          dataContent
        ]
      } else {
        alert(`${inputs.id} has a duplicate!`)
      }

      setTables(tables)
    } else {
      let data = tables.users.tableContentData
      let existingData = []

      data.forEach(item => {
        existingData.push(item.columnOne)
      })

      if (existingData.indexOf(dataContent.columnOne) === -1) {
        tables.users.tableContentData = [
          ...tables.users.tableContentData,
          dataContent
        ]
      } else {
        alert(`${inputs.id} has a duplicate!`)
      }
      setTables(tables)
    }
  }
  console.log(tables.phoneNumber)
  return (
    <div className="blacklist-settings">
      <h1 className="bold-text page-title">Block user</h1>
      <p className="subtext">
        Block unwanted contacts and IP's (e.g. +22 607 123 4567, 192.0.2.7, or
        68c1:da10:9008:4ab2:88ee:f68e:33c1:1154)
      </p>
      <div className="holder-input">
        <CommonInput
          onChange={onChange}
          name="id"
          type="text"
          title="Enter Phone number or IP address"
          background="gray"
        />
      </div>
      <div className="holder-input">
        <CommonInput
          onChange={onChange}
          name="reason"
          type="text"
          title="Reason for Blocking ( Optional )"
          background="gray"
        />
        <CommonButtons
          onClick={onSave}
          type="submit"
          content="Block"
          background="blue"
        />
      </div>
      <div className="holder-table">
        <h2 className="table-title">Blocked Phone numbers</h2>
        <CommonTable dataTable={tables.phoneNumber} />
      </div>
      <div className="holder-table">
        <h2 className="table-title">Blocked IP Address</h2>
        <CommonTable dataTable={tables.ipAddress} />
      </div>
      <div className="holder-table">
        <h2 className="table-title">Blocked Users</h2>
        <CommonTable dataTable={tables.users} />
      </div>
    </div>
  )
}

export default BlackListSettings
