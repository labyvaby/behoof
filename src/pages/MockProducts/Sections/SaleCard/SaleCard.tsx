import React from "react";

interface Product {
  id: number;
  name: string;
  price: number;
  oldPrice: number;
  discount: number;
  rating: number;
  reviews: number;
  image: string;
}

const SaleCard: React.FC<{ item: Product }> = ({ item }) => {
  return (
    <div className="sale-card">
      <img src={item.image} alt={item.name} className="sale-card__image" />

      <div className="sale-card__info">
        <div className="sale-card__rating">
          <span>{item.rating}</span>
          ⭐⭐☆
          <span>{item.reviews} Отзывов</span >
          <img src="src/assets/icons/SaleCart/lovo.svg" alt="logo" />
          <img src="src/assets/icons/SaleCart/graf.svg" alt="logo" />
        </div>

        <p className="sale-card__expert">4.4 Оценка экспертов</p>

        <h3 className="sale-card__name">{item.name}</h3>
        <div className="sale-info">
          <div className="sale-info__left">
            <p className="sale-info__current-price">55 000 ₽</p>

            <div className="sale-info__old-price-box">
              <p className="sale-info__old-price">90 990 ₽</p>
            </div>
          </div>
          <div className="sale-info__right">
            <div className="sale-info__discount">
              <p>Скидка 45% </p>
            </div>
            <p className="sale-info__desc">
              Стало дешевле на 35 000₽
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SaleCard;
