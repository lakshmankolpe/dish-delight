import React from 'react';
import "./CategoriesSection.css"
import { Link } from 'react-router-dom';



function CategoriesSection({ id, name, image,  }) {

  return (
    <>
      <Link className="categories-section" to={`${name}`}>

        <div className="categories-container">
          <img src={image} alt={name} className="category-image" />

          <span className="category-name">{name}</span>
         
        </div>
      </Link>

    </>
  );
}

export default CategoriesSection;