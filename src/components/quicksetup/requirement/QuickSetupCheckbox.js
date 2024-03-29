import React from 'react'

const QuickSetupCheckbox = props => {
  const { content } = props

  return (
    <div className="requirement-checkbox">
      <label className="container">
        <img src={content.img} alt="" />
        <p className="title">{content.title}</p>
        <p className="desc">{content.desc}</p>
        <input type="checkbox" />
        <span className="checkmark"></span>
      </label>
    </div>
  )
}

export default QuickSetupCheckbox
