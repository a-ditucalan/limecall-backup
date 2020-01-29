import React from 'react'
import { TextArea } from 'semantic-ui-react'

import CommonInput from '../../common/CommonInput'
import CommonSelect from '../../common/CommonSelect'
import CommonButton from '../../common/CommonButtons'
import CommonGroupButton from '../../common/CommonGroupButton'

import iconEmail from '../../assets/images/Dashboard 2-08.png'

export const WidgetGeneralTitle = () => (
  <div className="accordion-widget-holder">
    <div className="accordion-image-holder">
      <img src={iconEmail} alt="logo" />
    </div>
    <div className="accordion-title-holder">
      <h2 className="accordion-title">General Settings</h2>
      <p className="accordion-description">
        Customize your notifications, set personalized Time zone and more.
      </p>
    </div>
  </div>
)

export const WidgetGeneralContent = ({
  onChangeSelect,
  handleGroupBtnData,
  onChangeInput
}) => {
  return (
    <div className="email-timezone-wrapper">
      <div className="general-content-wrapper">
        <div className="general-content-holder">
          <p className="general-content-title">Widget Name</p>
          <p className="general-content-desc">
            When turned on, our system is permitted to make automated calls to
            your customers when requited
          </p>
        </div>
        <div className="general-content-holder-right">
          <CommonInput onChange={onChangeInput} name="widgetName" type="text" />
        </div>
      </div>
      <div className="general-content-wrapper">
        <div className="general-content-holder">
          <p className="general-content-title">Email Notification</p>
          <p className="general-content-desc">
            Notification will be sent to this email ("," can be used to separate
            multiple email recipients)
          </p>
        </div>
        <div className="general-content-holder-right">
          <CommonInput
            onChange={onChangeInput}
            name="widgetEmail"
            type="text"
          />
        </div>
      </div>
      <CommonGroupButton
        title="Displayed Company name"
        identity="displayName"
        description="To be used as the company name for this widget"
        leftBtn="Account Company"
        rightBtn="Widget Name"
        groupStyle="displayname-btn"
        handleGroupBtnData={handleGroupBtnData}
      />
      <div className="general-content-wrapper general-content-wrapper-thrid">
        <div className="general-content-holder">
          <p className="general-content-title">Company Logo</p>
          <p className="general-content-desc">
            Upload your logo that appears on the widget.
          </p>
        </div>
        <div className="general-content-holder-right">
          <CommonButton
            type="file"
            content="Upload an Image"
            btnClass="btn-upload"
          />
        </div>
      </div>
      <div className="general-content-wrapper  general-content-wrapper-fourth">
        <div className="general-content-holder">
          <p className="general-content-title">Data Protection Message</p>
          <p className="general-content-desc">
            A customized data protection message that will appear on each page
            of the widget
          </p>
        </div>
        <div className="general-content-holder-right">
          <TextArea
            onChange={onChangeInput}
            rows="5"
            name="dataProtectionMessage"
            className="data-protection-textarea"
          />
        </div>
      </div>
      <div className="general-content-wrapper">
        <div className="general-content-holder">
          <p className="general-content-title">Timezone</p>
          <p className="general-content-desc">Adjust your working hours.</p>
        </div>
        <div className="general-content-holder-right">
          <CommonSelect
            onChange={onChangeSelect}
            className="timezone-select"
            name="timezone"
            options={[' ', 'America/New york', 'Philippines']}
          />
        </div>
      </div>
      <div className="general-content-wrapper general-content-wrapper-fifth">
        <div className="general-content-holder">
          <p className="general-content-title">Widget Language</p>
          <p className="general-content-desc">Set your default language</p>
        </div>
        <div className="general-content-holder-right">
          <CommonSelect
            onChange={onChangeSelect}
            className="widget-language-select"
            name="widgetLanguage"
            options={[' ', 'English']}
          />
        </div>
      </div>
    </div>
  )
}
