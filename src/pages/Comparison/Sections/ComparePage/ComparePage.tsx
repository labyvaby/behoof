import React, { useState, useEffect, } from "react";
import { Link } from "react-router-dom";
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import { Swiper, SwiperSlide } from "swiper/react";
import "./style.scss";

interface Product {
  id: number;
  Descriptions: string;
  name: string;
  text: string;
  price: string;
  img: string;
  rating: number;
  year: number;
  cores: number;
  memory: string;
  builtinmemory: string;
  model: string;
  lte: boolean;
}
const ComparePage: React.FC = () => {
  const [, setLoading] = useState(true);
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch("http://localhost:3000/comparePage")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
  }, []);

  const handleDelete = (id: number) => {
    setProducts(products.filter((p) => p.id !== id));
  };

  const handleDeleteAll = () => {
    setProducts([]);
  };

  return (
    <div className="compare-container">
      <div className="breadcrumbs">
        <Link to="/">Главная</Link> / <Link to="/compare">Сравнение</Link>
      </div>
      <div className="page-header ">
        <h1 className="page-title ">Сравнение товаров</h1>
        <div className="framer">
          <h1
            className="text-red-500 cursor-pointer flex items-center gap-2"
            onClick={handleDeleteAll}
          >
            <img src="src/assets/icons/ComparePage/trash.svg" alt="logo" />
            Удалить все списки
          </h1>
        </div>
      </div>

      <div className="filters">
        <span className="filter-item">
          Смартфоны <span className="count">{products.length}</span>{" "}
          <span className="close">×</span>
        </span>
        <span className="filter-item">Ноутбуки <span className="count">2</span></span>
      </div>

      <div className="compare-products relative">
        <Swiper
          key={products.length}
          spaceBetween={10}
          slidesPerView={4}
          navigation
          pagination={{ clickable: true }}
          breakpoints={{
            320: { slidesPerView: 2 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 4 },
          }}
        >
          {products.map((product) => (
            <SwiperSlide key={product.id}>
              <div className="product-card">
                <img
                  className="trash cursor-pointer"
                  src="src/assets/icons/ComparePage/Frame 30.svg"
                  alt="logo"
                  onClick={() => handleDelete(product.id)}
                />
                <img src={product.img} alt={product.name} />
                <span className="product-description">{product.Descriptions}</span>
                <p className="product-name">{product.name}</p>
                <span className="product-text">{product.text}</span>
                <p className="product-price">{product.price}</p>
                <div className="product-rating">
                  <img src="src/assets/icons/ComparePage/heart.svg" alt="logo" />
                </div>
              </div>
            </SwiperSlide>
          ))}
          <SwiperSlide>
            <div className=" add-product">
              <button className="add-btn">+ Добавить товар</button>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

      <div className="compare-table">
        <div className="row-coll" >
          <p>Сравнение товаров</p>
        </div>
        <div className="row header">
          <div className="cell">
            <p className="highlight" >Рейтинг</p>
            <Stack direction="row" sx={{ gap: '16%' }}>
              {products.map((p) => (
                <Rating
                  key={p.id}
                  name={`half-rating-${p.id}`}
                  defaultValue={2}
                  precision={0.5}
                />
              ))}
            </Stack>

          </div>
        </div>
        <div className="row">
          <div className="cell">
            <p>Модель</p>
            <div className="memory-row">
              {products.map((p) => (
                <div
                  className={`memory-cell ${p.memory === "128 ГБ" ? "success" : ""}`}
                  key={p.id}
                >
                  {p.memory}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="row">
          <div className="cell">
            <p>Год релиза</p>
            <div className="year-row">
              {products.map((p) => (
                <div className="year-cell" key={p.id}>
                  {p.year}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="row">
          <div className="cell">
            <p>Количество ядер</p>
            <div className="cores-row">
              {products.map((p) => (
                <div
                  className={`cores-cell ${p.cores === 12 ? "success" : ""}`}
                  key={p.id}
                >
                  {p.cores}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="row">
          <div className="cell">
            <p>Поддержка 4G (LTE)</p>
            <div className="lte-row">
              {products.map((p) => (
                <div
                  className={`lte-cell ${p.lte ? "success" : "error"}`}
                  key={p.id}
                >
                  {p.lte ? "✔" : "✘"}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="row">
          <div className="cell">
            <p>Объем встроенной памяти</p>
            <div className="storage-row">
              {products.map((p) => (
                <div
                  className={`storage-cell ${p.memory === "128 ГБ" ? "success" : ""}`}
                  key={p.id}
                >
                  {p.builtinmemory}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="row">
          <div className="cell">
            <p>Модель</p>
            <div className="model-row">
              {products.map((p) => (
                <div
                  className="model-cell"
                  key={p.id}
                >
                  {p.model}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="row">
          <div className="cell">
            <p>Год релиза</p>
            <div className="year-row">
              {products.map((p) => (
                <div
                  className="year-cell"
                  key={p.id}
                >
                  {p.year}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="row">
          <div className="cell">
            <p>Количество ядер</p>
            <div className="cores-row">
              {products.map((p) => (
                <div
                  className={`cores-cell ${p.cores === 12 ? "success" : ""}`}
                  key={p.id}
                >
                  {p.cores}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="row">
          <div className="cell">
            <p>Поддержка сетей 4G (LTE)</p>
            <div className="lte-row">
              {products.map((p) => (
                <div
                  className={`lte-cell ${p.lte ? "success" : "error"}`}
                  key={p.id}
                >
                  {p.lte ? "✔" : "✘"}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default ComparePage;
