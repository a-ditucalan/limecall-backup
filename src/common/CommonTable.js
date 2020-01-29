import React, { Fragment } from 'react'
import { Table } from 'semantic-ui-react'

import InvertedModal from '../common/InvertedModal'
import EditModal from '../common/EditModal'

import time from '../assets/images/mini-clock.png'
import deleteIcon from '../assets/images/delete-icon.png'
import greenCheck from '../assets/images/Dashboard 2-10.png'

const CommonTable = props => {
  const handleUpdatedData = data => {
    return props.handleUpdatedInfo(data)
  }

  return (
    <div className="common-table-wrapper">
      <Table singleLine>
        <Table.Header className="top-table-header">
          <Table.Row>
            {props.dataTable.header.map((data, i) => {
              return (
                <Table.HeaderCell
                  key={i}
                  className="default-text header-modal-style"
                >
                  {data.headerTitle}
                </Table.HeaderCell>
              )
            })}
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {props.dataTable.type === '4' ? (
            <Fragment>
              {props.dataTable.tableContentData.map((data, i) => {
                return (
                  <Table.Row key={i} className="table-content-row">
                    <Table.Cell>{data.id}</Table.Cell>
                    <Table.Cell>
                      {data.columnOne}
                      {data.verify === true ? (
                        <Fragment>
                          <img
                            src={greenCheck}
                            className="verify"
                            alt="green check"
                          />
                        </Fragment>
                      ) : data.verify === false ? (
                        <Fragment>
                          <InvertedModal />
                        </Fragment>
                      ) : null}
                    </Table.Cell>
                    <Table.Cell>
                      {data.verify === true ? (
                        <img src={time} className="mini-clock" alt="time" />
                      ) : (
                        ''
                      )}
                      {data.columnTwo}
                    </Table.Cell>
                    <Table.Cell>
                      {data.action === 'edit' ? (
                        <Fragment>
                          <EditModal
                            id={data.id}
                            teamName={data.columnOne}
                            teamType={data.columnTwo}
                            handleUpdatedData={handleUpdatedData}
                          />
                        </Fragment>
                      ) : data.verify === true ? (
                        <Fragment>
                          <img
                            src={deleteIcon}
                            className="delete-icon"
                            alt="delete"
                          />
                        </Fragment>
                      ) : (
                        data.action
                      )}
                    </Table.Cell>
                  </Table.Row>
                )
              })}
            </Fragment>
          ) : props.dataTable.type === '3' ? (
            <Fragment>
              {props.dataTable.tableContentData.map((data, i) => {
                return (
                  <Table.Row key={i} className="table-content-row">
                    <Table.Cell>{data.columnOne}</Table.Cell>
                    <Table.Cell>{data.columnTwo}</Table.Cell>
                    <Table.Cell>{data.columnThree}</Table.Cell>
                  </Table.Row>
                )
              })}
            </Fragment>
          ) : props.dataTable.type === '5' ? (
            <Fragment>
              {props.dataTable.tableContentData.map((data, i) => {
                return (
                  <Table.Row key={i} className="table-content-row">
                    <Table.Cell>{data.columnOne}</Table.Cell>
                    <Table.Cell>{data.columnTwo}</Table.Cell>
                    <Table.Cell>{data.columnThree}</Table.Cell>
                    <Table.Cell>{data.columnFour}</Table.Cell>
                    <Table.Cell>{data.columnFive}</Table.Cell>
                  </Table.Row>
                )
              })}
            </Fragment>
          ) : null}
        </Table.Body>
      </Table>
    </div>
  )
}

export default CommonTable
