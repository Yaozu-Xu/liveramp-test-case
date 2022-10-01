import React from 'react'
import { SubFolderChild } from '../../model/folder'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGripVertical, faPeopleGroup } from '@fortawesome/free-solid-svg-icons'
import { useDrag } from 'react-dnd'

type DraggableItemProps = {
  data: SubFolderChild
}

const DraggableItem = ({ data }: DraggableItemProps) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'sub-folder-child',
    item: {data},
    collect: (monitor: any) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }))

  return (
    <div
      className="side-menu__sub-folder divider"
      ref={drag}
      style={{
        opacity: isDragging ? 0.5 : 1,
        cursor: 'move',
      }}
    >
      <FontAwesomeIcon icon={faGripVertical} className="pointer" />
      <FontAwesomeIcon icon={faPeopleGroup} />
      <span>{data.displayName}</span>
    </div>
  )
}

export default DraggableItem
