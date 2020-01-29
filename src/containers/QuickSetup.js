import React, { useState, useEffect } from 'react'

import Requirement from '../components/quicksetup/requirement/Requirement'
import WizardBox from '../components/quicksetup/WizardBox'
import Install from '../components/quicksetup/Install'
import GoLive from '../components/quicksetup//GoLive'
import Customize from '../components/quicksetup/customize/Customize'
import CallRouting from '../components/quicksetup/CallRouting'

import getScript from '../config/getScript'

const QuickSetup = () => {
  const [progress, setProgress] = useState(1)
  const [script, setScript] = useState('')
  let ActiveSetupComponent = Requirement

  const handleContinue = () => {
    setProgress(progress + 1)
  }

  switch (progress) {
    case 1:
      ActiveSetupComponent = CallRouting
      break
    case 2:
      ActiveSetupComponent = Requirement
      break
    case 3:
      ActiveSetupComponent = Install
      break
    case 4:
      ActiveSetupComponent = Customize
      break
    case 5:
      ActiveSetupComponent = GoLive
      break
    default:
      ActiveSetupComponent = Requirement
      break
  }

  useEffect(() => {
    getScript()
      .then(res => {
        console.log(res)
        const currentScript = res.data.data[0].script
        setScript(currentScript)
      })
      .catch(err => console.log(err))
  }, [script])

  return (
    <div className="quicksetup">
      <div className="quicksetup-wrapper">
        <div className="quicksetup-wizard">
          <WizardBox activeSetup={progress} />
        </div>
        <div className="quicksetup-content">
          <ActiveSetupComponent script={script} onClick={handleContinue} />
        </div>
      </div>
    </div>
  )
}

export default QuickSetup
