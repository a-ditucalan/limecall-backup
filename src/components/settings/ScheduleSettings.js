import React, { Component } from 'react'

import CommonInput from '../../common/CommonInput'
import CommonButtons from '../../common/CommonButtons'

class ScheduleSettings extends Component {
  state = {
    data: {
      inputTimeslotInterval: '',
      inputCallsPerTimeslot: '',
      inputBufferTime: '',
      inputScheduleDays: '',
      inputTimeFormat: ''
    }
  }

  onChange = e => {
    const { name, value } = e.target
    const { data } = this.state
    data[name] = value

    this.setState({ data })
  }

  onSave = e => {
    const { data } = this.state

    console.log(data)
  }

  render() {
    const items = [
      {
        itemTitle: 'Timeslot interval',
        itemDesc:
          'Intervals between timeslots where customers can choose to schedule calls.',
        name: 'inputTimeslotInterval'
      },
      {
        itemTitle: 'Calls per timeslot',
        itemDesc: 'Limit the number of calls allowed for each timeshot',
        name: 'inputCallsPerTimeslot'
      },
      {
        itemTitle: 'Schedule buffer time',
        itemDesc: 'Buffer time before a call can be scheduled',
        name: 'inputBufferTime'
      },
      {
        itemTitle: 'Schedule days',
        itemDesc: 'Number of days for available timeslot.',
        name: 'inputScheduleDays'
      },
      {
        itemTitle: 'Time format',
        itemDesc:
          'Customise the format of the time shown when selecting a timeslot for a schedule call',
        name: 'inputTimeFormat'
      }
    ]

    return (
      <div className="call-schedules">
        <form method="" action="">
          {items.map((value, index) => (
            <div className="holder-items" key={index}>
              <div className="holder-text">
                <h2 className="item-title">{value.itemTitle}</h2>
                <p className="subtext item-desc">{value.itemDesc}</p>
              </div>
              <CommonInput
                onChange={this.onChange}
                name={value.name}
                background="gray"
              />
            </div>
          ))}
          <CommonButtons
            onClick={this.onSave}
            type="submit"
            content="Update"
            background="blue"
          />
        </form>
      </div>
    )
  }
}

export default ScheduleSettings
