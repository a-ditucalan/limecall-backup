import React, { Component } from 'react'
import { Accordion } from 'semantic-ui-react'
import countries from '@cospired/i18n-iso-languages'

import Title from '../common/Title'
import Collapse from '../common/Accordion'
import WidgetBanner from '../components/widgets/WidgetBanner'
import { showWidget, widgetShadow, widgetBehaviour } from '../lib/WidgetData'

import icon from '../assets/images/settingIcon.png'

import { WidgetInstallTitle } from '../components/widgets/WidgetInstall'
import {
  SayHelloTitle,
  SayHelloContent
} from '../components/widgets/WidgetSayHello'
import {
  WidgetCallerIDTitle,
  WidgetCallerIDContent
} from '../components/widgets/WidgetCallerSettings'
import {
  WidgetAvailabilityTitle,
  WidgetAvailabilityContent
} from '../components/widgets/WidgetAvailability'
import {
  WidgetBehaviourTitle,
  WidgetBehaviourContent
} from '../components/widgets/WidgetBehaviours'
import {
  WidgetStyleTitle,
  WidgetStyleContent
} from '../components/widgets/WidgetStyles'
import {
  WidgetNotificationTitle,
  WidgetNotificationContent
} from '../components/widgets/WidgetNotification'

import {
  WidgetGeneralTitle,
  WidgetGeneralContent
} from '../components/widgets/WidgetGeneral'
import getScript from '../config/getScript'
import postStyleWidget from '../config/postStyleWidget'
import getWidgetLink from '../config/getWidgetLink'
import getWidgetSettings from '../config/getWidgetSettings'

const titleContent = {
  type: 'image',
  titleOne: icon,
  titleTwo: 'Widgets'
}

class Widgets extends Component {
  state = {
    activeIndex: 0,
    triggerOnce: false,
    cssClick: false,
    timeTriggerSeconds: false,
    ExitIntentTrigger: false,
    scrollTrigger: false,
    widgetShadow: false,
    filterLanguage: 'Albania',
    script: '',
    languageList: ['', 'english'],
    language: 'as',
    englishTextArea: '',
    englishInput: '',
    positionBtn: '',
    widgetShape: '',
    displayName: '',
    widgetColor: '',
    setOfficeHour: {
      addOfficeHour: '',
      weekdays: 'Weekdays',
      officeHourFrom: '',
      officeHourTo: ''
    },
    widgetName: '',
    widgetEmail: '',
    dataProtectionMessage: '',
    widgetLanguage: '',
    timezone: '',
    dataTable: {
      type: '4',
      header: [
        {
          headerTitle: 'ID'
        },
        {
          headerTitle: 'Phone Number'
        },
        {
          headerTitle: 'Verified Timestamp'
        },
        {}
      ],
      tableContentData: [
        {
          id: '#123432',
          columnOne: '+91-7795795694',
          columnTwo: '2019-05-18 17:23',
          verify: true
        },
        {
          id: '#123432',
          columnOne: '+91-7795795695',
          columnTwo: '',
          verify: false
        }
      ]
    }
  }

  onChangeInput = e => {
    const ref = e.target.name
    const value = e.target.value

    this.setState({ [ref]: value })
  }

  handleClick = (e, titleProps) => {
    const { index } = titleProps
    const { activeIndex } = this.state
    const newIndex = activeIndex === index ? -1 : index

    this.setState({ activeIndex: newIndex })
  }

  onChangeSelect = e => {
    const name = e.target.parentNode.parentNode.parentNode.getAttribute('name')
    const value = e.target.innerText

    this.setState({ [name]: value })

    const data = countries.getNames('en')

    for (var key in data) {
      if (data[key] === value) {
        this.setState({ language: key })
      }
    }
  }

  onChangeSelectOfficeHour = e => {
    const { setOfficeHour } = this.state
    const name = e.target.parentNode.parentNode.parentNode.getAttribute('name')
    const value = e.target.innerText

    setOfficeHour[name] = value

    this.setState({ setOfficeHour })
  }

  onClickAddOfficeHour = () => {
    const { setOfficeHour } = this.state
    const weekdays = this.state.setOfficeHour.weekdays
    const officeHourFrom = this.state.setOfficeHour.officeHourFrom
    const officeHourTo = this.state.setOfficeHour.officeHourTo
    const addOfficeHour = 'addOfficeHour'
    const addOfficeHourItem =
      weekdays + ' ' + officeHourFrom + ' ' + officeHourTo

    setOfficeHour[addOfficeHour] = addOfficeHourItem

    this.setState({ setOfficeHour })
  }

  handleDataRef = (DataRef, DataState) => {
    this.setState({ [DataRef]: DataState })
  }

  handleGroupBtnData = (toggleBtn, id) => {
    this.setState({ [id]: toggleBtn })
  }

  onVerify = () => {
    this.setState({
      verified: true
    })
  }

