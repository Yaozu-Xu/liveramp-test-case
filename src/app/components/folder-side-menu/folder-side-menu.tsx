import React from 'react'
import './folder-side-menu.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFolder, faChevronDown, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { Folder, SubFolderChild } from '../../model/folder'
import DraggableItem from '../draggable-item/draggbale-item'

type FolderSideMenuProps = {
  folders: Folder[]
  setFolders: React.Dispatch<React.SetStateAction<Folder[]>>
}

const FolderSideMenu = ({ folders, setFolders }: FolderSideMenuProps) => {
  const generateChevron = (flag: boolean, onClick: any) =>
    flag ? (
      <FontAwesomeIcon icon={faChevronDown} onClick={onClick} className="pointer" />
    ) : (
      <FontAwesomeIcon icon={faChevronRight} onClick={onClick} className="pointer" />
    )

  const toggleFolder = (index: number) => {
    const updatedFolders = folders.map((folder, i) =>
      i === index ? { ...folder, collapse: !folder.collapse } : folder
    )
    setFolders(updatedFolders)
  }

  const toggleSubFolder = (folderIndex: number, subFolderIndex: number) => {
    const subFolders = folders[folderIndex].subFolder
    const updatedFolders = subFolders.map((subFolder, i) =>
      i === subFolderIndex ? { ...subFolder, collapse: !subFolder.collapse } : subFolder
    )
    folders[folderIndex].subFolder = updatedFolders
    setFolders([...folders])
  }

  return (
    <div className="side-menu">
      <header className="side-menu__header">
        <span className="bold">Name</span>
        <span className="bold">Size</span>
      </header>
      <div className="side-menu__body">
        {folders.map((folder, i) => (
          <div className="side-menu__folder" key={folder.id}>
            <div className="divider">
              {generateChevron(folder.collapse!, () => toggleFolder(i))}
              <FontAwesomeIcon icon={faFolder} />
              <span className="bold">{folder.name}</span>
            </div>
            {folder.collapse! ? (
              folder.subFolder.map((subFolder, index) => (
                <div className="side-menu__sub-folder" key={subFolder.sid}>
                  <div className="divider">
                    {generateChevron(subFolder.collapse!, () => toggleSubFolder(i, index))}
                    <FontAwesomeIcon icon={faFolder} />
                    <span className="bold">{subFolder.name}</span>
                  </div>
                  {subFolder.collapse! ? (
                    subFolder.children.map((_) => <DraggableItem key={_.cid} data={_}></DraggableItem>)
                  ) : (
                    <></>
                  )}
                </div>
              ))
            ) : (
              <></>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default FolderSideMenu
