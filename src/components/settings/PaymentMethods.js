import React, { Component, Fragment } from 'react'

import AddCard from '../../common/AddCard'

import creditCard from '../../assets/images/credit-card.png'
import paypal from '../../assets/images/paypal_gray.png'
import creditPlaceholder from '../../assets/images/card-placeholder.png'
import getUserPayment from '../../config/getUserPayment'
import getPaypalIntegration from '../../config/getPaypalIntegration'
export default class PaymentMethods extends Component {
  state = {
    addCard: false,
    selectCard: true,
    saveCard: []
  }

  onSelectCard = () => {
    this.setState({ addCard: true, selectCard: false })
  }

  onChangeState = data => {
    let copyArr = this.state.saveCard

    copyArr.push(data)
    this.setState({ addCard: false, selectCard: true, saveCard: copyArr })
  }

  onChangeComponent = dataStatus => {
    this.setState({ addCard: false, selectCard: dataStatus })
  }

  componentDidMount() {
    getPaypalIntegration()
      .then(res => {
        console.log(res, 'paypal')
      })
      .catch(err => {
        console.log(err)
      })
    getUserPayment()
      .then(res => {
        const card = []
        res.data.data.payment_methods.forEach(item => {
          card.push(item)
        })

        this.setState({ saveCard: card }, () => {
          console.log(res.data.data)
        })
      })
      .catch(err => {
        console.log(err)
      })
  }
  render() {
    return (
      <div className="paymentmethods-wrapper">
        {this.state.selectCard === true ? (
          <Fragment>
            {this.state.saveCard[0] ? (
              <Fragment>
                <div className="saved-card-title">
                  <h2 className="default-text bold-text">Saved Card</h2>
                </div>
                <div className="saved-card-holder">
                  {this.state.saveCard.map((item, i) => {
                    return (
                      <div key={i} className="card-box">
                        <img src={creditPlaceholder} alt="placeholder" />
                      </div>
                    )
                  })}
                </div>
              </Fragment>
            ) : null}
            <div className="payment-title-wrapper">
              <h2 className="default-text bold-text">Add a Payment method</h2>
            </div>
            <div className="card-wrapper">
              <div className="card-holder">
                <img
                  src={creditCard}
                  onClick={this.onSelectCard}
                  className="credit-card-item"
                  alt="card"
                />
              </div>
              <div className="card-holder">
                <img
                  src={paypal}
                  onClick={this.onSelectCard}
                  className="credit-card-item"
                  alt="card"
                />
              </div>
            </div>
          </Fragment>
        ) : this.state.addCard === true ? (
          <Fragment>
            <div className="payment-title-wrapper">
              <h2 className="default-text bold-text">Add a Payment method</h2>
            </div>
            <AddCard
              onChangeComponent={this.onChangeComponent}
              onChangeState={this.onChangeState}
            />
          </Fragment>
        ) : null}
      </div>
    )
  }
}
