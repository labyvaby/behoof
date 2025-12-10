import React from "react";
import SaleCard from "../SaleCard/SaleCard"; 
import "./style.scss";

const products = [
  {
    id: 1,
    name: "Samsung Galaxy M32 128GB Белый",
    price: 55000,
    oldPrice: 90990,
    discount: 45,
    rating: 4.0,
    reviews: 447,
    image: "src/assets/images/Smartphones/img1.png",
  },
  {
    id: 2,
    name: "Samsung Galaxy M32 128GB Белый",
    price: 55000,
    oldPrice: 90990,
    discount: 45,
    rating: 4.0,
    reviews: 447,
    image: "src/assets/images/Smartphones/img1.png",
  },
  {
    id: 3,
    name: "Samsung Galaxy M32 128GB Белый",
    price: 55000,
    oldPrice: 90990,
    discount: 45,
    rating: 4.0,
    reviews: 447,
    image: "src/assets/images/Smartphones/img1.png",
  },
  {
    id: 4,
    name: "Samsung Galaxy M32 128GB Белый",
    price: 55000,
    oldPrice: 90990,
    discount: 45,
    rating: 4.0,
    reviews: 447,
    image: "src/assets/images/Smartphones/img1.png",
  },
];

const SalesPage: React.FC = () => {
  return (
    <div className="sales-container">
      <div className="sales-breadcrumbs">Главная / Все распродажи</div>

      <h1 className="sales-title">
        Акции, скидки и распродажи от <span>Behoof</span>
      </h1>
      <div className="sales-filters">
        <button className="filter-btn">Фильтр распродаж →</button>
        <button className="filter-btn">Сортировка →</button>
      </div>
      <h2 className="sales-category-title">Смартфоны</h2>
      <div className="sales-grid">
        {products.map((item) => (
          <SaleCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default SalesPage;
