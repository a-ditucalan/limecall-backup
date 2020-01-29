import React, { Component } from 'react'

import CommonTable from '../../common/CommonTable'
import Modal from '../../common/CommonModal'
import getTeam from '../../config/getTeam'
import postCreateTeam from '../../config/postCreateTeam'
import updateTeamMember from '../../config/updateTeamMember'

class TeamSettings extends Component {
  state = {
    dataTable: {
      type: '4',
      header: [
        {
          headerTitle: 'ID'
        },
        {
          headerTitle: 'Name'
        },
        {
          headerTitle: 'Type'
        },
        {
          headerTitle: 'Action'
        }
      ],
      tableContentData: []
    }
  }

  handleData = data => {
    if (data.columnOne !== null && data.columnTwo !== null) {
      const { dataTable } = this.state
      const tableContentData = dataTable.tableContentData
      const duplicate = tableContentData.find(
        contentData => contentData.id === data.id
      )

      if (!duplicate) {
        postCreateTeam(data.columnOne)
        getTeam()
          .then(res => {
            const teamData = res.data.data.teams

            const duplicateID = tableContentData.find(
              contentData => contentData.id === res.data.data.teams.id
            )

            if (!duplicateID) {
              let teamResult = teamData[teamData.length - 1]
              console.log(teamResult)

              const dataTeam = {
                id: teamResult.id,
                columnOne: data.columnOne,
                columnTwo: 'Secondary',
                action: 'edit'
              }

              dataTable.tableContentData.push(dataTeam)
              this.setState({ ...dataTable })
            }
          })
          .catch(err => console.log(err))

        // close modal
      } else {
        alert(`${data.id} has a duplicate!`)
      }

      this.setState({ dataTable: dataTable })
    } else {
      alert('all field is required')
    }
  }

  handleUpdatedInfo = data => {
    const { dataTable } = this.state
    let tableContentData = dataTable.tableContentData
    console.log(data)
    tableContentData.forEach((item, index) => {
      if (item.id === data.idModal) {
        console.log(data)
        updateTeamMember(data)
        tableContentData[index].columnOne = data.columnOne
        tableContentData[index].columnTwo = data.columnTwo
      } else {
        console.log(item.id, data.idModal, false)
      }
    })

    this.setState({ ...dataTable })
  }

  componentDidUpdate() {
    const { dataTable } = this.state
    let tableContentData = dataTable.tableContentData
    let itemId
    getTeam()
      .then(res => {
        const { dataTable } = this.state

        console.log(res.data.data.teams)
        res.data.data.teams.map((item, i) => {
          return (itemId = item.id)
        })

        const duplicate = tableContentData.find(
          contentData => contentData.id === itemId
        )

        if (!duplicate) {
          res.data.data.teams.map((item, i) => {
            const dataTeam = {
              id: item.id,
              columnOne: item.name,
              columnTwo: 'Secondary',
              action: 'edit'
            }

            return dataTable.tableContentData.push(dataTeam)
          })
          this.setState({ ...dataTable })
        }
      })
      .catch(err => console.log(err))
  }

  componentDidMount() {
    getTeam()
      .then(res => {
        const { dataTable } = this.state

        console.log(res.data.data.teams)
        res.data.data.teams.map((item, i) => {
          const dataTeam = {
            id: item.id,
            columnOne: item.name,
            columnTwo: 'Secondary',
            action: 'edit'
          }

          return dataTable.tableContentData.push(dataTeam)
        })

        this.setState({ ...dataTable }, () => {
          console.log(this.state, 'tee')
        })
      })
      .catch(err => console.log(err))
  }

  render() {
    return (
      <div className="teamsetting-wrapper">
        <div className="create-button-holder">
          <p className="create-button-title">Total 1 team</p>
          <Modal handleData={this.handleData} />
        </div>
        <CommonTable
          handleUpdatedInfo={this.handleUpdatedInfo}
          dataTable={this.state.dataTable}
        />
      </div>
    )
  }
}

export default TeamSettings
