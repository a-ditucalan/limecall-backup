import React, { Component } from 'react'
import GetStartedModal from '../../common/GetStartedModal'

class HomeBanner extends Component {
  state = {
    data: [
      {
        createAccount: false,
        setYourSite: false,
        completeProfile: false,
        installDrift: false,
        setOfficeHours: false
      }
    ],
    counter: 0,
    count: []
  }

  onClickCheckList = e => {
    let { data, counter, count } = this.state
    const name = e.target.id
    const index = count.indexOf(name)

    data[0][name] = !data[0][name]

    if (index === -1) {
      count.push(name)
    } else {
      count.splice(index, 1)
    }

    counter = count.length
    this.setState({ data, count, counter })
  }

  render() {
    const { counter } = this.state

    return (
      <div className="homebanner-wrapper">
        <div className="home-card-wrapper">
          <div className="home-card">
            <div className="home-card-content">
              <p className="home-card-counter"> {counter}/5</p>
              <p className="home-card-text">
                Task <br /> Complete
              </p>
            </div>
            <div className="home-card-button-wrapper">
              <GetStartedModal
                data={this.state.data}
                counter={this.state.counter}
                onClickCheckList={this.onClickCheckList}
              />
            </div>
          </div>
        </div>
        <div className="homebanner-text-wrapper">
          <h2 className="homebanner-title">Getting Started Checklist</h2>
          <p className="homebanner-description">
            You’re on a roll! Here’s a checklist of what’s left to do before you
            can start having conversation with your customers through Limecall.
          </p>
        </div>
      </div>
    )
  }
}

export default HomeBanner
