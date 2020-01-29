import React from 'react'
import { Table } from 'semantic-ui-react'
import LeadTableHeaders from './LeadTableHeaders'
import LeadTableContent from './LeadTableContent'

const LeadTable = ({
  tableDataContent,
  isMarkAllCheckbox,
  isMarkOpen,
  onClickMarkAllCheckbox,
  onClickMark,
  onClickMarkCheckbox,
  handleScore,
  star,
  mouseEnter,
  mouseLeave,
  onHoverScore,
  toggleTags,
  handleTagsData
}) => (
  <Table singleLine>
    <Table.Header>
      <Table.Row>
        <LeadTableHeaders
          isMarkAllCheckbox={isMarkAllCheckbox}
          isMarkOpen={isMarkOpen}
          onClickMarkAllCheckbox={onClickMarkAllCheckbox}
          onClickMark={onClickMark}
        />
      </Table.Row>
    </Table.Header>
    <Table.Body>
      {tableDataContent.map((data, index) => (
        <LeadTableContent
          key={index}
          index={index}
          data={data}
          star={star}
          mouseEnter={mouseEnter}
          mouseLeave={mouseLeave}
          onClickMarkCheckbox={onClickMarkCheckbox}
          handleScore={handleScore}
          onHoverScore={onHoverScore}
          toggleTags={toggleTags}
          handleTagsData={handleTagsData}
        />
      ))}
    </Table.Body>
  </Table>
)

export default LeadTable
