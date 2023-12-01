import React from 'react';
import './search.css';
import searchIcon from '../Images/search-icon.png';

function Search() {
  return (
    <div className="search-bar">
      <input type="text" placeholder="SEARCH" className="search-input" />
      <img src={searchIcon} alt="Search Icon" className="search-icon" />
    </div>
  );
}

export default Search;