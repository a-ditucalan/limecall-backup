import React, { useState } from 'react'
import { Modal } from 'semantic-ui-react'

import CommonButtons from './CommonButtons'
import CommonInput from './CommonInput'

const CommonModal = ({ id, teamName, teamType, handleUpdatedData }) => {
  const [open, setOpen] = useState(false)
  const [data, setData] = useState({
    idModal: id,
    columnOne: teamName,
    columnTwo: teamType
  })

  const onChangeInput = e => {
    const { name, value } = e.target

    if (name === 'name') {
      setData({ ...data, columnOne: value })
    } else if (name === 'type') {
      setData({ ...data, columnTwo: value })
    }

    console.log(data.columnOne)
  }

  const onSave = () => {
    setOpen(false)

    return handleUpdatedData(data)
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
      trigger={<i className="fa fa-edit" onClick={handleModalOpen} />}
      basic
      size="small"
      open={open}
      onClose={handleModalClose}
    >
      <Modal.Header className="modal-header">Edit Team Info</Modal.Header>
      <Modal.Content>
        <div className="modal-input-wrapper">
          <p className="modal-input-text default-text">Name</p>
          <CommonInput
            value={data['columnOne']}
            onChange={onChangeInput}
            inputStyle="modal-input"
            name="name"
          />
        </div>
        <div className="modal-input-wrapper">
          <p className="modal-input-text default-text">Type</p>
          <CommonInput
            value={data['columnTwo']}
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
