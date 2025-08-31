import * as React from 'react';
import { useEffect, useState } from 'react';

import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
//import Typography from '@mui/material/Typography';
import Pagination from '@mui/material/Pagination';
import './style.scss';
import PaginationItem from '@mui/material/PaginationItem';

interface ProductItem {
  id: number;
  name: string;
  image: string;
  rating: number;
  reviews: number;
  price: number;
  specs: string[];
  features: string[];
}

const scores = [
  { name: "Дизайн", value: 4 },
  { name: "Батарея", value: 1 },
  { name: "Дисплей", value: 2 },
  { name: "Камера", value: 5 },
  { name: "Ответ", value: 4 },
  { name: "Портативность", value: 3 },
];

const ProductList: React.FC = () => {
  const [products, setProducts] = useState<ProductItem[]>([]);

  useEffect(() => {
    fetch("http://localhost:3000/ProductItem")
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);



  const [page, setPage] = React.useState(1);

  const handleChange = (_event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  return (
    <div className="productList-list">
      <div className="productList-filters">
        <select className="productList-filter-select">
          <option>По релевантности</option>
          <option>По популярности</option>
          <option>По количеству отзывов</option>
          <option>По последним отзывам</option>
        </select>
      </div>

      {products.map((item) => (
        <div key={item.id} className="productList-card">
          <img src={item.image} alt={item.name} className="productList-image" />

          <div className="productList-details">
            <div className="productList-rating">
              <span className="productList-rating-value">{item.rating}</span>
              <span className="productList-expert">Оценка экспертов</span>
              <span className="productList-rating-stars">
                <Stack spacing={1}>
                  <Rating name="size-small" value={item.rating} precision={0.1} size="small" />
                </Stack>
              </span>
              <span className="productList-rating-reviews">{item.reviews} отзывов</span>
              <div className="logo-container">
                <img src="src/assets/icons/ProductList/icons.svg" alt="live" />
                <img src="src/assets/icons/ProductList/icon2.svg" alt="logo" />
              </div>
            </div>

            <h3 className="productList-name">{item.name}</h3>
            <div className="productList-price-block">
              <div className="productList-price">{item.price} ₽</div>
              <div className="logo-content">
                <img src="src/assets/icons/ProductList/icons.svg" alt="visa" />
                <img src="src/assets/icons/ProductList/icon2.svg" alt="mastercard" />
              </div>
            </div>


            <div className="productList-specs-features">
              <ul className="productList-specs">
                {item.specs.map((spec, idx) => <li key={idx}>{spec}</li>)}
              </ul>

              <ul className="productList-features">
                {item.features.map((feature, idx) => <li key={idx}>{feature}</li>)}
              </ul>
            </div>
          </div>

          <div className="productList-main">
            <div className="rating-list">
              {scores.map((score, i) => (
                <div className="rating-row" key={i}>
                  <span className="rating-label">{score.name}</span>
                  <div className="rating-bar">
                    {Array.from({ length: 5 }).map((_, idx) => (
                      <div key={idx} className={`segment ${idx < score.value ? "active" : ""}`} />
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <button className="productList-button">Перейти к товару</button>
          </div>
        </div>
      ))}
      <div className='pagination'>
        <Stack spacing={1} alignItems="center">
          <Pagination
            count={10}
            page={page}
            onChange={handleChange}
            renderItem={(item) => {
              if (item.type === 'previous') {
                return <PaginationItem {...item} children="Назад" />;
              }
              if (item.type === 'next') {
                return <PaginationItem {...item} children="Вперед" />;
              }
              return <PaginationItem {...item} />;
            }}
          />
        </Stack>
      </div>
    </div>
  );
};

export default ProductList;
