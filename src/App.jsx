import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [threads, setThreads] = useState([])

  useEffect(() => {
    fetch('https://railway.bulletinboard.techtrain.dev/threads?offset=10')
      .then(response => response.json())
      .then(data => {
        setThreads(data)
      })
  }, [])

  return (
    <>
      <h1 className='top-title'>掲示板</h1>
      <div className='thread-container'>
        <h2>新着スレッド</h2>
        <div className='thread-lists'>
          {
            threads.map(thread =>
              <p className='thread-title' key={thread.id}>{thread.title}</p>
            )
          }
        </div>
      </div>
    </>
  )
}

export default App
