import React from 'react'
import "./SearchContainer.css";
import SearchIcon from '@mui/icons-material/Search';

const SearchContainer = () => {
  return (
    <div className="search-container">
        <input type="text" placeholder="Search for GIFS here" />
        <div className="search-icon">
        <SearchIcon />
          </div>
    </div>
  )
}

export default SearchContainer;