import React, { Component } from 'react'

import CommonInput from '../../common/CommonInput'
import CommonTable from '../../common/CommonTable'
import Modal from '../../common/CommonNodeModal'
import getTeamMember from '../../config/getTeamMember'

const modalData = [
  {
    headerTitle: 'Add Team Member',
    type: 'input',
    modalContent: [
      {
        input: 'name'
      },
      {
        input: 'email'
      }
    ]
  },
  {
    headerTitle: 'Member Teams',
    type: 'checkbox',
    modalContent: [
      {
        checkbox: 'Item 1'
      },
      {
        checkbox: 'Item 2'
      },
      {
        checkbox: 'Item 3'
      },
      {
        checkbox: 'Item 4'
      },
      {
        checkbox: 'Item 5'
      }
    ]
  },
  {
    headerTitle: 'Member Role',
    type: 'radio',
    modalContent: [
      {
        radio: 'Item 1'
      },
      {
        radio: 'Item 2'
      },
      {
        radio: 'Item 3'
      },
      {
        radio: 'Item 4'
      },
      {
        radio: 'Item 5'
      }
    ]
  }
]

const modalWrapper = {
  wrapper: 'modal2-wrapper',
  btnText: 'Add Team Member',
  inputStyle: 'modal-input-style'
}

class ManageTeamMates extends Component {
  state = {
    dataTable: {
      type: '8',
      header: [
        {
          headerTitle: 'ID'
        },
        {
          headerTitle: 'Status'
        },
        {
          headerTitle: 'Name'
        },
        {
          headerTitle: 'Email'
        },
        {
          headerTitle: 'Role'
        },
        {
          headerTitle: 'Account Status'
        },
        {
          headerTitle: 'Phone Number Status'
        },
        {
          headerTitle: 'Action'
        }
      ],
      tableContentData: [
        {
          id: '',
          status: '',
          name: '',
          email: '',
          role: '',
          accountStatus: '',
          phoneNumberStatus: '',
          action: ''
        }
      ]
    }
  }

  handleData = data => {
    console.log(data)
    this.setState(
      {
        tableContentData: data
      },
      () => {
        console.log(this.state.tableContentData)
      }
    )
  }

  componentDidMount() {
    getTeamMember()
      .then(res => {
        console.log(res.data)
      })
      .catch(err => {
        console.log(err)
      })
  }

  render() {
    return (
      <div className="manage-teammates-wrapper">
        <h3 className="bold-text">Team Settings</h3>
        <p className="subtext default-text sub-description">
          Search for, manage or add new teammates on Limecall
        </p>
        <div className="textarea-wrapper">
          <p className="subtext default-text textarea-subtext">
            Press <span>enter</span> or <span>,</span> to add a tag. Press{' '}
            <span>Backspace</span> to edit previous tag
          </p>
        </div>
        <div className="input-search-wrapper">
          <p className="sub-text default-text input-description">
            0 Active/ 0 away
          </p>
          <div className="input-search-holder">
            <div className="input-search-box">
              <CommonInput
                icon="search"
                iconPosition="left"
                placeholder="Search Name or Email"
              />
            </div>
            <Modal
              modalWrapper={modalWrapper}
              handleData={this.handleData}
              modalData={modalData}
            />
          </div>
        </div>
        <div className="manage-teammates-table">
          <CommonTable dataTable={this.state.dataTable} />
        </div>
      </div>
    )
  }
}

export default ManageTeamMates
