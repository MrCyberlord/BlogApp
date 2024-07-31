import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchPosts } from '../api';

const PostDetail = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPost = async () => {
      const data = await fetchPosts();
      const post = data.find((p) => p.id === parseInt(id, 10));
      setPost(post);
      setLoading(false);
    };

    loadPost();
  }, [id]);

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
    </div>
  );
};

export default PostDetail;
