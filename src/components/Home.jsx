import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Home = () => {
  const [threads, setThreads] = useState([])
  const navigate = useNavigate()

  const handleClick = () => {
    navigate(`/threads/${thread.id}`, { state: { title: thread.title } })
  }

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
            <>
              <Link to={{pathname: `/threads/${thread.id}`,}} state={thread} className='thread-title'>
                {thread.title}
              </Link>
            </>
          )
        }
      </div>
    </div>
  );
};

export default Home;
