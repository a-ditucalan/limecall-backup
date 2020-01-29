import React from 'react'

import BannerImage from '../../assets/images/Dashboard-93.png'

const WidgetBanner = () => {
  return (
    <div className="widget-banner">
      <div className="banner-icon">
        <img src={BannerImage} alt="icon" />
      </div>
      <div className="banner-description-wrapper">
        <h1 className="banner-title">Customize your widget</h1>
        <p className="banner-description">
          Help your customers by calling them, now or at some other scheduled
          time
        </p>
      </div>
    </div>
  )
}

export default WidgetBanner
