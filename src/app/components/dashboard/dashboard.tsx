import React, { useState } from 'react'
import './dashboard.scss'
import { useDrop } from 'react-dnd'
import { SubFolderChild } from '../../model/folder'
import Group from '../group/group'

const Dashboard = () => {
  const [droppedData, setDroppedData] = useState<SubFolderChild[]>([])

  const [{ isOver }, drop] = useDrop(() => ({
    accept: 'sub-folder-child',
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
    drop: (data: SubFolderChild) => {
      droppedData.push(data)
      setDroppedData([...droppedData])
    },
  }))
  return (
    <div className="dashboard" ref={drop}>
      {droppedData.map((_, index) => (
        <Group subFolderChild={_} key={`group-${index}-${_.cid}`}></Group>
      ))}
    </div>
  )
}

export default Dashboard
