import React, { useEffect, useState } from 'react'
import './App.scss'
import { fetchFolders } from './api/folder'
import FolderSideMenu from './components/folder-side-menu/folder-side-menu'
import Dashboard from './components/dashboard/dashboard'
import { Folder } from './model/folder'

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
    <div className="main-container">
      <FolderSideMenu folders={folders} setFolders={setFolders}></FolderSideMenu>
      <Dashboard></Dashboard>
    </div>
  )
}

export default App
