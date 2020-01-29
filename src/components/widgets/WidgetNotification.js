import React from 'react'

import iconEmail from '../../assets/images/Dashboard 2-08.png'

export const WidgetNotificationTitle = () => (
  <div className="accordion-widget-holder">
    <div className="accordion-image-holder">
      <img src={iconEmail} alt="logo" />
    </div>
    <div className="accordion-title-holder">
      <h2 className="accordion-title">Email, Notification and Time zone.</h2>
      <p className="accordion-description">
        Customize your notifications, set personalized Time zone and more.
      </p>
    </div>
  </div>
)

export const WidgetNotificationContent = ({
  onChangeSelect,
  handleGroupBtnData,
  onChangeInput
}) => {
  return <div className="email-timezone-wrapper"></div>
}
