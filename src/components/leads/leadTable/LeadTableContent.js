import React, { Fragment } from 'react'
import { Image, Table } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import CommonCheckbox from '../../../common/CommonCheckbox'
import starYellow from '../../../assets/images/star-yellow.svg'
import starWhite from '../../../assets/images/star-white.svg'
import returnCall from '../../../assets/images/call-return.svg'
import email from '../../../assets/images/email.svg'
import classname from 'classnames'

const LeadTableContent = ({
  index,
  data,
  onClickMarkCheckbox,
  handleScore,
  star,
  mouseEnter,
  mouseLeave,
  onHoverScore,
  toggleTags,
  handleTagsData
}) => (
  <Table.Row className="table-content-row">
    <Table.Cell data-key={index}>
      <CommonCheckbox
        onChange={onClickMarkCheckbox}
        name="isChecked"
        checked={data.isChecked}
      />
    </Table.Cell>
    <Table.Cell>{data.id}</Table.Cell>
    <Table.Cell>{data.time}</Table.Cell>
    <Table.Cell>{data.contact}</Table.Cell>
    <Table.Cell>{data.email}</Table.Cell>
    <Table.Cell>
      <div className={data.source === 'Webpage' ? 'webpage' : 'facebook'}>
        {data.source}
      </div>
    </Table.Cell>
    <Table.Cell>{data.location}</Table.Cell>
    <Table.Cell>
      <div className={data.status === 'Online' ? 'online' : 'offline'}>
        {data.status}
      </div>
    </Table.Cell>
    <Table.Cell>{data.agent}</Table.Cell>
    <Table.Cell>
      <div className="holder-star">
        {data.score === '3' ? (
          <Fragment>
            <Image src={starYellow} data-score="1" onClick={handleScore} />
            <Image src={starYellow} data-score="2" onClick={handleScore} />
            <Image src={starYellow} data-score="3" onClick={handleScore} />
          </Fragment>
        ) : data.score === '2' ? (
          <Fragment>
            <Image src={starYellow} data-score="1" onClick={handleScore} />
            <Image src={starYellow} data-score="2" onClick={handleScore} />
            <Image
              src={starWhite}
              data-score="3"
              onClick={handleScore}
              // onMouseEnter={onHoverScore}
            />
          </Fragment>
        ) : (
          <Fragment>
            <Image src={starYellow} data-score="1" onClick={handleScore} />
            <Image
              src={starWhite}
              data-score="2"
              onClick={handleScore}
              onMouseEnter={mouseEnter}
              onMouseLeave={mouseLeave}
            />
            <Image
              src={starWhite}
              data-score="3"
              onMouseEnter={mouseEnter}
              onMouseLeave={mouseLeave}
              onClick={handleScore}
            />
          </Fragment>
        )}
      </div>
    </Table.Cell>
    <Table.Cell className="tags" onClick={toggleTags}>
      <div className="holder-dropdown">
        <span onClick={handleTagsData}>Existing Customer</span>
        <span onClick={handleTagsData}>Meeting Scheduled</span>
        <span onClick={handleTagsData}>Opportunity</span>
      </div>
      {data.tag.map((tag, index) => {
        return (
          <div
            key={index}
            className={classname('tag-holder', {
              existing: tag === 'Existing Customer',
              meeting: tag === 'Meeting Scheduled',
              opportunity: tag === 'Opportunity'
            })}
          >
            {tag}
          </div>
        )
      })}
    </Table.Cell>
    <Table.Cell>
      <div className="holder-actions">
        <Link to="/calldashboard">
          <Image src={returnCall} />
        </Link>
        <Link to="/calldashboard">
          <Image src={email} />
        </Link>
      </div>
    </Table.Cell>
  </Table.Row>
)

export default LeadTableContent
