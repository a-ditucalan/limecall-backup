import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Modal } from 'semantic-ui-react'

import avatar from '../assets/images/Dashboard-27.png'
import avatarBox from '../assets/images/Dashboard-25.png'
import arrow from '../assets/images/Dashboard-33.png'

import getProfile from '../config/getProfile'
import postLogout from '../config/postLogout'

const ProfileModal = () => {
  const [open, setOpen] = useState(false)
  const [profileInfo, setProfileInfo] = useState({
    profName: '',
    profEmail: ''
  })
  const close = () => setOpen(false)

  const onCloseModal = () => {
    const profile = document.querySelector('.hours-call-wrapper')
    if (profile) {
      profile.parentNode.parentNode.parentNode.click()
    }
  }

  const handleModalOpen = () => {
    onCloseModal()
    setOpen(!open)
  }

  useEffect(() => {
    getProfile()
      .then(res => {
        setProfileInfo({
          ...profileInfo,
          profName: res.data.data.name,
          profEmail: res.data.data.email
        })
        console.log(res.data.data)
      })
      .catch(err => console.log(err))
  }, [])

  const handleOnSubmit = () => {
    postLogout()
      .then(res => {
        console.log(res)
        window.location.hash = '#/'
      })
      .catch(err => {
        console.log(err)
      })
  }
  
  return (
    <div className="mini-profile">
      <Modal
        className="mini-profile"
        size="mini"
        open={open}
        onClose={close}
        trigger={<img src={avatar} onClick={handleModalOpen} alt="img" />}
      >
        <Modal.Content>
          <div className="profile-wrapper">
            <div className="profile-link-wrapper">
              <Link to="#" className="link-holder">
                <p className="profile-link-text">Whats New in LimeCall?</p>
              </Link>
              <Link to="#" className="link-holder">
                <p className="profile-link-text">Give Feedback</p>
              </Link>
            </div>
            <div className="profile-content-wrapper">
              <div className="profile-avatar-holder">
                <img src={avatarBox} alt="avatar" />
              </div>
              <div className="profile-content-holder">
                <p className="profile-name">{profileInfo['profName']}</p>
                <p className="profile-email">{profileInfo['profEmail']}</p>
                <p className="edit-profile">Edit profile</p>
              </div>
            </div>
            <div className="profile-plan-wrapper">
              <p className="plan-avail">Starter Plan</p>
              <p className="plan-expiration">Next billing at 30 March 2020</p>
              <p className="manage-profile">Manage Account</p>
            </div>
            <div className="sign-out-wrapper">
              <img src={arrow} alt="arrow" />
              <div className="sign-out-text-holder">
                <p className="sign-out-text" onClick={handleOnSubmit}>
                  Sign Out
                </p>
              </div>
            </div>
          </div>
        </Modal.Content>
      </Modal>
    </div>
  )
}

export default ProfileModal
