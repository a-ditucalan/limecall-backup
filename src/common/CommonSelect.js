import React, { Fragment, Component } from 'react'
import { Select } from 'semantic-ui-react'
import classnames from 'classnames'

class CommonSelect extends Component {
  componentDidMount() {
    document
      .querySelector('.ui.selection.dropdown .item')
      .classList.remove('selected')
  }

  render() {
    const {
      onChange,
      name,
      options,
      placeholder,
      isGray,
      currentValue = ''
    } = this.props
    return (
      <Fragment>
        <Select
          onChange={onChange}
          name={name}
          className={classnames('', {
            'background-gray': isGray
          })}
          value={currentValue}
          placeholder={placeholder}
          options={options.map((option, index) => ({
            key: index,
            text: option,
            value: option
          }))}
        />
      </Fragment>
    )
  }
}

export default CommonSelect
