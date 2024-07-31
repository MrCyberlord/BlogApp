import React from 'react';

const Header = ({ onSearch }) => {
  return (
    <header>
      <h1>Blog Post Application</h1>
      <input
        type="text"
        placeholder="Search posts by title"
        onChange={(e) => onSearch(e.target.value)}
      />
    </header>
  );
};

export default Header;
