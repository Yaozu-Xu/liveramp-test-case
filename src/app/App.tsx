import React, { useEffect, useState } from 'react'
import './App.scss'
import { fetchFolders } from './api/folder'
import FolderSideMenu from './components/folder-side-menu/folder-side-menu'
import Dashboard from './components/dashboard/dashboard'
import { Folder } from './model/folder'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

function App() {
  const [folders, setFolders] = useState<Folder[] | []>([])

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchFolders().then((res) => res)
      setFolders(data)
    }
    fetchData()
  }, [])

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="main-container">
        <FolderSideMenu folders={folders} setFolders={setFolders}></FolderSideMenu>
        <Dashboard></Dashboard>
      </div>
    </DndProvider>
  )
}

export default App
