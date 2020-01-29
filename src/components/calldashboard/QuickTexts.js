import React from 'react'
import { TextArea } from 'semantic-ui-react'
import CommonCheckbox from '../../common/CommonCheckbox'
import CommonButtons from '../../common/CommonButtons'

const QuickTextHeading = () => (
  <div className="message-heading">
    <button>
      <i className="fas fa-arrow-left"></i>
    </button>
    <p className="message-title">
      Ventura Damaris <span className="message-id">(#456354)</span>
    </p>
  </div>
)

const QuickTextContent = ({ messages }) => (
  <div className="message-content">
    {messages.map((message, i) => (
      <div className={`message-text message-${message.status}`} key={i}>
        <div className="message-text-holder">
          <p>
            Lorem ipsum dolor sir amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore magna
          </p>
        </div>
        <div className="message-image">{/* <Image src="#" /> */}</div>
      </div>
    ))}
  </div>
)

const QuickTextFooter = () => (
  <div className="message-footer">
    <div className="message-settings">
      <p className="message-quick-text">Quick texts</p>
      <button>
        <i className="fas fa-cog"></i>
      </button>
    </div>
    <TextArea placeholder="Type your message here..." />
    <div className="message-save">
      <CommonCheckbox text="Save as Quick Text" />
      <CommonButtons content="Send" background="green" />
    </div>
  </div>
)

const QuickTexts = ({ messages }) => (
  <div className="message">
    <QuickTextHeading />
    <QuickTextContent messages={messages} />
    <QuickTextFooter />
  </div>
)

export default QuickTexts
