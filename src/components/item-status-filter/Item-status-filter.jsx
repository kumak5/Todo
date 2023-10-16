import React from 'react';
import './item-status-filter.css';


const ItemStatusFilter = ({itemStatusFilterId,setItemStatusFilterId}) => {

const statusFilter = ['All', 'Active', 'Done']

const onFilterChenge = (item) => {
  setItemStatusFilterId(statusFilter.indexOf(item))
}

const buttons = statusFilter.map((item, index) => {
  return (
    <button key={index} 
    id={item}
    type="button"
    className={statusFilter.indexOf(item) === itemStatusFilterId ? 'btn btn-info' : 'btn btn-outline-secondary'}
    onClick={(e) => onFilterChenge(e.target.id)}>{item}</button>
    )
  })
  

  return (
    <div className="btn-group">
      {buttons}
    </div>
  );
};

export default ItemStatusFilter;