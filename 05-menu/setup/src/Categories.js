import React from 'react';

const Categories = ({categories, filterByCategory}) => {
  console.log(categories)
  return (
    <div className="btn-container">
      {categories.map((category, index) => {
        return (
          <button
            className="filter-btn"
            type="button"
            key={index}
            onClick={() => filterByCategory(category)}
          >
            {category}
          </button>
        )
      })}
    </div>
  )
};

export default Categories;
