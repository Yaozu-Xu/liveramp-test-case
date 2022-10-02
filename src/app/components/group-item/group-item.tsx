import React, { useState } from 'react'
import './group-item.scss'
import { Category, CategoryItem } from '../../model/category'
import { faGripVertical, faChevronUp, faXmark, faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

type GroupItemProps = {
  groupItemDetails: Category
  removeGroupItem: any
}

const GroupItem = ({ groupItemDetails, removeGroupItem }: GroupItemProps) => {
  const [open, setOpen] = useState<boolean>(true)
  const [categoryItem, setCategoryItem] = useState<CategoryItem[]>(groupItemDetails.items)

  const getSelectedCount = () => categoryItem.filter((_) => _.selected).length

  const getSelectedContent = () =>
    categoryItem
      .filter((_) => _.selected)
      .map((_) => _.type)
      .join(',')

  const handleCheckboxChange = (currentCategoryItem: CategoryItem) => {
    setCategoryItem((arr) => [
      ...arr.map((_) => {
        if (_.type === currentCategoryItem.type) {
          return {
            ..._,
            selected: !_.selected,
          }
        }
        return _
      }),
    ])
  }
  return (
    <div className="group-item">
      <header className="group-item__header">
        <FontAwesomeIcon icon={faGripVertical} />
        <span className="group-item__header__type">{groupItemDetails.displayName}</span>
        <span className="group-item__header__selected">={getSelectedContent()}</span>
        <FontAwesomeIcon
          icon={open ? faChevronUp : faChevronDown}
          className="pointer"
          onClick={() => setOpen((pre) => !pre)}
        />
        <FontAwesomeIcon
          icon={faXmark}
          className="pointer"
          onClick={() => removeGroupItem(groupItemDetails)}
          style={{ marginLeft: '10px' }}
        />
      </header>
      {open && (
        <div className="group-item__body">
          <div className="group-item__body__title">
            {`${groupItemDetails.grandParentFolder} / ${groupItemDetails.parenFolder} / ${groupItemDetails.displayName}`}
          </div>
          <div className="group-item__body__search-box">
            <input type="text" />
          </div>
          <div className="group-item__body__hint">
            <span className="pointer">Clear All</span>
            <span>{getSelectedCount()} selected</span>
          </div>
          <div className="group-item__body__checkbox">
            {groupItemDetails.items.map((_) => (
              <div className="checkbox__container" key={_.type}>
                <input type="checkbox" onChange={() => handleCheckboxChange(_)} />
                <span className="checkbox__type">{_.type}</span>
                <span className="checkbox__count">{_.count}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default GroupItem
