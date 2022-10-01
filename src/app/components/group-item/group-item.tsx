import React from 'react'
import './group-item.scss'
import { Category } from '../../model/category'
import { faGripVertical, faChevronUp, faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

type GroupItemProps = {
  groupItemDetails: Category
}

const GroupItem = ({ groupItemDetails }: GroupItemProps) => {
  return (
    <div className="group-item">
      <header className="group-item__header">
        <FontAwesomeIcon icon={faGripVertical} />
        <span>{groupItemDetails.name}=</span>
        <FontAwesomeIcon icon={faChevronUp} className="pointer" />
        <FontAwesomeIcon icon={faXmark} className="pointer" />
      </header>
    </div>
  )
}

export default GroupItem
