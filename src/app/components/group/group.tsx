import React, { useState, useEffect } from 'react'
import './group.scss'
import { useDrop } from 'react-dnd'
import { SubFolderChild } from '../../model/folder'
import { fetchCategories } from '../../api/folder'
import { Category } from '../../model/category'
import GroupItem from '../group-item/group-item'

type GroupProps = {
  subFolderChild: SubFolderChild
}

const Group = ({ subFolderChild }: GroupProps) => {
  const [groupData, setgroupData] = useState([subFolderChild])
  const [categories, setCategories] = useState<Category[]>([])

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchCategories(groupData).then((res) => res)
      console.log(data)
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
      setgroupData([...groupData, data])
    },
  }))
  return (
    <div ref={drop} className="group-container">
      {categories.map((category) => (
        <GroupItem groupItemDetails={category} key={`group-item-${category.name}`}></GroupItem>
      ))}
    </div>
  )
}

export default Group
