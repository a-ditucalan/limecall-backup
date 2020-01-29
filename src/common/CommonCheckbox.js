import React from 'react'
import { Checkbox } from 'semantic-ui-react'

const CommonCheckbox = ({
  onChange,
  name,
  checked,
  text,
  italicText = undefined,
  checkboxStyle
}) => {
  return (
    <div className="holder-checkbox">
      <Checkbox
        onChange={onChange}
        name={name}
        checked={checked}
        className={checkboxStyle}
        label={
          <label>
            {text}
            {italicText === undefined ? (
              ''
            ) : (
              <span className="text-italic">{`(${italicText})`}</span>
            )}
          </label>
        }
      />
    </div>
  )
}

export default CommonCheckbox
