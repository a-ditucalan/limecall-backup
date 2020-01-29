import React, { useState, useEffect } from 'react'
import { Button } from 'semantic-ui-react'
import classnames from 'classnames'

const CommonGroupButton = ({
  identity,
  leftBtn,
  rightBtn,
  handleGroupBtnData,
  title,
  groupStyle,
  description,
  value
}) => {
  const [toggleBtn, setToggleBtn] = useState('')
  const [id, setId] = useState(identity)
  const [position, setPosition] = useState({
    isLeft: false,
    isRight: false
  })

  useEffect(() => {
    handleGroupBtnData(toggleBtn, id)
    if (value === 'bottom_left' || value === 'default') {
      setPosition({
        ...position,
        isLeft: true,
        isRight: false
      })
    } else if (value === 'bottom_right' || value === 'round') {
      setPosition({
        ...position,
        isRight: true,
        isLeft: false
      })
    }
  }, [handleGroupBtnData, id, position, toggleBtn, value])

  const onClickToggle = e => {
    const attr = e.target.getAttribute('name')
    if (attr === 'btnLeft') {
      setToggleBtn(leftBtn)
      setId(identity)
    } else if (attr === 'btnRight') {
      setToggleBtn(rightBtn)
      setId(identity)
    }
  }

  return (
    <div className={`${groupStyle} groupbtn-holder`}>
      <div className="groupbtn-text">
        <p className="groupbtn-title">{title}</p>
        {description ? <p className="groupbtn-desc">{description}</p> : ''}
      </div>
      <div className="groupbtn-wrapper">
        <Button
          onClick={onClickToggle}
          name="btnLeft"
          className={classnames('group-left', {
            activeBtn: position.isLeft
          })}
          attached="left"
        >
          {leftBtn}
        </Button>
        <Button
          onClick={onClickToggle}
          name="btnRight"
          attached="right"
          className={classnames('group-left', {
            activeBtn: position.isRight
          })}
        >
          {rightBtn}
        </Button>
      </div>
    </div>
  )
}

export default CommonGroupButton
