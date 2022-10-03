import React from 'react'
import './connect-button.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'

const ConnectButton = () => {
  return (
    <div className="btn-wrapper">
      <span>AND</span>
      <FontAwesomeIcon icon={faChevronDown} />
    </div>
  )
}

export default ConnectButton
