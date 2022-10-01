import React from 'react'
import './dashboard.scss'
import { useDrop } from 'react-dnd'

const Dashboard = () => {
  const [{isOver}, drop] = useDrop(() => ({
    accept: 'sub-folder-child',
    collect: (monitor) => ({
      isOver: monitor.isOver()
    }),
    drop: (data) => {
      console.log(data)
    }
  }))
  return (
    <div className="dashboard" ref={drop}></div>
  )
}

export default Dashboard
