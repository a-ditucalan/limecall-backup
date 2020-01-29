import React, { Component } from 'react'

class Toggle extends Component {
  state = {
    activeToggle: this.props.dataToggleActive,
    prevToggle: this.props.dataToggleActive
  }

  onClickToggle = e => {
    this.setState(
      {
        activeToggle: !this.state.activeToggle
      },
      () => {
        return this.props.handleToggleData(this.state.activeToggle)
      }
    )
  }

  render() {
    const { dataStateToggle } = this.props

    return (
      <div>
        <input
          type="checkbox"
          className="toggle"
          onClick={this.onClickToggle}
          id={dataStateToggle.callId}
        />
        <label htmlFor={dataStateToggle.callId}>
          <span className="on">ON</span>
          <span className="off">OFF</span>
        </label>
      </div>
    )
  }
}

export default Toggle
