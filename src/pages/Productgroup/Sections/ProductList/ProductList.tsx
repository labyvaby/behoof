import * as React from 'react';
import { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";

import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import Pagination from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem';
import './style.scss';

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
  const [sortBy, setSortBy] = useState<string>('relevance');
  const [page, setPage] = useState(1);
  const itemsPerPage = 4;

  useEffect(() => {
    fetch("http://localhost:3000/ProductItem")
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

  const navigate = useNavigate();

  const getSortedProducts = () => {
    const sorted = [...products];
    switch (sortBy) {
      case 'popularity':
        return sorted.sort((a, b) => b.rating - a.rating);
      case 'reviewsCount':
        return sorted.sort((a, b) => b.reviews - a.reviews);
      case 'latest':
        return sorted.sort((a, b) => b.id - a.id);
      default:
        return sorted;
    }
  };

  const sortedProducts = getSortedProducts();


  const startIndex = (page - 1) * itemsPerPage;
  const paginatedProducts = sortedProducts.slice(startIndex, startIndex + itemsPerPage);

  const handleChangePage = (_event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  return (
    <div className="productList-list">
      <div className="productList-filters">
        <select
          className="productList-filter-select"
          value={sortBy}
          onChange={(e) => {
            setSortBy(e.target.value);
            setPage(1);
          }}
        >
          <option value="relevance">По релевантности</option>
          <option value="popularity">По популярности</option>
          <option value="reviewsCount">По количеству отзывов</option>
          <option value="latest">По последним отзывам</option>
        </select>
      </div>

      {paginatedProducts.map((item) => (
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
            </div>

            <h3 className="productList-name">{item.name}</h3>

            <div className="productList-price-block">
              <div className='logo' >
                <img src="src/assets/icons/ProductList/icon2.svg" alt="logo" />
                <img src="src/assets/icons/ProductList/icons.svg" alt="" />
              </div>
              <div className="productList-price">{item.price} ₽</div>
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

            <button
              className="productList-button"
              onClick={() => navigate(`/product/${item.id}`)}
            >
              Перейти к товару
            </button>
          </div>
        </div>
      ))}

      <div className='pagination'>
        <Stack spacing={1} alignItems="center">
          <Pagination
            count={Math.ceil(sortedProducts.length / itemsPerPage)}
            page={page}
            onChange={handleChangePage}
            renderItem={(item) => {
              if (item.type === 'previous') return <PaginationItem {...item} children="Назад" />;
              if (item.type === 'next') return <PaginationItem {...item} children="Вперед" />;
              return <PaginationItem {...item} />;
            }}
          />
        </Stack>
      </div>
    </div>
  );
};

export default ProductList;
