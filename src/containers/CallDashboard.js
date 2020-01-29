import React, { Component } from 'react'
import { Image, TextArea, Modal } from 'semantic-ui-react'

import Title from '../common/Title'
import CommonCheckbox from '../common/CommonCheckbox'
import CommonButtons from '../common/CommonButtons'

import leadLogo from '../assets/images/call-details.png'
import defaultImage from '../assets/images/default-image.png'
import returnCall from '../assets/images/call-return.svg'
import greenReturnCall from '../assets/images/call-return-green.svg'
import email from '../assets/images/blue-email.svg'
import whiteEmail from '../assets/images/white-email.svg'
import ukFlag from '../assets/images/UK-flag.png'
import voiceRecord from '../assets/images/voice-record.png'
import play from '../assets/images/play.png'
import playHover from '../assets/images/Play-hover.svg'
import pause from '../assets/images/pause.png'
import pauseHover from '../assets/images/Pause-hover.svg'
import prev from '../assets/images/prev.png'
import prevHover from '../assets/images/Prev-hover.svg'
import next from '../assets/images/next.png'
import nextHover from '../assets/images/Next-hover.svg'
import callStarColored from '../assets/images/call-star-yellow.svg'
import callStar from '../assets/images/call-star-gray.svg'
import QuickTexts from '../components/calldashboard/QuickTexts'

const Stars = () => (
  <span>
    <Image src={callStarColored} />
    <Image src={callStarColored} />
    <Image src={callStarColored} />
    <Image src={callStarColored} />
    <Image src={callStar} />
  </span>
)

const NotesFeedback = () => (
  <div className="textarea">
    <div className="textarea-notes">
      <TextArea />
    </div>
    <div className="textarea-feedback">
      <TextArea />
    </div>
  </div>
)

class CallDashboard extends Component {
  state = {
    open: false,
    messages: [
      {
        status: 'receive',
        message:
          'Lorem ipsum dolor sir amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna'
      },
      {
        status: 'send',
        message:
          'Lorem ipsum dolor sir amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna'
      }
    ]
  }

  show = dimmer => () => {
    document.querySelector('.App').style.overflow = 'hidden'
    const btnBlueEmail = document.querySelector('.btn-blue-email')

    if (btnBlueEmail) {
      btnBlueEmail.classList.add('active')
    }

    this.setState({ dimmer, open: true })
  }

  close = () => {
    this.setState({ open: false })
    const btnBlueEmail = document.querySelector('.btn-blue-email')

    if (btnBlueEmail) {
      btnBlueEmail.classList.remove('active')
    }

    document.querySelector('.App').style.overflow = 'scroll'
  }

