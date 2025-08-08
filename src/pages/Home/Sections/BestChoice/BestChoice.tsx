import React from "react";
import "./style.scss";

const categories = [
  { title: "Смартфоны", img: "src/assets/images/BestChoice/Image1.png" },
  { title: "Ноутбуки", img: "src/assets/images/BestChoice/Image2.png" },
  { title: "Планшеты", img: "src/assets/images/BestChoice/Image3.png" },
  { title: "Умные часы", img: "src/assets/images/BestChoice/Image4.png" },
  { title: "Игровые приставки", img: "src/assets/images/BestChoice/Image5.png" },
  { title: "Наушники", img: "src/assets/images/BestChoice/Image6.png" },
  { title: "Портативные колон", img: "src/assets/images/BestChoice/Image7.png" },
  { title: "Аксессуары", img: "src/assets/images/BestChoice/Image8.png" },
];

const BestChoice: React.FC = () => {
  return (
    <section className="best-choice-section">
      <h2 className="title">Лучший выбор</h2>
      <div className="category-grid">
        {categories.map((item, idx) => (
          <div className="category-item" key={idx}>
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

export default BestChoice;
