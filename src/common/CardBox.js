import React, { Fragment } from 'react'
import classnames from 'classnames'

const CardBox = ({ cardContent }) => {
  return (
    <div
      className={classnames(
        'cardbox',
        {
          monthlyUsage:
            cardContent.type === 'monthyUsage' ||
            cardContent.type === 'contenttext'
        },
        { flatRate: cardContent.type === 'flatRate' },
        { lead: cardContent.type === 'topLead' },
        { usage: cardContent.type === 'usage' },
        { current: cardContent.type === 'currentCalls' }
      )}
    >
      {cardContent.type === 'contenttext' ? (
        <Fragment>
          <div className="upper-cardbox-log">
            <div className="cardbox-image-wrapper">
              <img src={cardContent.cardImage} alt="icon" />
            </div>
            <p className="cardbox-number">{cardContent.cardNum}</p>
            <p className="cardbox-text">{cardContent.cardDescription}</p>
          </div>
        </Fragment>
      ) : cardContent.type === 'monthyUsage' ? (
        <Fragment>
          <div className="uppercardbox">
            <div className="cardbox-image-wrapper">
              <h2 className="cardbox-title">{cardContent.title}</h2>
            </div>
            <p className="cardbox-call-log-list">{cardContent.callLog}</p>
          </div>
          <div className="card-date-wrapper">
            <p className="cardbox-text">{cardContent.callDate}</p>
          </div>
        </Fragment>
      ) : cardContent.type === 'flatRate' ? (
        <Fragment>
          <div className="uppercardbox">
            <div className="cardbox-image-wrapper">
              <h2 className="cardbox-title">{cardContent.title}</h2>
            </div>
            <p className="cardbox-call-log-list">
              {cardContent.callLog}
              <sup>{cardContent.callSup === 's' && 's'}</sup>
            </p>
          </div>
        </Fragment>
      ) : cardContent.type === 'topLead' ? (
        <Fragment>
          <div className="uppercardbox">
            <h2 className="default-text text-bold">{cardContent.title}</h2>
          </div>
        </Fragment>
      ) : cardContent.type === 'usage' ? (
        <Fragment>
          <div className="uppercardbox">
            <div className="cardbox-usage-wrapper">
              <h2 className="cardbox-title">{cardContent.title}</h2>
              <p className="cardbox-usage-list">{cardContent.usageLog}</p>
              <p className="cardbox-text">{cardContent.usageDescription}</p>
            </div>
          </div>
        </Fragment>
      ) : cardContent.type === 'currentCalls' ? (
        <Fragment>
          <div className="uppercardbox">
            <h2 className="cardbox-title text-bold">{cardContent.title}</h2>
          </div>
        </Fragment>
      ) : null}
    </div>
  )
}

export default CardBox
