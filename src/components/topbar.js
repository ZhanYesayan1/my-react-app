import React from 'react';
import '../styles/topbar.css';

const Topbar = ({ searchQuery, setSearchQuery }) => {
    return (
      <div className="topbar">
        <div className="search-box">
        <input
          type="text"
           placeholder="Search something..."
           value={searchQuery || ''}
           onChange={(e) => setSearchQuery(e.target.value)}
               className="search-bar"
/>
        </div>
      </div>
      
          
        
      
    );
  };
  
  export default Topbar;