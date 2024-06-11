import React, { useState } from 'react';
import './Posts.css';

const Posts = () => {
  const [posts, setPosts] = useState([
    { id: 1, content: 'Post 1', likes: 0, replies: [] },
    { id: 2, content: 'Post 2', likes: 0, replies: [] },
  ]);

  const handleLike = (id) => {
    setPosts(posts.map(post => post.id === id ? { ...post, likes: post.likes + 1 } : post));
  };

  const handleReply = (id, reply) => {
    setPosts(posts.map(post => post.id === id ? { ...post, replies: [...post.replies, reply] } : post));
  };

  return (
    <div className="posts">
      {posts.map(post => (
        <div key={post.id} className="post">
          <p>{post.content}</p>
          <div>
            <button onClick={() => handleLike(post.id)}>Like ({post.likes})</button>
            <button onClick={() => handleReply(post.id, prompt('Enter reply:'))}>Reply</button>
            <button onClick={() => navigator.clipboard.writeText(window.location.href + `/posts/${post.id}`)}>Copy link to post</button>
          </div>
          {post.replies.length > 0 && (
            <div className="replies">
              {post.replies.map((reply, index) => <p key={index}>{reply}</p>)}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Posts;
