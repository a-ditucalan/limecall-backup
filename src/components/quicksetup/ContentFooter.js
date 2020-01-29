import React from 'react'

import CommonButtons from '../../common/CommonButtons'

const ContentFooter = props => {
  const { onClick } = props

  return (
    <div className="quicksetup-footer">
      <CommonButtons
        content="CONTINUE"
        background="blue"
        btnClass="btn-modal-style"
        onClick={onClick}
      />
    </div>
  )
}

export default ContentFooter
