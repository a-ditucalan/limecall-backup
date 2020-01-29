import React, { useState } from 'react'
import { Input } from 'semantic-ui-react'

import CommonInput from './CommonInput'
import Button from './CommonButtons'
import postAddCreditCard from '../config/postAddCreditCard'

const AddCard = ({ onChangeComponent, onChangeState }) => {
  const [dataCard, setDataCard] = useState({
    cardName: '',
    cardNumber: '',
    month: '',
    year: '',
    cvvNum: '',
    date: ''
  })

  const onClickBack = () => {
    onChangeComponent(true)
  }

  const onChangeInput = e => {
    const { name, value } = e.target

    dataCard[name] = value

    setDataCard({
      ...dataCard
    })
  }

  const onAdd = e => {
    dataCard.date = dataCard.month + '/' + dataCard.year
    onChangeState(dataCard)
    postAddCreditCard(dataCard)
  }

  return (
    <div className="add-credit-wrapper">
      <div className="add-credit-input-holder">
        <CommonInput
          onChange={onChangeInput}
          type="text"
          title="Name on Card"
          background="gray"
          inputStyle="input-style name-number-card"
          name="cardName"
        />
        <CommonInput
          onChange={onChangeInput}
          type="number"
          title="Card Number"
          background="gray"
          inputStyle="input-style name-number-card"
          name="cardNumber"
        />
        <div className="expiry-holder">
          <label className="default-text input-title">Expiry Date</label>
          <div className="expiry-input-holder">
            <Input
              onChange={onChangeInput}
              maxLength="2"
              type="text"
              className="input-style"
              name="month"
            />
            <Input
              onChange={onChangeInput}
              maxLength="4"
              type="text"
              className="input-style"
              name="year"
            />
          </div>
        </div>
        <CommonInput
          onChange={onChangeInput}
          type="number"
          title="CVV"
          maxLength="4"
          background="gray"
          name="cvvNum"
          inputStyle="input-last"
        />
      </div>
      <div className="btn-holder">
        <Button
          onClick={onClickBack}
          content="Back"
          background="grey"
          btnClass=""
        />
        <Button onClick={onAdd} content="Add" background="green" />
      </div>
    </div>
  )
}

export default AddCard
