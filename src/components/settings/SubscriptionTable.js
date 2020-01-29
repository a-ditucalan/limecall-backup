import React, { Component, Fragment } from 'react'
import { Table, Image, Modal } from 'semantic-ui-react'
import Swiper from 'react-id-swiper'
// Need to add Pagination, Navigation modules
import { Navigation } from 'swiper/dist/js/swiper.esm'

import CommonInput from '../../common/CommonInput'
import CommonButtons from '../../common/CommonButtons'
import CommonSelect from '../../common/CommonSelect'

import starterIcon from '../../assets/images/startericon.svg'
import proIcon from '../../assets/images/proicon.svg'
import advanceIcon from '../../assets/images/advanceicon.svg'
import enterpriceIcon from '../../assets/images/enterprise.svg'
import sms from '../../assets/images/sms.svg'
import mobileDesktopApp from '../../assets/images/mobiledesktopapp.svg'
import leadAnalytics from '../../assets/images/leadanalytics.svg'
import callTransfer from '../../assets/images/calltransfer.svg'
import outgoingCalls from '../../assets/images/outgoingcalls.svg'
import callRecord from '../../assets/images/callrecord.svg'
import api from '../../assets/images/api.svg'
import sync from '../../assets/images/syncicon.svg'
import cardColored from '../../assets/images/card-colored.svg'
import grayCard from '../../assets/images/graycard.svg'
import checked from '../../assets/images/checked.svg'
import americanExpress from '../../assets/images/americanexpress.svg'
import visa from '../../assets/images/visa.svg'
import masterCard from '../../assets/images/mastercard.svg'

class SubscriptionTableModal extends Component {
  state = {
    isModalOpen: false,
    isCancelModalOpen: false,
    dataModal: {
      dataPlan: {
        planName: 'Pro',
        planPrice: '$119'
      },
      addCredits: '',
      promoCode: '',
      creditCardDetails: {
        cardName: '',
        cardNumber: '',
        validMonth: '',
        validYear: '',
        cvv: ''
      }
    }
  }

  handleDataModal = e => {
    let { dataModal } = this.state
    const newPlanName = e.target.parentNode.querySelector('.plan-title')
    const newPlanPrice = e.target.parentNode.querySelector('.plan-price')
    const planStatus = e.target.parentNode.querySelector('.plan-status')
    const allPlanStatus = document.querySelectorAll('.plan-status')

    if (planStatus.innerHTML !== 'Current Plan') {
      dataModal.dataPlan = {
        planName: newPlanName.innerHTML,
        planPrice: newPlanPrice.innerHTML
      }

      this.setState({ dataModal })
    }

    allPlanStatus.forEach((value, index) => {
      const planStatus = e.target.parentNode.querySelector('.plan-status')

      if (
        value.innerHTML !== 'Current Plan' &&
        value.innerHTML !== 'Contact Sales' &&
        planStatus.innerHTML !== 'Current Plan'
      ) {
        value.classList.remove('selected')
        value.innerHTML = 'Upgrade to'
      }
    })

    if (
      planStatus.innerHTML !== 'Contact Sales' &&
      planStatus.innerHTML !== 'Current Plan'
    ) {
      planStatus.innerHTML = 'Selected'
      planStatus.classList.add('selected')
    }
  }

  handleDataInput = e => {
    const { name, value } = e.target
    const { dataModal } = this.state
    dataModal[name] = value

    this.setState({ dataModal })
  }

  handleCreditCardInfo = e => {
    const { name, value } = e.target
    const { dataModal } = this.state
    dataModal.creditCardDetails[name] = value

    this.setState({ dataModal })
  }

  handleModal = () => {
    let { isModalOpen } = this.state

    isModalOpen = !isModalOpen
    this.setState({ isModalOpen })
  }

  handleCloseModal = () => this.setState({ isModalOpen: false })

  handleCancelModal = () => {
    let { isCancelModalOpen } = this.state

    isCancelModalOpen = !isCancelModalOpen
    this.setState({ isCancelModalOpen })
  }

  handleCloseCancelModal = () => this.setState({ isCancelModalOpen: false })

