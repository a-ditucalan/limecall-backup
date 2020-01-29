import React from 'react'

import goLiveRocket from '../../assets/images/goliverocket.svg'
import CommonButtons from '../../common/CommonButtons'

const GoLive = () => {
  return (
    <div className="golive">
      <div className="golive-content">
        <img src={goLiveRocket} alt="" />
        <p className="golive-title">You are good to go</p>
        <p className="golive-subtitle">It's time to grow with Limecall</p>
        <p className="golive-desc">
          I would like a one to one personalized demo
        </p>
        <div className="golive-btn-holder">
          <CommonButtons
            content="See who is on your website"
            background="blue"
            btnClass="btn-modal-style"
          />
          <CommonButtons
            content="Book a demo"
            background="alt-blue"
            btnClass="btn-modal-style"
          />
        </div>
        <p className="golive-anchor">
          Alternatively, <a href="#">Invite teammates</a>,
          <a href="#"> set up a prompt </a>
          or
          <a href="#"> choose a plan</a>
        </p>
      </div>
    </div>
  )
}

export default GoLive
