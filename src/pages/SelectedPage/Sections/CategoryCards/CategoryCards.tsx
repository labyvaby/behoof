import React, { useEffect, useState } from 'react';
import './style.scss';

interface CategoryCards {
  id: number;
  title: string;
  image: string;
  date: string;
  tags: string[];
}
 
const CategoryCards: React.FC = () => {
  const [categories, setCategories] = useState<CategoryCards[]>([]);

  useEffect(() => {
    fetch("http://localhost:3000/ CategoryCards")
      .then(res => res.json())
      .then(data => setCategories(data))
     
  }, []);

  return (
    <div className="category-container">
      <h2 className="category-titl">Статьи в этой категории</h2>
      <div className="category-grid">
        {categories.map((category) => (
          <div key={category.id} className="category-card">
            <img src={category.image} alt={category.title} className="category-image" />
            <div className="category-content">
              <h3 className="category-title-text">{category.title}</h3>
              <span className="category-date">{category.date}</span>
              <div className="category-tags">
                {category.tags.map((tag, index) => (
                  <span key={index} className="category-tag">{tag}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryCards;