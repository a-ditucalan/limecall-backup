import React, { Fragment } from 'react'
import { Button, Icon } from 'semantic-ui-react'

const CommonButtons = ({
  onClick,
  content,
  background,
  btnClass,
  type = 'button',
  icon = '',
  image = ''
}) => {
  return (
    <Fragment>
      <Button
        onClick={onClick}
        type={type}
        className={`btn-${background} ${btnClass}`}
      >
        {image ? <img src={image} alt="img" /> : ''}
        {icon ? <Icon name={icon} /> : ''}
        {content}
      </Button>
    </Fragment>
  )
}

export default CommonButtons
