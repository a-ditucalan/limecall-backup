import React from 'react'

import ContentFooter from '../ContentFooter'
import ContentHeader from '../ContentHeader'
import QuickSetupCheckbox from './QuickSetupCheckbox'

import quicksetupincrease from '../../../assets/images/quicksetupincrease.svg'
import quicksetupsmile from '../../../assets/images/quicksetupsmile.svg'
import quicksetupclock from '../../../assets/images/quicksetupclock.svg'

const Requirement = props => {
  const { onClick } = props

  const checkboxContent = {
    incease: {
      img: quicksetupincrease,
      title: 'Increase conversion on my website',
      desc: 'I want more passive leads to convert into sales calls.'
    },
    smile: {
      img: quicksetupsmile,
      title: 'Get more leads from your web visitors',
      desc: 'I am want my sales team to get morsesales qualified leads.'
    },
    clock: {
      img: quicksetupclock,
      title: 'Reduce lead response time',
      desc: 'I want my hot leads to get a top quality service.'
    }
  }

  return (
    <div className="requirement">
      <ContentHeader content="What are you here to do" />

      <div className="requirement-content">
        <QuickSetupCheckbox content={checkboxContent.incease} />
        <QuickSetupCheckbox content={checkboxContent.smile} />
        <QuickSetupCheckbox content={checkboxContent.clock} />
      </div>

      <ContentFooter onClick={onClick} />
    </div>
  )
}

export default Requirement
