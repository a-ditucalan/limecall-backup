import React, { Component } from 'react'

import CommonInput from '../../common/CommonInput'
import CommonButtons from '../../common/CommonButtons'
import NodeCheckbox from '../../common/NodeCheckbox'
import NodeToggle from '../../common/NodeToggle'
import postWhitelist from '../../config/postWhitelist'
import getScript from '../../config/getScript'

const callToggle = [
  {
    callTitle: 'Only show permitted countries',
    callDesc:
      'The widget country dropdown selector will only show countries in the permitted list',
    callId: 'toogleAutomated',
    callref: 'permittedCountries'
  }
]

const countryData = [
  {
    name: 'Australia',
    iso2: 'au',
    dialCode: '+61'
  },
  { name: 'Belgium', iso2: 'be', dialCode: '+32' },
  {
    name: 'Canada',
    iso2: 'ca',
    dialCode: '+1'
  }
]

class CountriesSettings extends Component {
  state = {
    data: {
      inputDefaultCountry: '',
      nodeCheckBoxCountries: [],
      permittedCountries: false,
      widget: ''
    }
  }

  componentDidMount() {
    getScript()
      .then(res => {
        let widgetId = res.data.data[0].id

        this.setState({ widget: widgetId }, () => {
          console.log(this.state.widget, 'boy')
        })
      })
      .catch(err => console.log(err))
  }
  onChangeInput = e => {
    const { name, value } = e.target
    const { data } = this.state

    data[name] = value

    this.setState({ data })
  }

  onChangeNodeCheckbox = e => {
    const name = e.target.parentNode.parentNode.parentNode.getAttribute('name')
    const value = e.target.innerText
    const { data } = this.state
    const index = data[name].indexOf(value)

    if (index === -1) {
      data[name].push(value)
    } else {
      data[name].splice(index, 1)
    }

    this.setState({ data })
  }

  onSave = e => {
    const { data } = this.state
    console.log(data.widget, 'eee')

    data.nodeCheckBoxCountries.forEach((item, i) => {
      countryData.forEach((country, i) => {
        console.log(country.name, item)
        if (country.name === item) {
          postWhitelist(country, this.state.widget)
            .then(res => {
              console.log('yes')
            })
            .catch(err => console.log(err, 'no'))
        }
      })
    })
  }

  handleDataRef = (DataRef, DataState) => {
    let currentData = this.state.data
    currentData[DataRef] = DataState
    this.setState({ data: currentData })
  }

  render() {
    return (
      <div className="countries-settings">
        <form method="" action="">
          <p className="text-bold page-title">Country Settings</p>
          <div className="holder-input">
            <div className="holder-text">
              <h2 className="item-title">Default country</h2>
              <p className="subtext item-desc">
                The default selected country in all your widgets.
              </p>
            </div>
            <CommonInput
              onChange={this.onChangeInput}
              name="inputDefaultCountry"
              background="gray"
            />
          </div>
          <div className="holder-checkboxes">
            <div className="holder-other-countries">
              <p className="item-title">Permitted countries</p>
              <p className="subtext item-desc">
                Only allow calls to and from these countries
              </p>
              <p className="blue-text">Other countries</p>
            </div>
            <div className="checkboxes">
              <NodeCheckbox
                onChange={this.onChangeNodeCheckbox}
                name="nodeCheckBoxCountries"
                checkboxlist={[
                  'Australia',
                  'Austria',
                  'Bangladesh',
                  'Belgium',
                  'Brazil',
                  'Bulgaria',
                  'Canada',
                  'Chile',
                  'China',
                  'Denmark',
                  'Finland',
                  'France',
                  'Germany',
                  'Greece',
                  'Hong Kong',
                  'Hungary',
                  'Iceland',
                  'India',
                  'Indonesia',
                  'Ireland',
                  'Israel',
                  'Italy',
                  'Malaysia',
                  'Malta',
                  'Mexico',
                  'Mongolia',
                  'Netherlands',
                  'New Zealand',
                  'Norway',
                  'Poland',
                  'Portugal',
                  'Puerto Rico',
                  'Romania',
                  'Singapore',
                  'South Korea',
                  'Spain',
                  'Sweden',
                  'Thailand',
                  'US Virgin islands',
                  'USA',
                  'United Kingdom',
                  'Vatican City'
                ]}
              />
            </div>
          </div>
          {callToggle.map((item, i) => (
            <NodeToggle
              key={i}
              handleDataRef={this.handleDataRef}
              dataToggle={item}
            />
          ))}
          <CommonButtons
            onClick={this.onSave}
            type="submit"
            content="Update"
            background="blue"
          />
        </form>
      </div>
    )
  }
}

export default CountriesSettings
