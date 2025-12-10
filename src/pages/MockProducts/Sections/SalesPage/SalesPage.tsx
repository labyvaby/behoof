import React from "react";
import SaleCard from "../SaleCard/SaleCard";
import "./style.scss";



const laptops = [
  {
    id: 1,
    name: "MacBook Air M1 256GB",
    price: 75000,
    oldPrice: 99990,
    discount: 25,
    rating: 4.8,
    reviews: 812,
    image: "/src/assets/images/Smartphones/img1.png",
  },
  {
    id: 2,
    name: "Lenovo IdeaPad Slim 5",
    price: 52000,
    oldPrice: 69990,
    discount: 30,
    rating: 4.5,
    reviews: 221,
    image: "src/assets/images/Smartphones/img1.png",
  }, 
   {
    id: 3,
    name: "Lenovo IdeaPad Slim 5",
    price: 52000,
    oldPrice: 69990,
    discount: 30,
    rating: 4.5,
    reviews: 221,
    image: "src/assets/images/Smartphones/img1.png",
  }, 
   {
    id: 4,
    name: "Lenovo IdeaPad Slim 5",
    price: 52000,
    oldPrice: 69990,
    discount: 30,
    rating: 4.5,
    reviews: 221,
    image: "src/assets/images/Smartphones/img1.png",
  },
];

const SalesPage: React.FC = () => {
  return (
    <div className="sales-container">
      <h2 className="sales-category-title">Ноутбуки</h2>
      <div className="sales-grid">
        {laptops.map((item) => (
          <SaleCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default SalesPage;
