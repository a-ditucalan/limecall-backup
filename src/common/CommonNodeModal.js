import React, { useState, Fragment } from 'react'
import { Button, Modal, Form, Radio } from 'semantic-ui-react'
import CommonButtons from './CommonButtons'
import CommonInput from './CommonInput'
import CommonCheckbox from './CommonCheckbox'

const CommonNodeMadal = ({ modalData, modalWrapper, handleData }) => {
  const [open, setOpen] = useState(false)
  const [dataModal, setDataModal] = useState({ checkbox: [], radio: '' })

  const onChangeInput = e => {
    const key = e.target.name
    const value = e.target.value
    let currentDataModal = dataModal

    currentDataModal[key] = value
    setDataModal(currentDataModal)
    console.log(dataModal)
  }

  const onChangeSelect = e => {
    const value = e.target.innerText
    const checkbox = dataModal.checkbox
    const index = checkbox.indexOf(value)

    if (index === -1) {
      checkbox.push(value)
    } else {
      checkbox.splice(index, 1)
    }
    setDataModal(checkbox)
  }

  const onSave = () => {
    setOpen(false)
    console.log(dataModal)
    return handleData(dataModal)
  }

  const handleModalOpen = () => {
    setOpen(true)
  }

  const handleModalClose = () => {
    setOpen(false)
  }

  const onChangeRadio = e => {
    const key = e.target.parentNode.parentNode.getAttribute('name')
    const value = e.target.textContent
    let currentDataModal = dataModal

    currentDataModal[key] = value
    setDataModal(currentDataModal)
  }

  return (
    <Modal
      className={modalWrapper.wrapper}
      trigger={
        <Button className="btn-style btn-green" onClick={handleModalOpen}>
          <i className="fas fa-plus"></i>
          {modalWrapper.btnText}
        </Button>
      }
      basic
      size="small"
      open={open}
      onClose={handleModalClose}
    >
      <Fragment>
        {modalData.map((item, i) => {
          if (item.type === 'input') {
            return (
              <Fragment key={i}>
                <Modal.Header className="modal-header">
                  {item.headerTitle}
                </Modal.Header>
                <Modal.Content>
                  {item.modalContent.map((item2, j) => {
                    return (
                      <Fragment key={j}>
                        <div className="modal-input-wrapper">
                          <CommonInput
                            onChange={onChangeInput}
                            inputStyle={modalWrapper.inputStyle}
                            placeholder={item2.input}
                            name={item2.input}
                          />
                        </div>
                      </Fragment>
                    )
                  })}
                </Modal.Content>
              </Fragment>
            )
          } else if (item.type === 'checkbox') {
            return (
              <Fragment key={i}>
                <Modal.Header className="modal-header">
                  {item.headerTitle}
                </Modal.Header>
                <Modal.Content>
                  <div className="modal-checkbox-wrapper">
                    {item.modalContent.map((item2, j) => {
                      return (
                        <Fragment key={j}>
                          <CommonCheckbox
                            onChange={onChangeSelect}
                            text={item2.checkbox}
                            checkboxStyle="modal-checkbox"
                            name="checkbox"
                          />
                        </Fragment>
                      )
                    })}
                  </div>
                </Modal.Content>
              </Fragment>
            )
          } else if (item.type === 'radio') {
            return (
              <Fragment key={i}>
                <Modal.Header className="modal-header">
                  {item.headerTitle}
                </Modal.Header>
                <Modal.Content>
                  <div className="modal-checkbox-wrapper">
                    <Form>
                      {item.modalContent.map((itemRadio, index) => {
                        return (
                          <Fragment key={index}>
                            <Form.Field name="radio" key={index}>
                              <Radio
                                label={itemRadio.radio}
                                value={itemRadio.radio}
                                checked={dataModal.radio === itemRadio.radio}
                                onChange={onChangeRadio}
                              />
                            </Form.Field>
                          </Fragment>
                        )
                      })}
                    </Form>
                  </div>
                </Modal.Content>
              </Fragment>
            )
          } else {
            return null
          }
        })}
      </Fragment>
      <Modal.Actions className="modal-button-wrapper">
        <CommonButtons
          onClick={onSave}
          content="Save"
          background="blue"
          btnClass="btn-modal-style"
        />
      </Modal.Actions>
    </Modal>
  )
}
export default CommonNodeMadal
