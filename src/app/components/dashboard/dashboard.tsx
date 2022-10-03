import React, { useState } from 'react'
import './dashboard.scss'
import { useDrop } from 'react-dnd'
import { SubFolderChild, GroupMap } from '../../model/folder'
import Group from '../group/group'
import { hashRandom } from 'react-hash-string'
import { Category } from '../../model/category'

const Dashboard = () => {
  const [groupMap, setGroupMap] = useState<GroupMap>({})

  const [{ isOver }, drop] = useDrop(() => ({
    accept: 'sub-folder-child',
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
    drop: (data: SubFolderChild, monitor: any) => {
      if (!!monitor.didDrop() && !!monitor.getDropResult()) {
        return
      }

      setGroupMap((pre: GroupMap) => {
        const key = hashRandom()
        const groupItemParams = pre[key] || []
        const res = { ...pre }
        res[key] = [...groupItemParams, data]
        return { ...res }
      })
    },
  }))

  const pushGoupMap = (key: string, newValue: SubFolderChild) => {
    setGroupMap((pre: GroupMap) => {
      const res = { ...pre }
      const updatedValue = [...res[key], newValue]
      res[key] = updatedValue
      return { ...res }
    })
  }

  const removeGoupMap = (key: string, target: Category) => {
    setGroupMap((pre: GroupMap) => {
      const res = { ...pre }
      const updatedValue = [...res[key].filter((_) => _.cid !== target.cid)]
      if (updatedValue.length === 0) {
        delete res[key]
        return { ...res }
      }

      res[key] = updatedValue
      return { ...res }
    })
  }
  return (
    <div className="dashboard" ref={drop}>
      {Object.entries(groupMap).map(([k, v], index) => (
        <Group
          groupPramas={v}
          groupMapKey={k}
          key={`group-${k}-${index}}`}
          pushGoupMap={pushGoupMap}
          removeGoupMap={removeGoupMap}
        ></Group>
      ))}
    </div>
  )
}

export default Dashboard
