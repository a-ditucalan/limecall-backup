import React, { useState } from 'react'
import classnames from 'classnames'

import Input from '../../common/CommonInput'
import Button from '../../common/CommonButtons'
import InputValidator from '../../common/validator'

const BillingInfo = () => {
  const [data, setData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    companyName: '',
    address1: '',
    address2: '',
    country: '',
    city: '',
    state: ''
  })
  const [errors, setErrors] = useState('')

  const handleValidation = () => {
    let fields = data
    let errors = {}
    let formIsValid = true

    let checkIfNotEmptyArr = [
      'firstName',
      'lastName',
      'companyName',
      'address1',
      'address2',
      ' country',
      'city',
      'state'
    ]

    checkIfNotEmptyArr.forEach(item => {
      if (!InputValidator.checkIfNotEmpty(fields[item])) {
        formIsValid = false
        errors[item] = 'This is a required field'
      }
    })

    if (!InputValidator.checkIfEmailFormat(fields['email'])) {
      formIsValid = false
      if (!errors['email'])
        errors['email'] = 'Please enter a valid email address'
    }

    setErrors(errors)

    return formIsValid
  }

  const onChangeInput = e => {
    const key = e.target.name
    const value = e.target.value
    data[key] = value

    setData(data)
  }

  const onClickUpdate = () => {
    if (handleValidation()) {
      alert('update success')
    } else {
      alert('not valid')
    }
  }

  return (
    <div className="billing-info-wrapper">
      <div className="billing-title-holder">
        <h2 className="billinginfo-title bold-text">
          Your Billing Information
        </h2>
      </div>
      <div className="billinginfo-content">
        <form method="" action="">
          <div className="billinginfo-input-holder">
            <div
              className={classnames('input-invi-wrapper', {
                'on-error': errors.firstName
              })}
            >
              <Input
                onChange={onChangeInput}
                type="text"
                name="firstName"
                title="First Name"
                required={true}
              />
            </div>
            <div
              className={classnames('input-invi-wrapper', {
                'on-error': errors.lastName
              })}
            >
              <Input
                onChange={onChangeInput}
                type="text"
                name="lastName"
                title="Last Name"
                required={true}
              />
            </div>
          </div>
          <div className="billinginfo-input-holder">
            <div
              className={classnames('input-invi-wrapper', {
                'on-error': errors.email
              })}
            >
              <Input
                onChange={onChangeInput}
                type="email"
                name="email"
                title="Email"
                required={true}
              />
            </div>
            <div
              className={classnames('input-invi-wrapper', {
                'on-error': errors.companyName
              })}
            >
              <Input
                onChange={onChangeInput}
                type="text"
                name="companyName"
                title="Company Name"
                required={true}
              />
            </div>
          </div>
          <div className="billinginfo-input-holder">
            <div
              className={classnames('input-invi-wrapper', {
                'on-error': errors.address1
              })}
            >
              <Input
                onChange={onChangeInput}
                type="text"
                name="address1"
                title="Address Line 1."
                required={true}
              />
            </div>
            <div
              className={classnames('input-invi-wrapper', {
                'on-error': errors.address2
              })}
            >
              <Input
                onChange={onChangeInput}
                type="text"
                name="address2"
                title="Address Line 2."
                required={true}
              />
            </div>
          </div>
          <div className="billinginfo-input-holder-last">
            <div
              className={classnames('input-invi-wrapper', {
                'on-error': errors.country
              })}
            >
              <Input
                onChange={onChangeInput}
                type="text"
                name="country"
                title="Country"
                required={true}
              />
            </div>
            <div
              className={classnames('input-invi-wrapper', {
                'on-error': errors.city
              })}
            >
              <Input
                onChange={onChangeInput}
                type="text"
                name="city"
                title="City"
                required={true}
              />
            </div>
            <div
              className={classnames('input-invi-wrapper', {
                'on-error': errors.state
              })}
            >
              <Input
                onChange={onChangeInput}
                type="text"
                name="state"
                title="State"
                required={true}
              />
            </div>
          </div>
          <Button
            onClick={onClickUpdate}
            content="Update"
            type="submit"
            background="blue"
            btnClass="btn-billing"
          />
        </form>
      </div>
    </div>
  )
}

export default BillingInfo
