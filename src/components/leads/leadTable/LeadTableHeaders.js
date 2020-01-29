import React, { Fragment } from 'react'
import { Table } from 'semantic-ui-react'
import CommonCheckbox from '../../../common/CommonCheckbox'

const LeadTableHeaders = ({
  isMarkAllCheckbox,
  isMarkOpen,
  onClickMarkAllCheckbox,
  onClickMark
}) => (
  <Fragment>
    <Table.HeaderCell>
      <div className="mark-all">
        <CommonCheckbox
          onChange={onClickMarkAllCheckbox}
          name="isMarkAllCheckbox"
          checked={isMarkAllCheckbox}
        />
        <button onClick={onClickMark} className="btn-mark" type="button">
          <i className="fas fa-chevron-down"></i>
        </button>
        <div className={isMarkOpen ? 'mark active' : 'mark'}>
          <span className="checkbox-item">All</span>
          <span className="checkbox-item">None</span>
          <span className="checkbox-item">Lorem</span>
          <span className="checkbox-item">Ipsum</span>
          <span className="checkbox-item">Dolor</span>
        </div>
      </div>
    </Table.HeaderCell>
    <Table.HeaderCell>ID</Table.HeaderCell>
    <Table.HeaderCell>TIME</Table.HeaderCell>
    <Table.HeaderCell>CONTACT NO.</Table.HeaderCell>
    <Table.HeaderCell>EMAIL</Table.HeaderCell>
    <Table.HeaderCell>SOURCE</Table.HeaderCell>
    <Table.HeaderCell>LOCATION</Table.HeaderCell>
    <Table.HeaderCell>STATUS</Table.HeaderCell>
    <Table.HeaderCell>AGENT</Table.HeaderCell>
    <Table.HeaderCell>SCORE</Table.HeaderCell>
    <Table.HeaderCell>TAG</Table.HeaderCell>
    <Table.HeaderCell>ACTIONS</Table.HeaderCell>
  </Fragment>
)

export default LeadTableHeaders