  render() {
    const { open, dimmer } = this.state

    const title = {
      type: 'image',
      titleOne: leadLogo,
      titleTwo: 'Call Details'
    }

    return (
      <div className="fullwidth-container call-dashboard">
        <Title data={title} />
        <div className="content">
          <div className="profile">
            <div className="profile-upper-details">
              <div className="profile-image">
                <div className="profile-image-holder">
                  <Image src={defaultImage} />
                </div>
                <div className="profile-id">
                  <p className="profile-id-number">+71-9876544236</p>
                  <div className="profile-buttons">
                    <button className="btn-green-call" type="button">
                      <Image src={returnCall} />
                      <Image src={greenReturnCall} />
                    </button>
                    <button
                      onClick={this.show('inverted')}
                      className="btn-blue-email"
                      type="button"
                    >
                      <Image src={email} />
                      <Image src={whiteEmail} />
                    </button>

                    <Modal
                      className="email-modal"
                      dimmer={dimmer}
                      open={open}
                      onClose={this.close}
                    >
                      <Modal.Content>
                        <Modal.Description>
                          <span>Message:</span>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed diam nonummy nibh euismod tincidunt ut
                          laoreet dolore magna aliquam erat volutpat. Ut wisi
                          enim ad minim, quis nostrud exerci tation ullamcorper
                          suscipit lobortis nisl ut aliquip ex ea.
                          <div className="actions">
                            <CommonCheckbox text="Save a copy" />
                            <CommonButtons content="Send" background="blue" />
                          </div>
                        </Modal.Description>
                      </Modal.Content>
                    </Modal>
                  </div>
                  <p className="profile-id-text">
                    ID: <span>#56576765</span>
                  </p>
                  <p className="profile-country">
                    <Image src={ukFlag} />
                    <span>London, UK</span>
                  </p>
                </div>
              </div>

              <div className="profile-personal-info">
                <p className="profile-info-text profile-info-name">
                  <span>Ventura Damaris</span>
                </p>
                <p className="profile-info-text profile-info-email">
                  <a href="mailto: Ventura@alphamail.com">
                    Ventura@alphamail.com
                  </a>
                </p>
              </div>

              <div className="profile-company-info">
                <p className="profile-company-text profile-company-ip">
                  <span>216.3.128.12</span>
                </p>
                <p className="profile-company-text profile-company-phone">
                  <span>+71-7876765445</span>
                </p>
                <p className="profile-company-text profile-company-domain">
                  <a href="http://www.example.com">http://www.example.com</a>
                </p>
                <p className="profile-company-text profile-company-email">
                  <a href="mailto: example@alfamail.com">
                    example@alfamail.com
                  </a>
                </p>
              </div>

              <div className="profile-social-media">
                <a href="http://www.facebook.com" target="__blank">
                  <i className="fab fa-facebook-square"></i>
                </a>
                <a href="http://www.twitter.com" target="__blank">
                  <i className="fab fa-twitter-square"></i>
                </a>
                <a href="http://www.linkedin.com" target="__blank">
                  <i className="fab fa-linkedin"></i>
                </a>
              </div>
            </div>
          </div>

          <div className="record">
            <div className="record-heading">
              <p className="record-title">Last Recorded Call</p>
              <p className="record-subtitle">All calls</p>
              <div className="record-image-holder">
                <Image src={voiceRecord} />
              </div>
              <div className="record-control">
                <button>
                  <Image src={prev} />
                  <Image src={prevHover} />
                </button>
                <div className="record-play-pause">
                  <button>
                    <Image src={play} />
                    <Image src={playHover} />
                  </button>
                  <button>
                    <Image src={pause} />
                    <Image src={pauseHover} />
                  </button>
                </div>
                <button>
                  <Image src={next} />
                  <Image src={nextHover} />
                </button>
              </div>
            </div>
            <div className="record-details">
              <p className="record-details-text record-details-duration">
                <span>2:35 Minutes</span>
              </p>
              <p className="record-details-text record-details-keywords">
                <span>Integration / Calls used</span>
              </p>
              <p className="record-details-text record-details-callstatus">
                <span>New Approach</span>
              </p>
              <p className="record-details-text record-details-timecall">
                <span>22:34 / Wed,14th,2019</span>
              </p>
              <p className="record-details-text record-details-agent">
                <span>Ram Awtar</span>
              </p>
              <p className="record-details-text record-details-source">
                <span>Google Paid</span>
              </p>
              <p className="record-details-text record-details-source">
                <span>Widget / API</span>
              </p>
              <p className="record-details-text record-details-tracking">
                <span>Google Paid</span>
              </p>
              <p className="record-details-text record-details-traffic">
                <span>Website</span>
              </p>
              <p className="record-details-text record-score lead">
                <Stars />
              </p>
              <p className="record-details-text record-tags">
                <span>
                  <span>New Approach</span>
                  <span>Online</span>
                  <span>Lorem Ipsum</span>
                </span>
              </p>
              <p className="record-details-text record-score call">
                <Stars />
              </p>
            </div>
          </div>

          <NotesFeedback existingNote="fasfsdaf" />
          <QuickTexts messages={this.state.messages} />
        </div>
      </div>
    )
  }
}

export default CallDashboard
