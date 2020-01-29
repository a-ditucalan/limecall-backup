import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import classNames from 'classnames'

import { menus } from './Menus'
import HoursModal from '../../common/HoursModal'
import ProfileModal from '../../common/ProfileModal'

const activeList = {
  activeSettings: false,
  activeCirle: false,
  activePeople: false,
  activeSquare: false,
  activePhone: false,
  activeHome: false,
  activePhoneCall: false,
  activeIntegration: false
}

class Navbar extends Component {
  state = { ...activeList, activeComponent: 'MySettings', activeTab: 'account' }

  componentDidMount() {
    let urlLink = window.location.hash
    console.log(urlLink, 'se')
    switch (urlLink) {
      case '/':
        this.setState({ ...activeList, activeHome: true })
        break
      case '#/callLog':
        this.setState({ ...activeList, activePhoneCall: true })
        break
      case '#/home':
        this.setState({ ...activeList, activeHome: true })
        break
      case '#/leads':
        this.setState({ ...activeList, activePhone: true })
        break
      case '#/widgets':
        this.setState({ ...activeList, activeSquare: true })
        break
      case '#/integration':
        this.setState({ ...activeList, activeIntegration: true })
        break
      case '#/settings':
        this.setState({ ...activeList, activePeople: true })
        break
      default:
        this.setState({ ...activeList })
        break
    }
  }

  changeActiveMenu(key) {
    const activeListCopy = { ...activeList }

    if (key !== 'activeSettings') {
      activeListCopy.activeSettings = false
      activeListCopy[key] = true
    } else {
      activeListCopy.activeSettings = true
      activeListCopy[key] = true
    }
    if (key === 'activePeople') {
      this.setState(
        {
          ...activeListCopy,
          activeTab: 'Team Settings',
          activeComponent: 'TeamSettings'
        },
        () => {
          return this.props.handleActive(
            this.state.activeTab,
            this.state.activeComponent
          )
        }
      )
    } else {
      this.setState(
        {
          ...activeListCopy,
          activeTab: 'Account',
          activeComponent: 'MySettings'
        },
        () => {
          return this.props.handleActive(
            this.state.activeTab,
            this.state.activeComponent
          )
        }
      )
    }
  }

  onCloseModal = () => {
    if (document.querySelector('.dimmer')) {
      document.querySelector('.dimmer').click()
    }
  }

  activeHandle = component => {
    this.onCloseModal()
    if (component === 'menuSettings') {
      this.changeActiveMenu('activeSettings')
    } else if (component === 'menuPeople') {
      this.changeActiveMenu('activePeople')
    } else if (component === 'menuSquare') {
      this.changeActiveMenu('activeSquare')
    } else if (component === 'menuPhone') {
      this.changeActiveMenu('activePhone')
    } else if (component === 'menuHome') {
      this.changeActiveMenu('activeHome')
    } else if (component === 'menuPhoneCall') {
      this.changeActiveMenu('activePhoneCall')
    } else {
      this.changeActiveMenu('activeCirle')
    }
  }

  render() {
    return (
      <div className="nav-container">
        <div className="top-nav">
          {menus.map((menu_item, index) => (
            <Link
              key={index}
              className={classNames('menu-link', {
                'nav-active': this.state[menu_item.stateKey]
              })}
              onClick={() => {
                this.activeHandle(menu_item.handle)
              }}
              to={menu_item.url}
            >
              <div className="icon-wrapper">
                <img
                  className="inactive"
                  src={menu_item.inactiveIcon}
                  alt="icon"
                />
                <img className="active" src={menu_item.activeIcon} alt="icon" />
              </div>
              <div className="hover-name-wrapper">
                <i className="fas fa-caret-left"></i>
                <p>{menu_item.hoverName}</p>
              </div>
            </Link>
          ))}
        </div>
        <div className="bottom-nav">
          <div className="menu-link">
            <div className="icon-wrapper">
              <HoursModal />
            </div>
          </div>
          <div className="menu-link">
            <div className="icon-wrapper">
              <ProfileModal />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Navbar
