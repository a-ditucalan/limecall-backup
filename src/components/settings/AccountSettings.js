import React, { useState } from 'react'
import { Accordion } from 'semantic-ui-react'
import classnames from 'classnames'

import CommonInput from '../../common/CommonInput'
import CommonButtons from '../../common/CommonButtons'
import InputValidator from '../../common/validator'

import updateProfile from '../../config/updateProfile'

const AccountSettings = () => {
  const [activeIndexs, setActiveIndexs] = useState([0, 1, 2])
  const [data, setData] = useState({
    companyName: '',
    firstName: '',
    lastName: '',
    email: '',
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  })
  const [errors, setError] = useState('')

  const handleValidation = () => {
    let fields = data
    let errors = {}
    let formIsValid = true

    let checkIfNotEmptyArr = [
      'email',
      'confirmPassword',
      'newPassword',
      'currentPassword'
    ]

    if (
      !InputValidator.checkIfEqual(
        fields['newPassword'],
        fields['confirmPassword']
      )
    ) {
      formIsValid = false
    }

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

    setError(errors)
    return formIsValid
  }

  const onChange = e => {
    const { name, value } = e.target

    data[name] = value
    setData(data)
  }

  const onUpdate = e => {
    if (handleValidation()) {
      alert('Login success')
      updateProfile(data)
    }
  }

  const handleClick = (e, titleProps) => {
    const { index } = titleProps
    const newIndex = activeIndexs
    const currentIndexPosition = activeIndexs.indexOf(index)

    if (currentIndexPosition > -1) {
      newIndex.splice(currentIndexPosition, 1)
    } else {
      newIndex.push(index)
    }

    setActiveIndexs(newIndex)
  }

  return (
    <div className="account-settings">
      <form method="" action="">
        <Accordion className="holder-account">
          <div className="accordion-holder company-information">
            <Accordion.Title
              active={activeIndexs.includes(0)}
              index={0}
              onClick={handleClick}
            >
              <p className="bold-text accordion-title">Company Information</p>
              <p className="subtext accordion-desc">
                Configure Company information to help visitors recognise and
                connect with your brand
              </p>
            </Accordion.Title>
            <Accordion.Content active={activeIndexs.includes(0)}>
              <div className="holder-input">
                <CommonInput
                  onChange={onChange}
                  name="companyName"
                  title="Company Name"
                />
              </div>
            </Accordion.Content>
          </div>
          <div className="accordion-holder account-information">
            <Accordion.Title
              active={activeIndexs.includes(1)}
              index={1}
              onClick={handleClick}
            >
              <p className="bold-text accordion-title">Account Information</p>
              <p className="subtext accordion-desc">
                Set Information about your self
              </p>
            </Accordion.Title>
            <Accordion.Content active={activeIndexs.includes(1)}>
              <div className="holder">
                <CommonInput
                  onChange={onChange}
                  name="firstName"
                  type="text"
                  title="First Name"
                  background="gray"
                />
                <CommonInput
                  onChange={onChange}
                  name="lastName"
                  type="text"
                  title="Last Name"
                  background="gray"
                />
                <div
                  className={classnames('input-invi-wrapper', {
                    'on-error': errors.email
                  })}
                >
                  <CommonInput
                    onChange={onChange}
                    name="email"
                    type="email"
                    title="Email Address"
                    background="gray"
                    required={true}
                  />
                </div>
              </div>
            </Accordion.Content>
          </div>
          <div className="accordion-holder change-password">
            <Accordion.Title
              active={activeIndexs.includes(2)}
              index={2}
              onClick={handleClick}
            >
              <p className="bold-text accordion-title">Change Password</p>
              <p className="subtext accordion-desc">
                Update your secret combination of letters, numbers and symbols
              </p>
            </Accordion.Title>
            <Accordion.Content active={activeIndexs.includes(2)}>
              <div className="holder-change-password">
                <div
                  className={classnames('input-invi-wrapper', {
                    'on-error': errors.currentPassword
                  })}
                >
                  <CommonInput
                    onChange={onChange}
                    name="currentPassword"
                    type="password"
                    title="Current Password"
                    background="gray"
                    required={true}
                  />
                </div>
                <div
                  className={classnames('input-invi-wrapper', {
                    'on-error': errors.newPassword
                  })}
                >
                  <CommonInput
                    onChange={onChange}
                    name="newPassword"
                    type="password"
                    title="New Password"
                    background="gray"
                    required={true}
                    passwordBar={true}
                    passwordData={data['newPassword']}
                  />
                </div>
                <div
                  className={classnames('input-invi-wrapper', {
                    'on-error': errors.confirmPassword
                  })}
                >
                  <CommonInput
                    onChange={onChange}
                    name="confirmPassword"
                    type="password"
                    title="Confirm Password"
                    background="gray"
                  />
                </div>
              </div>
              <CommonButtons
                onClick={onUpdate}
                type="submit"
                content="Update"
                background="blue"
              />
            </Accordion.Content>
          </div>
        </Accordion>
      </form>
    </div>
  )
}

export default AccountSettings
