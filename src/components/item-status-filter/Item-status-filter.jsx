import React from 'react';
import './item-status-filter.css';


const ItemStatusFilter = () => {


  return (
    <div className="btn-group">
      <button id='1' 
      type="button"
              className="btn btn-info">All</button>
      <button id='2' 
      type="button"
              className="btn btn-outline-secondary">Active</button>
      <button id='3' 
      type="button"
              className="btn btn-outline-secondary">Done</button>
    </div>
  );
};

export default ItemStatusFilter;