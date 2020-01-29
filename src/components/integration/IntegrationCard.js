import React from 'react'

import IntegrationModal from '../../common/IntegrationModal'

import zapierActive from '../../assets/images/Asset 10.svg'
import zapierColored from '../../assets/images/zapier-colored.svg'
import modalHubspot from '../../assets/images/hubspotModal.svg'
import modalZapier from '../../assets/images/Dashboard-89.png'
import googleModal from '../../assets/images/googleModal.svg'
import googleManager from '../../assets/images/googleTagInactive.svg'
import googleManagerActive from '../../assets/images/googleTagActive.svg'
import hubspotInactive from '../../assets/images/hubstop-inactive.svg'
import hubspotActive from '../../assets/images/hubspot-active.svg'
import wordpressModal from '../../assets/images/wordpressModal.svg'
import wordpressActive from '../../assets/images/wordpress-active.svg'
import wordpressInactive from '../../assets/images/wordress-inactive.svg'
import intercomActive from '../../assets/images/intercom-active.svg'
import intercomInactive from '../../assets/images/intercom-inactive.svg'
import intercomModal from '../../assets/images/intercomModal.svg'

const IntegrationCard = ({ selectedApp, onClickSelectedApp }) => {
  return (
    <div className="integration-card-holder">
      <div
        onClick={onClickSelectedApp}
        name="zapier"
        className="integration-card"
      >
        <div className="integration-img-holder" name="zapier">
          <img
            name="zapier"
            src={selectedApp === 'zapier' ? zapierActive : zapierColored}
            alt="logo"
          />
        </div>
        <IntegrationModal
          modalImg={modalZapier}
          selectedData={selectedApp}
          title="Zapier"
          id="zapier"
        />
      </div>
      <div
        onClick={onClickSelectedApp}
        className="integration-card"
        name="googleManager"
      >
        <div name="googleManager" className="integration-img-holder">
          <img
            name="googleManager"
            src={
              selectedApp === 'googleManager'
                ? googleManagerActive
                : googleManager
            }
            alt="logo"
          />
        </div>
        <IntegrationModal
          modalImg={googleModal}
          selectedData={selectedApp}
          title="Google Manager"
          id="googleManager"
        />
      </div>
      <div
        onClick={onClickSelectedApp}
        className="integration-card"
        name="hubSpot"
      >
        <div name="hubSpot" className="integration-img-holder">
          <img
            name="hubSpot"
            src={selectedApp === 'hubSpot' ? hubspotActive : hubspotInactive}
            alt="logo"
          />
        </div>
        <IntegrationModal
          modalImg={modalHubspot}
          selectedData={selectedApp}
          title="HubSpot"
          id="hubSpot"
        />
      </div>
      <div
        onClick={onClickSelectedApp}
        className="integration-card"
        name="wordpress"
      >
        <div name="wordpress" className="integration-img-holder">
          <img
            name="wordpress"
            src={
              selectedApp === 'wordpress' ? wordpressActive : wordpressInactive
            }
            alt="logo"
          />
        </div>
        <IntegrationModal
          modalImg={wordpressModal}
          selectedData={selectedApp}
          title="Wordpress"
          id="wordpress"
        />
      </div>
      <div
        onClick={onClickSelectedApp}
        className="integration-card"
        name="intercom"
      >
        <div name="intercom" className="integration-img-holder">
          <img
            name="intercom"
            src={selectedApp === 'intercom' ? intercomActive : intercomInactive}
            alt="logo"
          />
        </div>
        <IntegrationModal
          modalImg={intercomModal}
          selectedData={selectedApp}
          title="Intercom"
          id="intercom"
        />
      </div>
    </div>
  )
}

export default IntegrationCard
