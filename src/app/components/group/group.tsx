import React, { useState, useEffect } from 'react'
import './group.scss'
import { useDrop } from 'react-dnd'
import { SubFolderChild } from '../../model/folder'
import { fetchCategories } from '../../api/folder'
import { Category } from '../../model/category'
import GroupItem from '../group-item/group-item'
import ConnectButton from '../connect-button/conntect-button'

type GroupProps = {
  groupPramas: SubFolderChild[]
  groupMapKey: string
  pushGoupMap: any
  removeGoupMap: any
}

const Group = ({ groupPramas, groupMapKey, pushGoupMap, removeGoupMap }: GroupProps) => {
  const [categories, setCategories] = useState<Category[]>([])

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchCategories(groupPramas).then((res) => res)
      setCategories(data)
    }
    fetchData()
  }, [groupPramas])

  const [{ isOver }, drop] = useDrop(() => ({
    accept: 'sub-folder-child',
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
    drop: (data: SubFolderChild, monitor: any) => {
      if (!!monitor.didDrop() && !!monitor.getDropResult()) {
        return
      }
      pushGoupMap(groupMapKey, data)
    },
  }))

  const removeCategory = (category: Category) => {
    removeGoupMap(groupMapKey, category)
  }

  return (
    <div ref={drop} className="group-container">
      {categories.map((category) => (
        <>
          <GroupItem
            groupItemDetails={category}
            key={`group-item-${category.displayName}`}
            removeGroupItem={removeCategory}
          ></GroupItem>
          <ConnectButton key={`connect-btn-${category.displayName}`}></ConnectButton>
        </>
      ))}
    </div>
  )
}

export default Group
