import React from 'react'
import CommonCheckbox from './CommonCheckbox'

const NodeCheckbox = ({ checkboxlist, name, onChange, title }) => {
  return (
    <div className="node-checkbox" name={name}>
      <h2 className="bold-text nodecheckbox-title">{title}</h2>
      {checkboxlist.map((checkbox, index) => (
        <CommonCheckbox onChange={onChange} key={index} text={checkbox} />
      ))}
    </div>
  )
}

export default NodeCheckbox
