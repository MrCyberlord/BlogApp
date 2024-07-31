import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import PostList from "./components/PostList";
import CreatePost from "./components/CreatePost";
import PostDetail from "./components/PostDetail";
import { fetchPosts } from "./api";

function App() {
  const [posts, setPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);

  useEffect(() => {
    const loadPosts = async () => {
      const data = await fetchPosts();
      setPosts(data);
      setFilteredPosts(data);
    };

    loadPosts();
  }, []);

  const handlePostCreated = (newPost) => {
    setPosts([newPost, ...posts]);
    setFilteredPosts([newPost, ...posts]);
  };

  const handleDelete = (postId) => {
    const updatedPosts = posts.filter((post) => post.id !== postId);
    setPosts(updatedPosts);
    setFilteredPosts(updatedPosts);
  };

  const handleSearch = (query) => {
    const filtered = posts.filter((post) =>
      post.title.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredPosts(filtered);
  };

  return (
    <Router>
      <div className="App">
        <Header onSearch={handleSearch} />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <CreatePost onPostCreated={handlePostCreated} />
                <PostList posts={filteredPosts} onDelete={handleDelete} />
              </>
            }
          />
          <Route path="/post/:id" element={<PostDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
