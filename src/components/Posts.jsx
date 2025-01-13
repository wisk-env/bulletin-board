import { useEffect, useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';

const Posts = () => {
  const params = useParams();
  const [posts, setPosts] = useState([]);
  const location = useLocation();
  const [comments, setComments] = useState("");

  useEffect(() => {
    fetch(`https://railway.bulletinboard.techtrain.dev/threads/${params.thread_id}/posts?offset=0`)
      .then(response => response.json())
      .then(data => {
        setPosts(data)
      })
  }, [])

  const handleCommentChange = (e) => {
    setComments(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch(`https://railway.bulletinboard.techtrain.dev/threads/${params.thread_id}/posts`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ post: comments })
    })
    .then(response => response.json())
    .then(data => {
      fetch(`https://railway.bulletinboard.techtrain.dev/threads/${params.thread_id}/posts?offset=0`)
        .then(response => response.json())
        .then(data => {
          setPosts(data);
          setComments("");
        })
    });
  }

  return (
    <>
      <div className="posts-container">
        <h2>投稿一覧</h2>
        <div className='post-box'>
          <div>
            <h3 className='thread-title-for-posts-page'>{location.state.title}</h3>
            {
              posts.posts?.map(post => 
                <p className='comments' key={post.id}>{post.post}</p>
              )
            }
          </div>
          <div className='form-area'>
            <form onSubmit={handleSubmit}>
              <textarea id='post-form' value={comments} onChange={handleCommentChange} placeholder='投稿しよう！' className='post-form'></textarea>
              <div>
                <input type="submit" value="投稿" className='post-button' />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Posts;
