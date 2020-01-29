import React, { Fragment } from 'react'
import CommonSelect from './CommonSelect'

const Title = props => {
  return (
    <div className="title-container">
      {props.data.type === 'image' ? (
        <Fragment>
          <div className="title-wrapper">
            <img src={props.data.titleOne} className="img-icon" alt="logo" />
            <div className="title-two">{props.data.titleTwo}</div>
          </div>
          {props.dataInvoice === 'Invoices' ? (
            <div className="invoice-select-wrapper">
              <p className="saved-filter-text">Saved Filters</p>
              <CommonSelect name="invoice" options={['Basic', 'Premium']} />
            </div>
          ) : null}
        </Fragment>
      ) : (
        <Fragment>
          <div className="welcome-name">
            <div className="title-one">{props.data.titleOne}</div>
            <div className="title-two">{props.data.titleTwo}</div>
          </div>
        </Fragment>
      )}
    </div>
  )
}

export default Title
