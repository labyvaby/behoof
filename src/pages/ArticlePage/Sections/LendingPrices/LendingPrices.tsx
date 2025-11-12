import React from "react";
import "./style.scss";
import Rating from "@mui/material/Rating";
import { Chart } from "react-google-charts";

const LendingPrices: React.FC = () => {
  const product = {
    name: "Infinix HOT 12 Pro",
    price: 81999,
    chartData: [
      ["Дата", "Цена"],
      ["Янв", 78000],
      ["Фев", 80000],
      ["Март", 81000],
      ["Апр", 81999],
    ],
    stores: [
      "src/assets/icons/LendingPrices/citilink.svg",
      "src/assets/icons/LendingPrices/eldorado.svg",
    ],
  };


  const shops = [
    {
      id: 1,
      price: 819,
      shopLogo: "src/assets/icons/LendingPrices/icon2.svg",
      delivery: "Доставка включена в стоимость",
      trend: "up",
      link: "#",
      chartData: [
        ["Дата", "Цена"],
        ["Янв", 78000],
        ["Фев", 80000],
        ["Март", 81999],
      ],
    },
    {
      id: 2,
      price: 83999,
      shopName: "Эльдорадо",
      shopLogo: "src/assets/icons/LendingPrices/icon2.svg",
      delivery: "Доставка бесплатная",
      trend: "down",
      link: "#",
      chartData: [
        ["Дата", "Цена"],
        ["Янв", 86000],
        ["Фев", 85000],
        ["Март", 83999],
      ],
    },
    {
      id: 3,
      price: 83999,
      shopName: "Эльдорадо",
      shopLogo: "src/assets/icons/LendingPrices/icon2.svg",
      delivery: "Доставка бесплатная",
      trend: "down",
      link: "#",
      chartData: [
        ["Дата", "Цена"],
        ["Янв", 86000],
        ["Фев", 85000],
        ["Март", 83999],
      ],
    },
    {
      id: 4,
      price: 83999,
      shopName: "Эльдорадо",
      shopLogo: "src/assets/icons/LendingPrices/icon2.svg",
      delivery: "Доставка бесплатная",
      trend: "down",
      link: "#",
      chartData: [
        ["Дата", "Цена"],
        ["Янв", 86000],
        ["Фев", 85000],
        ["Март", 83999],
      ],
    },
  ];

  return (
    <div className="lending-prices-container">
      <div className="shop-card-horizontal">
        <div className="shop-info">
          <h2 className="shop-name">Итог</h2>
          <Rating name="rating-read" defaultValue={4} precision={0.5} readOnly />
        </div>
        <div className="shop-logos">
          <img src="src/assets/icons/LendingPrices/Frame 7.svg" alt="heart" />
          <img src="src/assets/icons/LendingPrices/Frame 8.svg" alt="compare" />
        </div>
      </div>

      <h3>Цены на {product.name}</h3>

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
                  colors: [shop.trend === "up" ? "#FF6B6B" : "#4CAF50"],
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
    </div>
  );
};

export default LendingPrices;
