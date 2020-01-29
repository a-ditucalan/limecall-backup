import React, { useState } from 'react'
import ColorPickerQuick from './ColorPickerQuick'
import { TextArea } from 'semantic-ui-react'

import CommonInput from '../../../common/CommonInput'
import CommonSelect from '../../../common/CommonSelect'
import ContentFooter from '../ContentFooter'

const Customize = props => {
  const { onClick } = props
  const [language, setLanguage] = useState('English')
  const [companyName, setCompanyName] = useState('')
  const [message, setMessage] = useState('')

  const onChangeTextArea = e => {
    const value = e.target.value

    setMessage(value)
  }

  const onChangeInput = e => {
    const companyValue = e.target.value

    setCompanyName(companyValue)
  }

  const onChangeSelect = e => {
    const value = e.target.innerText

    setLanguage(value)
  }

  return (
    <div className="customize">
      <div className="customize-title-wrapper">
        <h2 className="customize-title">
          Customize assistant to match your brand and website.
        </h2>
      </div>
      <ColorPickerQuick />
      <div className="company-wrapper align-box">
        <h2 className="title">Company Name</h2>
        <CommonInput
          onChange={onChangeInput}
          name="companyName"
          type="text"
          inputStyle="input-company"
        />
      </div>
      <div className="welcome-wrapper align-box">
        <h2 className="title">Welcome Message</h2>
        <TextArea
          onChange={onChangeTextArea}
          placeholder="e.g. lorem ipsum dolor sit amet"
          className="welcome-textarea"
          rows="5"
        />
      </div>

      <div className="language-wrapper align-box">
        <h2 className="title">Default Language</h2>
        <CommonSelect
          onChange={onChangeSelect}
          className="language-select"
          name="language"
          options={[' ', 'English']}
        />
      </div>
      <ContentFooter onClick={onClick} />
    </div>
  )
}

export default Customize
