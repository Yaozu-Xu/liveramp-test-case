import React from 'react'
import './folder-side-menu.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFolder, faChevronDown, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { Folder } from '../../model/folder'

type FolderSideMenuProps = {
  folders: Folder[]
  setFolders: React.Dispatch<React.SetStateAction<Folder[]>>
}

const FolderSideMenu = ({ folders, setFolders }: FolderSideMenuProps) => {
  const generateChevron = (flag: boolean, onClick: any) =>
    flag ? (
      <FontAwesomeIcon icon={faChevronDown} onClick={onClick} />
    ) : (
      <FontAwesomeIcon icon={faChevronRight} onClick={onClick} />
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
        <span>Name</span>
        <span>Size</span>
      </header>
      <div className="side-menu__body">
        {folders.map((folder, i) => (
          <div className="side-menu__folder" key={folder.id}>
            <div className="divider">
              {generateChevron(folder.collapse!, () => toggleFolder(i))}
              <FontAwesomeIcon icon={faFolder} />
              <span>{folder.name}</span>
            </div>
            {folder.collapse! ? (
              folder.subFolder.map((subFolder, index) => (
                <div className="side-menu__sub-folder" key={subFolder.sid}>
                  <div className="divider">
                    {generateChevron(subFolder.collapse!, () => toggleSubFolder(i, index))}
                    <FontAwesomeIcon icon={faFolder} />
                    <span>{subFolder.name}</span>
                  </div>
                  {subFolder.collapse! ? (
                    subFolder.children.map((_) => (
                      <div className="side-menu__sub-folder divider" key={_.cid}>
                        {_.displayName}
                      </div>
                    ))
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
