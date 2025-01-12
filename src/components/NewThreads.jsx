import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const NewThreads = () => {
  const [threadTitle, setThreadTitle] = useState("");
  const navigate = useNavigate();

  const handleThreadTitleChange = (e) => {
    setThreadTitle(e.target.value);
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();

    fetch('https://railway.bulletinboard.techtrain.dev/threads', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ title: threadTitle })
    })
      .then(response => response.json())
      .then(data => {
        navigate('/')
      });
  }

  return (
    <div className="thread-container">
      <h2>スレッド新規作成</h2>
      <div>
        <form onSubmit={handleSubmit}>
          <input type="text" value={threadTitle} onChange={handleThreadTitleChange} placeholder="スレッドタイトル" className='thread-form' />
          <div>
            <Link to="/" className='link-for-top'>Topに戻る</Link>
            <input type="submit" value="作成" className='create-thread-button' />
          </div>
        </form>
      </div>
    </div>
  )
}

export default NewThreads;
