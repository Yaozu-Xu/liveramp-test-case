import React, { useEffect, useState } from "react";
import "./App.css";
import { fetchFolders } from './api/folder';

function App() {

  const [folders, setFolders] = useState([]);
  
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchFolders().then(res =>
        res
      );
      setFolders(data as [])
    };
    fetchData();
  }, []);
  
  return (
    <div></div>
  );
}

export default App;
