import React from 'react';
import { Link } from 'react-router-dom';

const Post = ({ post, onDelete }) => {
  return (
    <div className='post'>
      <h2>
        <Link to={`/post/${post.id}`}>{post.title}</Link>
      </h2>
      <p>{post.body.substring(0, 100)}...</p>
      <button onClick={() => onDelete(post.id)}>Delete</button>
    </div>
  );
};

export default Post;
