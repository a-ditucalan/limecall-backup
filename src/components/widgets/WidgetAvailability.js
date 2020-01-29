import React from 'react'
import { Link } from 'react-router-dom'

import CommonInput from '../../common/CommonInput'
import CommonSelect from '../../common/CommonSelect'
import CommonButton from '../../common/CommonButtons'

import iconSet from '../../assets/images/Dashboard 2-05.png'
import circlePlus from '../../assets/images/cicle-plus.png'

export const WidgetAvailabilityTitle = () => (
  <div className="accordion-widget-holder">
    <div className="accordion-image-holder">
      <img src={iconSet} alt="logo" />
    </div>
    <div className="accordion-title-holder">
      <h2 className="accordion-title">Set Your availability</h2>
      <p className="accordion-description">Set team office and reply times</p>
    </div>
  </div>
)

export const WidgetAvailabilityContent = ({
  onClickAddOfficeHour,
  onChangeSelectOfficeHour
}) => {
  return (
    <div className="set-availability-wrapper">
      <h2 className="set-availability-title">Set office hours</h2>
      <p className="set-availability-desc">
        Outside these hours, customers see when you'll be back, relative to
        their timezone.
      </p>
      <p className="set-availability-desc">
        Your workspace's timezone is <Link to="#">Kolkata</Link>
      </p>
      <div className="set-hours-wrapper">
        <CommonInput
          name="daysInput"
          inputStyle="days-input"
          type="text"
          value="weekdays"
        />
        <CommonSelect
          onChange={onChangeSelectOfficeHour}
          name="officeHourFrom"
          className="set-hours-select"
          options={[
            ' ',
            '12:00 AM',
            '1:00 AM',
            '2:00 AM',
            '3:00 AM',
            '4:00 AM',
            '5:00 AM',
            '6:00 AM',
            '7:00 AM',
            '8:00 AM',
            '9:00 AM',
            '10:00 AM',
            '11:00 AM',
            '12:00 PM',
            '1:00 PM',
            '2:00 PM',
            '3:00 PM',
            '4:00 PM',
            '5:00 PM',
            '6:00 PM',
            '7:00 PM',
            '8:00 PM',
            '9:00 PM',
            '10:00 PM',
            '11:00 PM'
          ]}
        />
        <p className="to-text">to</p>
        <CommonSelect
          onChange={onChangeSelectOfficeHour}
          name="officeHourTo"
          className="set-hours-select"
          options={[
            ' ',
            '12:00 AM',
            '1:00 AM',
            '2:00 AM',
            '3:00 AM',
            '4:00 AM',
            '5:00 AM',
            '6:00 AM',
            '7:00 AM',
            '8:00 AM',
            '9:00 AM',
            '10:00 AM',
            '11:00 AM',
            '12:00 PM',
            '1:00 PM',
            '2:00 PM',
            '3:00 PM',
            '4:00 PM',
            '5:00 PM',
            '6:00 PM',
            '7:00 PM',
            '8:00 PM',
            '9:00 PM',
            '10:00 PM',
            '11:00 PM'
          ]}
        />
      </div>
      <CommonButton
        onClick={onClickAddOfficeHour}
        content="add office hours"
        btnClass="btn-hours"
        image={circlePlus}
      />
    </div>
  )
}
