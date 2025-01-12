import { useEffect, useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';

const Posts = () => {
  const params = useParams();
  const [posts, setPosts] = useState([]);
  const location = useLocation()

  useEffect(() => {
    fetch(`https://railway.bulletinboard.techtrain.dev/threads/${params.thread_id}/posts?offset=0`)
      .then(response => response.json())
      .then(data => {
        setPosts(data)
      })
  }, [])

  return (
    <>
      <div className="posts-container">
        <h2>投稿一覧</h2>
        <h3 className='thread-title-for-posts-page'>{location.state.title}</h3>
        {
          posts.posts?.map(post => 
            <p className='comments' key={post.id}>{post.post}</p>
          )
        }
      </div>
    </>
  )
}

export default Posts;
