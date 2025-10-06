import React, { useState, useEffect } from "react";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import { Chart } from "react-google-charts";
import "./style.scss";

type Product = {
  id: number;
  name: string;
  rating: number;
  reviews: number;
  price: number;
  delivery: string;
  image: string;
  colors: string[];
  memory: string[];
  description: string;
  specs: string[];
  chartData: any[]; // для истории цены
};

type ShopCardProps = {
  id: number;
  price: number;
  shopName: string;
  shopLogo: string;
  delivery: string;
  trend: "up" | "down";
  trendValue: string;
  link: string;
  chartData?: any[]; // добавляем поле для мини-графика 

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
  const [product, setProduct] = useState<Product | null>(null);
  const [shops, setShops] = useState<ShopCardProps[]>([]);
  const [filters, setFilters] = useState<string[]>([]);
  const [value, setValue] = useState(50);
  const [isOpen, setIsOpen] = useState(false);


  useEffect(() => {
    fetch("http://localhost:3000/product")
      .then((res) => res.json())
      .then((data) => setProduct(data));

    fetch("http://localhost:3000/shops")
      .then((res) => res.json())
      .then((data) => setShops(data));

    fetch("http://localhost:3000/filters")
      .then((res) => res.json())
      .then((data) => setFilters(data));
  }, []);

  if (!product) return <p>Загрузка...</p>;

  return (
    <div className="product-page">
      <nav className="breadcrumbs">
        <a href="#">Главная</a> / <a href="#">Смартфоны</a> / {product.name}
      </nav>

      <div className="product-container">
        <main className="product-main">
          <div className="product-images">
            <div className="main-image">
              <img src={product.image} alt={product.name} />
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
              <span>{isOpen ? "Скрыть характеристики" : "Полный список характеристик"}</span>
              <img src="src/assets/icons/ProductPage/Arrow-icons.svg" alt="logo" />
            </div>
          </div>
          <div className="description">
            <h2>Описание</h2>
            <p>{product.description}</p>
          </div>
        </main>

        <aside className="product-aside">
          <h1>{product.name}</h1>
          <div className="rating-wrapper">
            <p className="rating">({product.rating} Оценка экспертов)</p>
            <Stack spacing={1}>
              <Rating name="size-medium" defaultValue={product.rating} precision={0.1} />
            </Stack>
            <p className="reviews-count">{product.reviews} отзывов</p>
          </div>
          <div className="rating-list">
            {filters.map((filter, i) => (
              <div className="rating-row" key={filter.id || i}>
                <span>{filter.name}</span>
                <div className="rating-bar">
                  <div className="fill" style={{ width: `${80 - i * 5}%` }} />
                </div>
              </div>
            ))}
          </div>

          <div className="reviews">
            <p>
              <img src="src/assets/icons/ProductPage/crown-icons.svg" alt="logo" />
              Самый дешевый
            </p>
          </div>
          <p className="price">{product.price.toLocaleString()} ₽</p>
          <p className="delivery">Доставка: бесплатно</p>

          <div className="navigator">
            <p>
              <img src="src/assets/icons/ProductPage/Frame-icons.svg" alt="logo" /> хорошо цена
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

          <div className="options">
            <div className="colors">
              <span>Цвет:</span>
              <div className="color-list">
                {product.colors.map((color, i) => (
                  <button key={i} className={`color-btn ${color}`}></button>
                ))}
              </div>
            </div>
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
          </div>

          <div className="actions">
            <button className="compare">
              <img src="src/assets/icons/ProductPage/chart-icons.svg" alt="logo" /> Сравнить
            </button>
            <button className="favorite">
              <img src="src/assets/icons/ProductPage/live-icons.svg" alt="logo" /> В избранное
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
