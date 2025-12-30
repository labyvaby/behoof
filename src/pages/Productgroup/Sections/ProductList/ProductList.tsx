import React, { useEffect, useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { Rating, Stack, Pagination, PaginationItem } from '@mui/material';  


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

const SCORES = [
  { name: 'Дизайн', value: 4 },
  { name: 'Батарея', value: 1 },
  { name: 'Дисплей', value: 2 },
  { name: 'Камера', value: 5 },
  { name: 'Ответ', value: 4 },
  { name: 'Портативность', value: 3 },
];

const ITEMS_PER_PAGE = 4;

const ProductList: React.FC = () => {
  const [products, setProducts] = useState<ProductItem[]>([]);
  const [sortBy, setSortBy] = useState<string>('relevance');
  const [page, setPage] = useState(1);
  ;

  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await  
        fetch('http://localhost:4091/ProductItem'); 
        const data = await res.json();
        setProducts(data);
      } catch (err: any) {
      } finally {
      }
    };
    fetchProducts();
  }, []);

  const sortFunctions: Record<string, (a: ProductItem, b: ProductItem) => number> = {
    popularity: (a, b) => b.rating - a.rating,
    reviewsCount: (a, b) => b.reviews - a.reviews,
    latest: (a, b) => b.id - a.id,
    relevance: () => 0,
  };

  const sortedProducts = useMemo(() => {
    return [...products].sort(sortFunctions[sortBy]);
  }, [products, sortBy]);

  const paginatedProducts = useMemo(() => {
    const startIndex = (page - 1) * ITEMS_PER_PAGE;
    return sortedProducts.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  }, [sortedProducts, page]);



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
              <Stack spacing={1}>
                <Rating value={item.rating} precision={0.1} size="small" readOnly />
              </Stack>
              <span className="productList-rating-reviews">{item.reviews} отзывов</span>
            </div>

            <h3 className="productList-name">{item.name}</h3>
            <div className="productList-sale-block">
              <div className="sale-left">
                <p className="sale-title">Цена на распродажу</p>
                <p className="sale-price">55 000 990 ₽</p>
              </div>

              <div className="sale-discount">
                <p>Скидка</p>
                <span>45%</span>     
             
              </div>

              <div className="sale-old-price">
                <p>90 500 990 ₽</p>
                <span>Стало дешевле на 35 000 990 ₽ за последние 6 дней</span>
              </div>
            </div>

            <div className="productList-price-block">


            </div>

            <div className="productList-specs-features">
              <ul className="productList-specs">
                {item.specs.map((spec, idx) => (
                  <li key={idx}>{spec}</li>
                ))}
              </ul>

              <ul className="productList-features">
                {item.features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="productList-main">
            <div className="rating-list">
              {SCORES.map((score, i) => (
                <div className="rating-row" key={i}>
                  <span className="rating-label">{score.name}</span>
                  <div className="rating-bar">
                    {Array.from({ length: 5 }).map((_, idx) => (
                      <div key={idx} className={`segment ${idx < score.value ? 'active' : ''}`} />
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

      <div className="pagination">
        <Stack spacing={1} alignItems="center">
          <Pagination
            count={Math.ceil(sortedProducts.length / ITEMS_PER_PAGE)}
            page={page}
            onChange={(_, value) => setPage(value)}
            renderItem={(item) => {
              if (item.type === 'previous')
                return <PaginationItem {...item} children="Назад" />;
              if (item.type === 'next')
                return <PaginationItem {...item} children="Вперёд" />;
              return <PaginationItem {...item} />;
            }}
          />
        </Stack>
      </div>
    </div>
  );
};

export default ProductList;
