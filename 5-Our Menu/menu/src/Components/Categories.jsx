import React from 'react';

const Categories = ({ filterItems, catagories }) => {
  return (
    <div className='btn-container'>
      {catagories.map((category, index) => {
        return (
          <button
            type='button'
            className='filter-btn'
            key={index}
            onClick={() => filterItems(category)}>
            
            {category}
          </button>
        );
      })}
    </div>
  );
};

export default Categories;
