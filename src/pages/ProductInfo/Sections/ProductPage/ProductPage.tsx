import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import { Chart } from "react-google-charts";
import "./style.scss";

import crownIcon from "@/assets/icons/ProductPage/crown-icons.svg";
import framerIcon from "@/assets/icons/ProductPage/Frame-icons.svg";
import ChartIcons from "@/assets/icons/ProductPage/chart-icons.svg";
import loveIcons from "@/assets/icons/ProductPage/live-icons.svg";
import ArrowIcons from "@/assets/icons/ProductPage/Arrow-icons.svg"

type Product = {
  id: number;
  name: string;
  rating: number;
  reviews: number;
  price: number;
  delivery?: string;
  image: string;
  images?: string[];
  colors?: string[];
  memory?: string[];
  description?: string;
  specs: string[];
  chartData?: any[];
};

type ShopCardProps = {
  id: number;
  price: number;
  shopName: string;
  shopLogo: string;
  delivery: string;
  trend: "up" | "down";
  trendValue?: string;
  link: string;
  chartData?: any[];
};

const chartOptions = {
  legend: "none",
  colors: ["#FF6B6B"],
  areaOpacity: 0.2,
  hAxis: { textStyle: { color: "#333" } },
  vAxis: {
    textPosition: "none",
    gridlines: { color: "transparent" },
    baselineColor: "transparent",
  },
  chartArea: { width: "90%", height: "60%" },
  tooltip: { isHtml: true, textStyle: { fontSize: 14 } },
};

const ProductPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [shops, setShops] = useState<ShopCardProps[]>([]);
  const [filters, setFilters] = useState<{ name: string }[]>([]);
  const [value, setValue] = useState(50);
  const [isOpen, setIsOpen] = useState(false);
  const [mainImage, setMainImage] = useState<string>("");
  const [showDesc, setShowDesc] = useState(false);

  useEffect(() => {
    if (!id) return;

    fetch(`http://localhost:4091/ProductItem/${id}`)
      .then((res) => {
        if (!res.ok) throw new Error("Товар не найден");
        return res.json();
      })
      .then((data) => {
        setProduct(data);
        setMainImage(data.image);
      })
      .catch((err) => console.error(err));

    fetch("http://localhost:4091/shops")
      .then((res) => res.json())
      .then((data) => setShops(data))
      .catch((err) => console.error(err));

    fetch("http://localhost:4091/filters")
      .then((res) => res.json())
      .then((data) => setFilters(data))
      .catch((err) => console.error(err));
  }, [id]);

  if (!product) return <p></p>;
  return (
    <div className="product-page">
      <nav className="breadcrumbs">
        <a href="#">Главная</a> / <a href="#">Смартфоны</a> / {product.name}
      </nav>

      <div className="product-container">
        <main className="product-main">
          <div className="product-images">
            <div className="main-image">
              <img src={mainImage} alt={product.name} />
            </div>
            <div className="thumbnails">
              {product.images?.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt={`thumb-${i}`}
                  onClick={() => setMainImage(img)}
                  className={`thumb ${mainImage === img ? "active" : ""}`}
                />
              ))}
            </div>
          </div>
          <div className="product-details">
            <section className="description-info">
              <p>Характеристики {product.name}</p>
            </section>
            <section className="specs">
              <ul>
                {product.specs.map((spec, i) => (
                  <li key={i}>{spec}</li>
                ))}
              </ul>
            </section>
            <div className="toggle-btn" onClick={() => setIsOpen(!isOpen)}>
              <span>
                {isOpen ? "Скрыть характеристики" : "Полный список характеристик"}
              </span>
              <img src={ArrowIcons} alt="logo" />
            </div>
          </div>
          {product.description && (
            <div className="description">
              <h2 onClick={() => setShowDesc(!showDesc)} style={{ cursor: "pointer" }}>
                Описание {showDesc ? "▲" : "▼"}
              </h2>

              {showDesc && <p>{product.description}</p>}
            </div>
          )}
        </main>

        <aside className="product-aside">
          <h1>{product.name}</h1>
          <div className="rating-wrapper">
            <p className="rating">({product.rating} Оценка экспертов)</p>
            <Stack spacing={1}>
              <Rating
                name="size-medium"
                defaultValue={product.rating}
                precision={0.1}
              />
            </Stack>
            <p className="reviews-count">{product.reviews} отзывов</p>
          </div>

          <div className="rating-list">
            {filters.map((filter, i) => (
              <div className="rating-row" key={i}>
                <span>{filter.name}</span>
                <div className="rating-bar">
                  <div className="fill" style={{ width: `${80 - i * 5}%` }} />
                </div>
              </div>
            ))}
          </div>
          <div className="reviews">
            <p>
              <img src={crownIcon} alt="logo" />

              Самый дешевый
            </p>
          </div>
          <p className="price">{product.price.toLocaleString()} ₽</p>
          <p className="delivery">{product.delivery || "Доставка: бесплатно"}</p>

          <div className="navigator">
            <p>
              <img src={framerIcon} alt="logo" /> хорошо цена
            </p>
            <span>
              Исходя из последних 40 дней, сумма составляет близко к среднему 80 000 ₽
            </span>
            <div className="divider-container">
              <hr className="divider" />
              <input
                type="range"
                min={0}
                max={100}
                value={value}
                onChange={(e) => setValue(Number(e.target.value))}
                className="divider-slider"
              />
              <div className="divider-dot" style={{ left: `${value}%` }} />
            </div>
          </div>
          {product.chartData && (
            <div className="price-history">
              <h2>История цены</h2>
              <Chart
                chartType="AreaChart"
                width="100%"
                height="300px"
                data={product.chartData}
                options={chartOptions}
              />
            </div>
          )}

          {product.colors && (
            <div className="colors">
              <span>Цвет:</span>
              <div className="color-list">
                {product.colors.map((color, i) => (
                  <button key={i} className={`color-btn ${color}`} />
                ))}
              </div>
            </div>
          )}

          {product.memory && (
            <div className="memory">
              <p className="memory-title">Память:</p>
              <div className="memory-buttons">
                {product.memory.map((mem, i) => (
                  <button key={i} className={mem === "256 ГБ" ? "active" : ""}>
                    {mem}
                  </button>
                ))}
              </div>
            </div>
          )}

          <div className="actions">
            <button className="compare">
              <img src={ChartIcons} alt="logo" /> Сравнить
            </button>
            <button className="favorite">
              <img src={loveIcons} /> В избранное
            </button>
          </div>

          <div className="price-history">
            <h2>История цены</h2>
            <Chart chartType="AreaChart" width="100%" height="300px" data={product.chartData} options={chartOptions} />
          </div>

          <div className="shops-grid">
            {shops.map((shop) => (
              <div key={shop.id} className="shop-card">
                <div className="shop-header">
                  <h3>{shop.price.toLocaleString()} ₽</h3>
                  <img src={shop.shopLogo} alt={shop.shopName} className="shop-logo" />
                </div>
                <p className="delivery">{shop.delivery}</p>
                {shop.chartData && (
                  <Chart
                    chartType="AreaChart"
                    width="100%"
                    height="100px"
                    data={shop.chartData}
                    options={{
                      legend: "none",
                      colors: [shop.trend === "up" ? "#4CAF50" : "#FF6B6B"],
                      hAxis: { textPosition: "none" },
                      vAxis: { textPosition: "none" },
                      chartArea: { width: "100%", height: "80%" },
                      tooltip: { trigger: "none" },
                      areaOpacity: 0.3,
                    }}
                  />
                )}
                <a href={shop.link} className="shop-link">
                  Перейти в магазин →
                </a>
              </div>
            ))}
          </div>
        </aside>
      </div>
    </div>
  );
};

export default ProductPage;
