import React, { useState, useEffect } from 'react'

const InnerSidebar = ({ dataInnerMenu, activeComponent, tabs, handleData }) => {
  const [activeInnerNav, setActiveInnerNav] = useState(
    dataInnerMenu[0].mainSidebar.replace(/\s/g, '')
  )
  const [prevInnerNav, setPrevInnerNav] = useState(
    dataInnerMenu[0].mainSidebar.replace(/\s/g, '')
  )
  const currentComponent = activeComponent

  const onClickInner = event => {
    const stateName = event.currentTarget.firstChild.getAttribute('id')
    const initialTab = tabs[0]

    if (currentComponent === 'TeamSettings') {
      document.querySelector('#TeamSettings').classList.remove('active')
    }

    setActiveInnerNav(stateName)
    handleData(stateName, initialTab)
  }

  useEffect(() => {
    if (currentComponent === 'TeamSettings') {
      document.querySelector('#TeamSettings').classList.add('active')
      document.querySelector('#MySettings').classList.remove('active')
    }
  }, [currentComponent])

  return (
    <div className="innersidebar-container">
      <div className="innersidebar-wrapper">
        {dataInnerMenu.map((menu, i) => (
          <div key={i} onClick={onClickInner} className="innersidebar-subitem">
            <span
              id={`${menu.mainSidebar.replace(/\s/g, '')}`}
              className={
                activeInnerNav === `${menu.mainSidebar.replace(/\s/g, '')}`
                  ? 'active'
                  : null
              }
            >
              {menu.mainSidebar}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default InnerSidebar
