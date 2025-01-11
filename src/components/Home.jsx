import { useEffect, useState } from 'react';

const Home = () => {
  const [threads, setThreads] = useState([])

  useEffect(() => {
    fetch('https://railway.bulletinboard.techtrain.dev/threads?offset=0')
      .then(response => response.json())
      .then(data => {
        setThreads(data)
      })
  }, [])

  return (
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
  );
};

export default Home;
