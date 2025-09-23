import React, { useEffect, useState } from "react";
import "./style.scss";

interface Category {
  id: number;
  title: string;
  img: string;
}

const ReviewCategories: React.FC = () => {
  const [categories, setCategories] = useState<Category[]>([]);


  useEffect(() => {
    fetch("http://localhost:3000/ReviewCategories")
      .then((res) => res.json())
      .then((data: Category[]) => {
        setCategories(data);
      })
  }, []);



  return (
    <section className="best-choice-section">
      <h2 className="title">Категории обзоров</h2>
      <div className="category-grid">
        {categories.map((item) => (
          <div className="category-item" key={item.id}>
            <div className="category-card">
              <img src={item.img} alt={item.title} className="category-img" />
            </div>
            <p className="category-title">{item.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ReviewCategories;
