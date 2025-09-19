import React, { useState } from "react";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import { Chart } from "react-google-charts";
import "./style.scss";
const filters = [
  "Дизайн",
  "Портативность",
  "Камера",
  "Ответ",
  "Дисплей",
  "Батарея",
];
type ShopCardProps = {
  price: number;
  shopName: string;
  shopLogo: string;
  delivery: string;
  trend: "up" | "down";
  trendValue: string;
  link: string;
};
const chartData = [
  ["x", "Цена"],
  ["1", 1000],
  ["2", 1170],
  ["3", 660],
  ["4", 1030],
];

const ShopCard: React.FC<ShopCardProps> = ({
  price,
  shopName,
  shopLogo,
  delivery,
  trend,
  link,
}) => {
  const color = trend === "up" ? "#ef4444" : "#22c55e";

  const chartOptions = {
    legend: "none",
    hAxis: { baselineColor: "transparent", gridlines: { color: "transparent" } },
    vAxis: { baselineColor: "transparent", gridlines: { color: "transparent" } },
    chartArea: { width: "90%", height: "100%" },
    colors: [color],
    areaOpacity: 0.2,
  };

  return (
    <div className="shop-card">
      <div className="shop-header">
        <h3>{price.toLocaleString()} ₽</h3>
        <img src={shopLogo} alt={shopName} className="shop-logo" />
      </div>

      <p className="delivery">{delivery}</p>

      <div className={`trend ${trend}`}>
      </div>

      <div className="chart-wrapper">
        <Chart
          chartType="AreaChart"
          width="100%"
          height="100px"
          data={chartData}
          options={chartOptions}
        />
      </div>

      <a href={link} className="shop-link">
        Перейти в магазин <img src="src/assets/icons/ProductPage/Arrow - Right 2.svg" alt="" />

      </a>
    </div>
  );
};

const ProductPage: React.FC = () => {
  const [value, setValue] = useState(50);
  const [isOpen, setIsOpen] = useState(false);

  const data = [
    ["Месяц", "Цена"],
    ["Сентябрь", 65000],
    ["Октябрь", 72000],
    ["Ноябрь", 68000],
    ["Декабрь", 85000],
    ["Январь", 60000],
    ["Февраль", 75000],
  ];
  const options = {
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

  const shops: ShopCardProps[] = [
    {
      price: 83999,
      shopName: "Эльдорадо",
      shopLogo: "src/assets/images/ProductPage/image1.png",
      delivery: "Доставка бесплатная",
      trend: "down",
      trendValue: "12%",
      link: "#",
    },
    {
      price: 81999,
      shopName: "Ситилинк",
      shopLogo: "src/assets/images/ProductPage/image2.png",
      delivery: "Доставка включена в стоимость",
      trend: "up",
      trendValue: "12%",
      link: "#",
    },
    {
      price: 81999,
      shopName: "Ситилинк",
      shopLogo: "src/assets/icons/citilink.svg",
      delivery: "Доставка включена в стоимость",
      trend: "up",
      trendValue: "12%",
      link: "#",
    },
    {
      price: 83999,
      shopName: "Эльдорадо",
      shopLogo: "src/assets/images/ProductPage/image2.png",
      delivery: "Доставка бесплатная",
      trend: "down",
      trendValue: "12%",
      link: "#",
    },
  ];
  return (
    <div className="product-page">
      <nav className="breadcrumbs">
        <a href="#">Главная</a> / <a href="#">Смартфоны</a> / Apple iPhone 13 Pro Max
      </nav>

      <div className="product-container">
        <main className="product-main">
          <div className="product-images">
            <div className="main-image">
              <img src="src/assets/images/BestChoice/Image0.png" alt="iPhone" />
            </div>
            <div className="thumbnails">
              <img src="src/assets/images/BestChoice/Image0.png" alt="iPhone" />
              <img src="src/assets/images/BestChoice/Image0.png" alt="iPhone" />
              <img src="src/assets/images/BestChoice/Image0.png" alt="iPhone" />
            </div>
          </div>
          <div className="product-details">
            <section className="description-info">
              <p>Характеристики Apple iPhone 13 Pro Max 256 ГБ серый</p>
            </section>

            <section className="specs">
              <ul>
                <li>Камера: 48 МП</li>
                <li>Система: iOS</li>
                <li>Диагональ: 6.7"</li>
                <li>Экран: OLED</li>
              </ul>
            </section>
            <div className="toggle-btn" onClick={() => setIsOpen(!isOpen)}>
              <span>{isOpen ? "Скрыть характеристики" : "Полный список характеристик"}</span>
              <img src="src/assets/icons/ProductPage/Arrow-icons.svg" alt="logo" />
            </div>
          </div>
          <div className="description">
            <h2>Описание</h2>
            <p>
              Смартфон Apple iPhone 13 выполнен в компактном корпусе с привлекательной розовой
              расцветкой и защищенной конструкцией по стандарту IP68. Мощный чип A15 Bionic
              обеспечивает быструю и стабильную работу при запуске приложений, просмотре видео,
              веб-серфинге и выполнении других задач. На дисплее 6.1 дюйма OLED выводится четкая и
              красочная картинка. На тыловой стороне расположена камера с двумя датчиками по 12 Мп,
              которые при поддержке ряда технологий и функций позволяют создавать реалистичные
              снимки в различных условиях. На передней стороне имеется камера 12 Мп для селфи и
              общения. В мобильном устройстве предлагается широкий набор беспроводных интерфейсов и
              разъем Lightning 8-pin. Аккумулятор гарантирует продолжительное время автономности. Из
              особенностей отмечаются поддержка быстрой зарядки, беспроводной зарядки и устройств
              MagSafe с магнитным позиционированием.
            </p>
          </div>
        </main>
        <aside className="product-aside">
          <h1>Apple iPhone 13 Pro Max 256 ГБ серый</h1>
          <div className="rating-wrapper">
            <p className="rating">(4.4 Оценка экспертов)</p>
            <Stack spacing={1}>
              <Rating name="size-medium" defaultValue={2} />
            </Stack>
            <p className="reviews-count">447 отзывов</p>
          </div>
          <div className="rating-list">
            {filters.map((name, i) => (
              <div className="rating-row" key={i}>
                <span>{name}</span>
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
          <p className="price">78 999 ₽</p>
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
                <button className="color-btn gray"></button>
                <button className="color-btn purple"></button>
                <button className="color-btn gold"></button>
                <button className="color-btn gold"></button>
                <button className="color-btn gold"></button>
              </div>
            </div>
            <div className="memory">
              <p className="memory-title">Память:</p>
              <div className="memory-buttons">
                <button>128 ГБ</button>
                <button className="active">256 ГБ</button>
                <button>512 ГБ</button>
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

          <div className="p-4 bg-white rounded-xl shadow">
            <h2 className="text-lg font-semibold mb-2">История цены</h2>
            <Chart chartType="AreaChart" width="100%" height="300px" data={data} options={options} />
          </div>
          <div className="shops-grid">
            {shops.map((shop, i) => (
              <ShopCard key={i} {...shop} />
            ))}
          </div>
        </aside>
      </div>
    </div>
  );
};

export default ProductPage;
