import React, { useState } from 'react'
import { Button } from 'semantic-ui-react'

import ColorPicker from 'rc-color-picker'

const CommonColor = () => {
  const [color, setColor] = useState('#662D91')

  const changeHandler = colors => {
    setColor(colors.color)
  }

  return (
    <div className="color-wrapper ">
      <p className="color-title">Widget Color</p>
      <div className="color-holder">
        <ColorPicker
          animation="slide-up"
          color={color}
          onChange={changeHandler}
        />
        <Button className="btn-colorpicker">{color}</Button>
      </div>
    </div>
  )
}

export default CommonColor
