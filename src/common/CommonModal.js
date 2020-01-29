import React, { useState } from 'react'
import { Button, Modal } from 'semantic-ui-react'

import CommonButtons from './CommonButtons'
import CommonInput from './CommonInput'

const CommonModal = ({ handleData }) => {
  const [open, setOpen] = useState(false)
  const [data, setData] = useState({
    id: '#456769',
    columnOne: null,
    columnTwo: null,
    action: 'edit'
  })

  const onChangeInput = e => {
    const { name, value } = e.target

    if (name === 'name') {
      data.columnOne = value
    } else if (name === 'type') {
      data.columnTwo = value
    }

    setData(data)
  }

  const onSave = () => {
    setOpen(false)
    handleData(data)
  }

  const handleModalOpen = () => {
    setOpen(true)
  }

  const handleModalClose = () => {
    setOpen(false)
  }

  return (
    <Modal
      className="modal-wrapper"
      trigger={
        <Button className="btn-style btn-blue" onClick={handleModalOpen}>
          Create Team
        </Button>
      }
      basic
      size="small"
      open={open}
      onClose={handleModalClose}
    >
      <Modal.Header className="modal-header">Create New Team</Modal.Header>
      <Modal.Content>
        <div className="modal-input-wrapper">
          <p className="modal-input-text default-text">Name</p>
          <CommonInput
            onChange={onChangeInput}
            inputStyle="modal-input"
            name="name"
          />
        </div>
        <div className="modal-input-wrapper">
          <p className="modal-input-text default-text">Type</p>
          <CommonInput
            onChange={onChangeInput}
            inputStyle="modal-input"
            name="type"
          />
        </div>
      </Modal.Content>
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

export default CommonModal