  handleCreditCard = () => {
    var target = document.querySelector('.saved-cards')
    this.animate(
      document.querySelector('.holder-small-content') ||
        document.querySelector('.holder-small-content'),
      'scrollTop',
      '',
      0,
      target.offsetTop,
      200,
      true
    )
  }

  animate = (elem, style, unit, from, to, time, prop) => {
    if (!elem) return

    var start = new Date().getTime(),
      timer = setInterval(function() {
        var step = Math.min(1, (new Date().getTime() - start) / time)

        if (prop) {
          elem[style] = from + step * (to - from) + unit
        } else {
          elem.style[style] = from + step * (to - from) + unit
        }

        if (step === 1) {
          clearInterval(timer)
        }
      }, 25)
    if (prop) {
      elem[style] = from + unit
    } else {
      elem.style[style] = from + unit
    }
  }

  render() {
    const { isModalOpen, isCancelModalOpen, dataModal } = this.state
    const { dataTable } = this.props

    const params = {
      modules: [Navigation],
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      },
      spaceBetween: 30
    }

    return (
      <Fragment>
        <Table singleLine>
          <Table.Header>
            <Table.Row>
              {dataTable.header.map((header, index) => {
                return (
                  <Table.HeaderCell key={index}>
                    {header.headerTitle}
                  </Table.HeaderCell>
                )
              })}
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {dataTable.tableContentData.map((data, index) => {
              return (
                <Table.Row key={index} className="table-content-row">
                  <Table.Cell>{data.product}</Table.Cell>
                  <Table.Cell>{data.currentPlan}</Table.Cell>
                  <Table.Cell>{data.status}</Table.Cell>
                  <Table.Cell>{data.ends}</Table.Cell>
                  <Table.Cell onClick={this.handleCancelModal}>
                    {data.cancel}
                  </Table.Cell>
                  <Table.Cell onClick={this.handleModal}>
                    {data.upgrade}
                  </Table.Cell>
                </Table.Row>
              )
            })}
          </Table.Body>
        </Table>
        <div className="plan-list">
          <p className="bold-text upgrade-title">Upgrade your plan</p>
          <div className="plan-item">
            <div className="event-handler" onClick={this.handleModal}></div>
            <Image src={starterIcon} size="small" />
            <p className="plan-title">Starter</p>
            <p className="plan-price">Free</p>
            <p className="plan-desc">Up to 20 calls per month</p>
            <p className="plan-subdesc">+35 leads for $29</p>
            <p className="plan-status selected">Current Plan</p>
          </div>
          <div className="plan-item">
            <div className="event-handler" onClick={this.handleModal}></div>
            <Image src={proIcon} size="small" />
            <p className="plan-title">Pro</p>
            <p className="plan-price">$119</p>
            <p className="plan-desc">Up to 100 calls per month</p>
            <p className="plan-subdesc">+additional credits for more calls</p>
            <p className="plan-status">Upgrade to</p>
          </div>
          <div className="plan-item">
            <div className="event-handler" onClick={this.handleModal}></div>
            <Image src={advanceIcon} size="small" />
            <p className="plan-title">Advance</p>
            <p className="plan-price">$269</p>
            <p className="plan-desc">Up to 300 calls per month</p>
            <p className="plan-subdesc">+additional credits for more calls</p>
            <p className="plan-status">Upgrade to</p>
          </div>
          <div className="plan-item advance-item">
            <Image src={enterpriceIcon} className="advance-icon" size="small" />
            <p className="plan-title">Enterprise</p>
            <p className="plan-subdesc">Custom call packages</p>
            <p className="plan-status">Contact Sales</p>
          </div>
        </div>
        <Modal
          className="subscription-modal"
          open={isModalOpen}
          onClose={this.handleCloseModal}
        >
          <Modal.Header>
            <p className="modal-header">Choose Your Plan</p>
            <i
              onClick={this.handleModal}
              className="fa fa-times"
              aria-hidden="true"
            ></i>
          </Modal.Header>
          <Modal.Content scrolling>
            <div className="plans">
              <div className="plan-list">
                <div className="plan-item">
                  <div
                    className="event-handler"
                    onClick={this.handleDataModal}
                  ></div>
                  <Image src={starterIcon} size="small" />
                  <p className="plan-title">Starter</p>
                  <p className="plan-price">Free</p>
                  <p className="plan-desc">Up to 20 calls per month</p>
                  <p className="plan-subdesc">+35 leads for $29</p>
                  <p className="plan-status">Current Plan</p>
                </div>
                <div className="plan-item">
                  <div
                    className="event-handler"
                    onClick={this.handleDataModal}
                  ></div>
                  <Image src={proIcon} size="small" />
                  <p className="plan-title">Pro</p>
                  <p className="plan-price">$119</p>
                  <p className="plan-desc">Up to 100 calls per month</p>
                  <p className="plan-subdesc">
                    +additional credits for more calls
                  </p>
                  <p className="plan-status selected">Selected</p>
                </div>
                <div className="plan-item">
                  <div
                    className="event-handler"
                    onClick={this.handleDataModal}
                  ></div>
                  <Image src={advanceIcon} size="small" />
                  <p className="plan-title">Advance</p>
                  <p className="plan-price">$269</p>
                  <p className="plan-desc">Up to 300 calls per month</p>
                  <p className="plan-subdesc">
                    +additional credits for more calls
                  </p>
                  <p className="plan-status">Upgrade to</p>
                </div>
                <div className="plan-item advance-item">
                  <Image
                    src={enterpriceIcon}
                    className="advance-icon"
                    size="small"
                  />
                  <p className="plan-title">Enterprise</p>
                  <p className="plan-subdesc">Custom call packages</p>
                  <p className="plan-status">Contact Sales</p>
                </div>
              </div>
              <div className="plans-included">
                <p className="title">All Limecall plans include:</p>
                <ul className="plans-icon">
                  <li className="icon">
                    <Image src={sms} size="small" />
                    Sms Followups
                  </li>
                  <li className="icon">
                    <Image src={mobileDesktopApp} size="small" />
                    Mobile + Desktop App
                  </li>
                  <li className="icon">
                    <Image src={leadAnalytics} size="small" />
                    Lead Analytics
                  </li>
                  <li className="icon">
                    <Image src={callTransfer} size="small" />
                    Call Transfer
                  </li>
                  <li className="icon">
                    <Image src={outgoingCalls} size="small" />
                    Outgoing Calls
                  </li>
                  <li className="icon">
                    <Image src={callRecord} size="small" />
                    Call Record
                  </li>
                  <li className="icon">
                    <Image src={api} size="small" />
                    API Access
                  </li>
                  <li className="icon">
                    <Image src={sync} size="small" />2 way sync through
                    Integrations
                  </li>
                </ul>
              </div>
              <div className="add-credits">
                <p className="title">Optional</p>
                <div className="credits">
                  <div className="credits-text">
                    <p className="credits-title">Add Credits</p>
                    <p className="credits-subtitle">
                      Add Credits to your account
                    </p>
                  </div>
                  <CommonInput
                    onChange={this.handleDataInput}
                    name="addCredits"
                  />
                </div>
              </div>
            </div>
            <div className="holder-small-content">
              <div className="summary">
                <p className="summary-title">Summary</p>
                <div className="summary-tab-holder">
                  <span className="summary-tab active">Monthly</span>
                  <span className="summary-tab">Annual</span>
                </div>
                <div className="summary-plan">
                  <p className="light-text">Plan</p>
                  <span className="center-line" />
                  <p className="gray-text">{dataModal.dataPlan.planName}</p>
                </div>
                <div className="summary-plan">
                  <p className="light-text">Users</p>
                  <span className="center-line" />
                  <p className="gray-text">One</p>
                </div>
                <div className="summary-code">
                  <p className="summary-code-text">
                    <i className="fas fa-question-circle" />
                    Have a promotional Code?
                  </p>
                  <CommonInput
                    onChange={this.handleDataInput}
                    name="promoCode"
                    placeholder="Enter your Code here"
                  />
                  <CommonButtons content="Apply" background="blue" />
                </div>
                <div className="summary-plan">
                  <p className="summary-plan-title">Summary</p>
                  <p className="light-text">Monthly charge</p>
                  <span className="center-line" />
                  <p className="gray-text">{dataModal.dataPlan.planPrice}</p>
                </div>
                <div className="summary-due">
                  <p className="summary-due-text">Due Today</p>
                  <p className="summary-due-price">$ 0.87 USD</p>
                </div>
                <div className="holder-credit-card">
                  <CommonButtons
                    onClick={this.handleCreditCard}
                    content="Credit Card"
                    background="green"
                  />
                </div>
                <div className="holder-paypal">
                  <CommonButtons background="blue" />
                </div>
              </div>
              <div className="saved-cards">
                <p className="saved-cards-title">Saved Cards</p>
                <div className="holder-swiper">
                  <Swiper {...params}>
                    <div>
                      <Image src={grayCard} />
                    </div>
                    <div>
                      <Image src={cardColored} />
                    </div>
                    <div>
                      <Image src={grayCard} />
                    </div>
                    <div>
                      <Image src={grayCard} />
                    </div>
                  </Swiper>
                </div>
                <div className="card-info">
                  <p className="card-title">Add a new Card</p>
                  <CommonInput
                    onChange={this.handleCreditCardInfo}
                    name="cardName"
                    title="NAME ON CARD"
                    background="gray"
                  />
                  <div className="holder-card-number">
                    <CommonInput
                      onChange={this.handleCreditCardInfo}
                      name="cardNumber"
                      title="CARD NUMBER"
                      background="gray"
                    />
                    <div className="holder-images">
                      <Image src={visa} />
                      <Image src={americanExpress} />
                      <Image src={masterCard} />
                    </div>
                  </div>
                  <div className="holder-date">
                    <CommonInput
                      onChange={this.handleCreditCardInfo}
                      name="validMonth"
                      title="VALID THRU"
                      placeholder="Month"
                      background="gray"
                    />
                    <CommonInput
                      onChange={this.handleCreditCardInfo}
                      name="validYear"
                      placeholder="Year"
                      background="gray"
                    />
                  </div>
                  <CommonInput
                    onChange={this.handleCreditCardInfo}
                    name="cvv"
                    title="CVV"
                    background="gray"
                  />
                  <span className="secure-text">
                    <Image src={checked} />
                    100% secure checkout
                  </span>
                  <span className="commercial-text">
                    <Image src={checked} />
                    256-Bit Commercial grade Security
                  </span>
                  <CommonButtons content="Subscribe" background="green" />
                </div>
              </div>
            </div>
          </Modal.Content>
        </Modal>
        <Modal
          className="cancel-subscription-wrapper"
          open={isCancelModalOpen}
          onClose={this.handleCloseCancelModal}
        >
          <Modal.Header>
            <p className="cancel-title">Cancel your Limecall Subscription</p>
            <i
              onClick={this.handleCancelModal}
              className="fa fa-times"
              aria-hidden="true"
            ></i>
          </Modal.Header>
          <Modal.Content>
            <div className="modal-content">
              <p className="cancel-subs-text default-text">
                We are sad to see you go. Plase take a moment to tell us why you
                want to cancel your account
              </p>
              <div className="selection-wrapper">
                <CommonSelect
                  onChange={this.onChangeSelect}
                  name="selectReason"
                  placeholder="*Reason for canceling your account"
                  options={[
                    '*Reason for canceling your account',
                    'test',
                    'test1'
                  ]}
                />
              </div>
              <div className="subscription-feedback-input">
                <CommonInput
                  onChange={this.onChangeInput}
                  name="feedback"
                  type="text"
                  inputStyle="subscription-input"
                  placeholder="Any other feedback?"
                />
              </div>
              <div className="cancel-subs-description-holder">
                <p className="cancel-subs-descripiton">
                  By clicking <span>Cancel Subscription</span> below, you are
                  confirming the cancellation and deletion of your account.
                  Limecaller powdered phone system acress all integrated
                  products will stop working andthis will cause an irreversable
                  deletion of your account dats including call records
                </p>
              </div>
              <div className="btn-scancel-subscription-wrapper">
                <CommonButtons
                  onClick={this.onCancel}
                  content="Cancel Subscription"
                  type="button"
                  btnClass="btn-cancel"
                />
              </div>
            </div>
          </Modal.Content>
        </Modal>
      </Fragment>
    )
  }
}

export default SubscriptionTableModal
