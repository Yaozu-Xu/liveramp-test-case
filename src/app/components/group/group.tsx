import React, { useState, useEffect } from 'react'
import './group.scss'
import { useDrop } from 'react-dnd'
import { SubFolderChild } from '../../model/folder'
import { fetchCategories } from '../../api/folder'
import { Category } from '../../model/category'
import GroupItem from '../group-item/group-item'

type GroupProps = {
  subFolderChild: SubFolderChild
  removeGroup: any
}

const Group = ({ subFolderChild, removeGroup }: GroupProps) => {
  const [groupData, setgroupData] = useState<SubFolderChild[]>([subFolderChild])
  const [categories, setCategories] = useState<Category[]>([])

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchCategories(groupData).then((res) => res)
      setCategories(data)
    }
    fetchData()
  }, groupData)

  const [{ isOver }, drop] = useDrop(() => ({
    accept: 'sub-folder-child',
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
    drop: (data: SubFolderChild) => {
      setgroupData((arr) => [...arr, data])
    },
  }))

  const removeCategory = (category: Category) => {
    const updatedCategories = categories.filter((_) => _.displayName !== category.displayName)
    setCategories((arr) => [...arr.filter((_) => _.displayName !== category.displayName)])
    if (updatedCategories.length === 0) {
      removeGroup(subFolderChild)
    }
  }

  return (
    <div ref={drop} className="group-container">
      {categories.map((category) => (
        <GroupItem
          groupItemDetails={category}
          key={`group-item-${category.displayName}`}
          removeGroupItem={removeCategory}
        ></GroupItem>
      ))}
    </div>
  )
}

export default Group
