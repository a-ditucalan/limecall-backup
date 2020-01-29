import React from 'react'

import NodeToggle from '../../common/NodeToggle'

import iconAdjust from '../../assets/images/Dashboard 2-06.png'

export const WidgetBehaviourTitle = () => {
  return (
    <div className="accordion-widget-holder">
      <div className="accordion-image-holder">
        <img src={iconAdjust} alt="logo" />
      </div>
      <div className="accordion-title-holder">
        <h2 className="accordion-title">Adjust your widget behaviour.</h2>
        <p className="accordion-description">
          Set your widget placement and much more
        </p>
      </div>
    </div>
  )
}

export const WidgetBehaviourContent = ({ widgetBehaviour, handleDataRef }) => {
  return (
    <div className="adjust-behaviour-wrapper">
      <p className="adjust-title">Widget Behaviour</p>
      {widgetBehaviour.map((item, i) => {
        return (
          <NodeToggle key={i} handleDataRef={handleDataRef} dataToggle={item} />
        )
      })}
    </div>
  )
}
