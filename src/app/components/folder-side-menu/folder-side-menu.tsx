import React, { useEffect, useState } from 'react'
import './folder-side-menu.scss'
import { Folder } from '../../model/folder'

type FolderSideMenuProps = {
  folders: Folder[]
}

const FolderSideMenu = ({ folders }: FolderSideMenuProps) => {
  return (
    <div className="side-menu">
      <header className="side-menu__header">
        <span>Name</span>
        <span>Size</span>
      </header>
      <div className="side-menu__body">
        {folders.map((folder) => (
          <ul className="side-menu__folder" key={folder.id}>
            <li className="divider">{folder.name}</li>
            {folder.subFolder.map((subFolder) => (
              <li className="side-menu__sub-folder" key={subFolder.sid}>
                <li className="divider">{subFolder.name}</li>
                {subFolder.children.map((_) => (
                  <div className="side-menu__sub-folder divider" key={_.cid}>
                    {_.displayName}
                  </div>
                ))}
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  )
}

export default FolderSideMenu
