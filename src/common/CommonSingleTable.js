import React from 'react'
import { Table } from 'semantic-ui-react'

const SingleTable = props => {
  return (
    <div className="single-table">
      <Table singleLine>
        <Table.Header className="top-table-header">
          <Table.Row>
            <Table.HeaderCell className="default-text">
              {props.tableData.success}
            </Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          <Table.Row className="table-content-row">
            <Table.Cell></Table.Cell>
          </Table.Row>
        </Table.Body>
        <Table.Header className="bottom-table-header">
          <Table.Row>
            <Table.HeaderCell className="default-text">
              Sent from {props.tableData.from}
            </Table.HeaderCell>
          </Table.Row>
        </Table.Header>
      </Table>
    </div>
  )
}

export default SingleTable