  componentDidMount() {
    countries.registerLocale(
      require('@cospired/i18n-iso-languages/langs/en.json')
    )

    getWidgetSettings()
      .then(res => {
        console.log(res, 'try')
      })
      .catch(err => {
        console.log(err)
      })

    getScript()
      .then(res => {
        const currentScript = res.data.data[0].script
        const bubbleText = res.data.data[0].bubble_text
        const shape = res.data.data[0].shape
        const bubblePosition = res.data.data[0].bubble_position
        const color = res.data.data[0].color
        const currentLanguage = res.data.data[0].language

        const data = countries.getNames('en')
        const output = Object.keys(data).map(function(e) {
          return data[e]
        })

        let output1 = data[currentLanguage]

        this.setState(
          {
            ...this.state,
            script: currentScript,
            englishInput: bubbleText,
            positionBtn: bubblePosition,
            widgetShape: shape,
            widgetColor: color,
            languageList: output,
            language: currentLanguage,
            filterLanguage: output1
          },
          () => {
            console.log(res.data)
          }
        )
      })
      .catch(err => console.log(err))
  }

  render() {
    const { activeIndex, languageList, dataTable, script } = this.state

    return (
      <div className="fullwidth-container">
        <Title data={titleContent} />
        <div className="widget-banner-container">
          <WidgetBanner />
          <div className="widget-content-wrapper">
            <h2 className="ravi-title">Ravi`s Widget</h2>
            <Accordion className="holder-widget">
              <div className="accordion-content-wrapper">
                <Accordion.Title
                  active={activeIndex === 0}
                  index={0}
                  onClick={this.handleClick}
                >
                  <WidgetInstallTitle />
                </Accordion.Title>
                <Accordion.Content active={activeIndex === 0}>
                  <Collapse
                    script={script}
                    handleDataRef={this.handleDataRef}
                  />
                </Accordion.Content>
              </div>
              <div className="accordion-content-wrapper">
                <Accordion.Title
                  active={activeIndex === 1}
                  index={1}
                  onClick={this.handleClick}
                >
                  <WidgetGeneralTitle />
                </Accordion.Title>
                <Accordion.Content active={activeIndex === 1}>
                  <WidgetGeneralContent
                    onChangeSelect={this.onChangeSelect}
                    handleGroupBtnData={this.handleGroupBtnData}
                    onChangeInput={this.onChangeInput}
                  />
                </Accordion.Content>
              </div>
              <div className="accordion-content-wrapper">
                <Accordion.Title
                  active={activeIndex === 2}
                  index={2}
                  onClick={this.handleClick}
                >
                  <SayHelloTitle />
                </Accordion.Title>
                <Accordion.Content active={activeIndex === 2}>
                  <SayHelloContent
                    data={this.state}
                    languageList={languageList}
                    onChangeSelect={this.onChangeSelect}
                    onChangeInput={this.onChangeInput}
                  />
                </Accordion.Content>
              </div>
              <div className="accordion-content-wrapper">
                <Accordion.Title
                  active={activeIndex === 3}
                  index={3}
                  onClick={this.handleClick}
                >
                  <WidgetCallerIDTitle />
                </Accordion.Title>
                <Accordion.Content active={activeIndex === 3}>
                  <WidgetCallerIDContent dataTable={dataTable} />
                </Accordion.Content>
              </div>
              <div className="accordion-content-wrapper">
                <Accordion.Title
                  active={activeIndex === 4}
                  index={4}
                  onClick={this.handleClick}
                >
                  <WidgetAvailabilityTitle />
                </Accordion.Title>
                <Accordion.Content active={activeIndex === 4}>
                  <WidgetAvailabilityContent
                    onClickAddOfficeHour={this.onClickAddOfficeHour}
                    onChangeSelectOfficeHour={this.onChangeSelectOfficeHour}
                  />
                </Accordion.Content>
              </div>
              <div className="accordion-content-wrapper">
                <Accordion.Title
                  active={activeIndex === 5}
                  index={5}
                  onClick={this.handleClick}
                >
                  <WidgetBehaviourTitle />
                </Accordion.Title>
                <Accordion.Content active={activeIndex === 5}>
                  <WidgetBehaviourContent
                    data={this.state}
                    handleDataRef={this.handleDataRef}
                    widgetBehaviour={widgetBehaviour}
                  />
                </Accordion.Content>
              </div>
              <div className="accordion-content-wrapper">
                <Accordion.Title
                  active={activeIndex === 6}
                  index={6}
                  onClick={this.handleClick}
                >
                  <WidgetStyleTitle />
                </Accordion.Title>
                <Accordion.Content active={activeIndex === 6}>
                  <WidgetStyleContent
                    data={this.state}
                    handleGroupBtnData={this.handleGroupBtnData}
                    handleDataRef={this.handleDataRef}
                    showWidget={showWidget}
                    widgetShadow={widgetShadow}
                  />
                </Accordion.Content>
              </div>
              <div className="accordion-content-wrapper">
                <Accordion.Title
                  active={activeIndex === 7}
                  index={7}
                  onClick={this.handleClick}
                >
                  <WidgetNotificationTitle />
                </Accordion.Title>
                <Accordion.Content active={activeIndex === 7}>
                  <WidgetNotificationContent
                    onChangeSelect={this.onChangeSelect}
                    handleGroupBtnData={this.handleGroupBtnData}
                    onChangeInput={this.onChangeInput}
                  />
                </Accordion.Content>
              </div>
            </Accordion>
          </div>
        </div>
      </div>
    )
  }
}

export default Widgets
