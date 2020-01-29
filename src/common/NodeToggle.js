import React, { Component } from 'react'
import Toggle from './CommonToggle'

class NodeToggle extends Component {
  state = {
    activeToggle: false,
    toggleRef: this.props.dataToggle.callref
  }

  handleToggleData = toggleData => {
    this.setState({ activeToggle: toggleData }, () => {
      return this.props.handleDataRef(
        this.state.activeToggle,
        this.state.toggleRef
      )
    })
  }

  render() {
    const { dataToggle } = this.props
    // console.log(dataToggle)
    return (
      <div className="toggle-group">
        <div className="toggle-wrapper">
          <div className="toggle-content">
            <h3 className="call-title">{dataToggle.callTitle}</h3>
            <p className="call-description">{dataToggle.callDesc}</p>
          </div>
          <div className="toggle-holder">
            <Toggle
              handleToggleData={this.handleToggleData}
              dataToggleActive={this.state.activeToggle}
              dataStateToggle={dataToggle}
            />
          </div>
        </div>
      </div>
    )
  }
}

export default NodeToggle
