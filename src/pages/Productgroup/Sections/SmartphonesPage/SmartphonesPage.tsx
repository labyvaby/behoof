import React, { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import "./style.scss";

const SmartphonesPage: React.FC = () => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState({ min: 12511, max: 99511 });

  const brands = useMemo(
    () => [
      "Apple",
      "Asus",
      "Samsung",
      "Xiaomi",
      "Google",
      "Huawei",
      "Lenovo",
      "Nokia",
      "Sony",
      "Motorola",
      "LG",
      "Oppo",
    ],
    []
  );

  const memoryOptions = ["4 ГБ", "6 ГБ", "8 ГБ", "12 ГБ", "16 ГБ"];
  const screenOptions = ["5.5\"", "6.1\"", "6.5\"", "6.7\"", "7.0\""];
  const screenSizes = ["5.5\"", "6.1\"", "6.5\"", "6.7\"", "7.0\""];
  const screen = ["5.5\"", "6.1\"", "6.5\"", "6.7\"", "7.0\""];


  const toggleFilter = () => setIsFilterOpen(!isFilterOpen);

  const toggleBrand = (brand: string) =>
    setSelectedBrands((prev) =>
      prev.includes(brand) ? prev.filter((b) => b !== brand) : [...prev, brand]
    );

  const Card = ({ title, children }: { title: string; children: React.ReactNode }) => (
    <div className="card product">
      <h3>{title}</h3>
      {children}
    </div>
  );

  return (
    <div className="smartphones">
      <nav className="breadcrumbs">
        <Link to="/">Главная</Link> / <span>Смартфоны</span>
      </nav>
      <div className="header-line">
        <h1 className="title">Смартфоны</h1>

      </div>


      <div className="mobile-controls">
        <button className="sort-button" aria-label="Сортировка">
          <span className="sort-icon"><img src="src/assets/icons/SmartphonesPage/arrow-3.svg" alt="" /></span> Сортировка
        </button>
        <button
          className="filter-button"
          onClick={toggleFilter}
          aria-label={isFilterOpen ? "Закрыть фильтры" : "Открыть фильтры"}
        >
          <span className="filter-icon"><img src="src/assets/icons/SmartphonesPage/setting-5.svg" alt="" /></span> Фильтры
        </button>
      </div>

      <div className="layout">
        <aside className={`filters ${isFilterOpen ? "open" : ""}`}>
          <div className="card filter">
            <h3>Фильтрация</h3>
            <p className="subtitle">Бренды</p>
            <div className="chip">
              {brands.map((brand, i) => (
                <span
                  key={i}
                  className={`item brand ${selectedBrands.includes(brand) ? "selected" : ""}`}
                  onClick={() => toggleBrand(brand)}
                >
                  {brand}
                </span>
              ))}
            </div>

            <div className="card filter">
              <h4>Диапазон цен</h4>
              <div className="price-range">
                <input
                  type="text"
                  value={`от ${priceRange.min}`}
                  onChange={(e) =>
                    setPriceRange({ ...priceRange, min: Number(e.target.value.replace("от ", "")) })
                  }
                />
                <input
                  type="text"
                  value={`до ${priceRange.max}`}
                  onChange={(e) =>
                    setPriceRange({ ...priceRange, max: Number(e.target.value.replace("до ", "")) })
                  }
                />
              </div>
              <input
                type="range"
                min="0"
                max="100000"
                value={priceRange.min}
                onChange={(e) => {
                  const val = Number(e.target.value);
                  setPriceRange({ ...priceRange, min: val });

                  const percent = (val / 100000) * 100;
                  e.target.style.setProperty("--value", percent + "%");
                }}
              />

            </div>

            <div className="card filter">
              <h4>Дополнительно</h4>
              <label className="switch">
                <span>есть</span>
                <input type="checkbox" defaultChecked />
                <span className="slider"></span>
              </label>
              <label className="switch">
                <span>есть</span>
                <input type="checkbox" defaultChecked />
                <span className="slider"></span>
              </label>
              <label className="switch">
                <span>есть</span>
                <input type="checkbox" defaultChecked />
                <span className="slider"></span>
              </label>
            </div>
          </div>
        </aside>

        <main className={`filters ${isFilterOpen ? "open" : ""}`}>
          <Card title="Батарея">
            <div className="rating">
              {[1, 2, 3, 4, 5].map((r) => (
                <div key={r} className={`dot ${r === 4 ? "active" : ""}`} />
              ))}
            </div>
            <p>Память</p>
            <div className="chip">
              {memoryOptions.map((text, i) => (
                <span key={i} className="item option">{text}</span>
              ))}
            </div>
            <p>Экран</p>
            <div className="chip">
              {screenOptions.map((text, i) => (
                <span key={i} className="item option">{text}</span>
              ))}
            </div>
            <p>Время</p>
            <div className="chip">
              {screenOptions.map((text, i) => (
                <span key={i} className="item option">{text}</span>
              ))}
            </div>
          </Card>

          <Card title="Экран">
            <span className="rating-label">Общий рейтинг</span>
            <div className="rating">
              {[1, 2, 3, 4, 5].map((r) => (
                <div key={r} className={`dot ${r <= 3 ? "active" : ""}`} />
              ))}
            </div>
            <p>Время</p>
            <div className="chip">
              {screenSizes.map((text, i) => (
                <span key={i} className="item option">{text}</span>
              ))}
            </div>
            <p> Экран</p>
            <div className="chip">
              {screen.map((text, i) => (
                <span key={i} className="item option">{text}</span>
              ))}
            </div>

          </Card>

          <Card title="Память">
            <div className="scale">
              {[...Array(5)].map((_, i) => (
                <div key={i} className={`scale-segment ${i < 3 ? "active" : ""}`}></div>
              ))}
            </div>
            <p className="desc">1920 × 1080, IPS, яркость</p>
          </Card>

          <Card title="Время работы">
            <div className="scale">
              {[...Array(5)].map((_, i) => (
                <div key={i} className={`scale-segment ${i < 4 ? "active" : ""}`}></div>
              ))}
            </div>
          </Card>
        </main>
      </div>
    </div>
  );
};

export default SmartphonesPage;