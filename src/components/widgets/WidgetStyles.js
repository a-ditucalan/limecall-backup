import React from 'react'

import NodeToggle from '../../common/NodeToggle'
import CommonGroupButton from '../../common/CommonGroupButton'
import CommonColor from '../../common/CommonColor'

import iconStyle from '../../assets/images/Dashboard 2-07.png'

export const WidgetStyleTitle = () => (
  <div className="accordion-widget-holder">
    <div className="accordion-image-holder">
      <img src={iconStyle} alt="logo" />
    </div>
    <div className="accordion-title-holder">
      <h2 className="accordion-title">Style your widget</h2>
      <p className="accordion-description">
        Customize your widget as per your color scheme.
      </p>
    </div>
  </div>
)

export const WidgetStyleContent = ({
  handleGroupBtnData,
  handleDataRef,
  widgetShadow,
  showWidget,
  data
}) => {
  return (
    <div className="style-widget-wrapper">
      <p className="style-widget-title">Widget Button Design</p>
      <NodeToggle handleDataRef={handleDataRef} dataToggle={showWidget[0]} />
      <CommonGroupButton
        value={data.positionBtn}
        title="Position on page"
        identity="positionBtn"
        leftBtn="bottom_left"
        rightBtn="bottom_right"
        handleGroupBtnData={handleGroupBtnData}
      />
      <CommonColor />
      <CommonGroupButton
        value={data.widgetShape}
        title="Widget Shape"
        identity="widgetShape"
        leftBtn="default"
        rightBtn="round"
        groupStyle="default-round"
        handleGroupBtnData={handleGroupBtnData}
      />
      <NodeToggle handleDataRef={handleDataRef} dataToggle={widgetShadow[0]} />
    </div>
  )
}
