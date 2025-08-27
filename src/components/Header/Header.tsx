import React, { useState, useEffect } from "react";
import Container from "../Сontainer/Container";
import "./style.scss";
import logo from "../../assets/logo.svg";
import { Search, Heart, BarChart2, User, ChevronRight } from "lucide-react";

interface Product {
  name: string;
}

interface Category {
  name: string;
  badge?: string;
  subcategories?: Category[];
  products?: Product[];
}

const Header: React.FC = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [isCatalogOpen, setIsCatalogOpen] = useState(false);

  const [activeCategory, setActiveCategory] = useState<Category | null>(null);
  const [activeSubcategory, setActiveSubcategory] = useState<Category | null>(
    null
  );
  const [activeSubSubcategory, setActiveSubSubcategory] =
    useState<Category | null>(null);

  useEffect(() => {
    fetch("http://localhost:3000/categories")
      .then((res) => res.json())
      .then(setCategories);
  }, []);

  return (
    <>
      <header className="header">
        <Container>
          <div className="header__content">
            {/* Лого + текст */}
            <div className="header__logo">
              <img src={logo} alt="Behoof" className="header__logo-icon" />
              <div className="header__logo-text">
                <span className="header__title">Behoof</span>
                <span className="header__subtitle">
                  Лучшие цены <br /> в интернет-магазинах
                </span>
              </div>
            </div>

            {/* Средняя часть (каталог + поиск) */}
            <div className="header__middle">
              <button
                className="header__catalog"
                onClick={() => setIsCatalogOpen(!isCatalogOpen)}
              >
                Каталог товаров ▾
              </button>

              <div className="header__search">
                <Search className="header__search-icon" />
                <input
                  type="text"
                  placeholder="Поиск товаров"
                  className="header__search-input"
                />
              </div>
            </div>

            {/* Иконки */}
            <div className="header__icons">
              {[Heart, BarChart2, User].map((Icon, idx) => (
                <button key={idx} className="header__icon">
                  <Icon />
                </button>
              ))}
            </div>
          </div>




        </Container>
        {isCatalogOpen && (
          <div className="catalog">
            {/* 1 уровень */}
            <div className="catalog__column">
              <div className="catalog__title">Каталог товаров</div>
              <ul className="catalog__list">
                {categories.map((cat, i) => (
                  <li
                    key={i}
                    className={`catalog__item ${activeCategory === cat ? "active" : ""
                      }`}
                    onMouseEnter={() => {
                      setActiveCategory(cat);
                      setActiveSubcategory(null);
                      setActiveSubSubcategory(null);
                    }}
                  >
                    <span>{cat.name}</span>
                    {(cat.subcategories || cat.products) && (
                      <ChevronRight
                        className={`arrow ${activeCategory === cat ? "rotate" : ""
                          }`}
                        size={16}
                      />
                    )}
                  </li>
                ))}
              </ul>
            </div>

            {/* 2 уровень */}
            {activeCategory && (
              <div className="catalog__column">
                <div className="catalog__title">{activeCategory.name}</div>
                <ul className="catalog__list">
                  {activeCategory.subcategories?.map((sub, j) => (
                    <li
                      key={j}
                      className={`catalog__item ${activeSubcategory === sub ? "active" : ""
                        }`}
                      onMouseEnter={() => {
                        setActiveSubcategory(sub);
                        setActiveSubSubcategory(null);
                      }}
                    >
                      <span>{sub.name}</span>
                      {sub.badge && <span className="badge">{sub.badge}</span>}
                      {(sub.subcategories || sub.products) && (
                        <ChevronRight
                          className={`arrow ${activeSubcategory === sub ? "rotate" : ""
                            }`}
                          size={16}
                        />
                      )}
                    </li>
                  ))}
                  {activeCategory.products?.map((p, j) => (
                    <li key={j} className="catalog__item">
                      {p.name}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* 3 уровень */}
            {activeSubcategory && (
              <div className="catalog__column">
                <div className="catalog__title">{activeSubcategory.name}</div>
                <ul className="catalog__list">
                  {activeSubcategory.subcategories?.map((sub2, k) => (
                    <li
                      key={k}
                      className={`catalog__item ${activeSubSubcategory === sub2 ? "active" : ""
                        }`}
                      onMouseEnter={() => setActiveSubSubcategory(sub2)}
                    >
                      {sub2.name}
                      {(sub2.subcategories || sub2.products) && (
                        <ChevronRight
                          className={`arrow ${activeSubSubcategory === sub2 ? "rotate" : ""
                            }`}
                          size={16}
                        />
                      )}
                    </li>
                  ))}
                  {activeSubcategory.products?.map((p, k) => (
                    <li key={k} className="catalog__item">
                      {p.name}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* 4 уровень */}
            {activeSubSubcategory && (
              <div className="catalog__column">
                <div className="catalog__title">
                  {activeSubSubcategory.name}
                </div>
                <ul className="catalog__list">
                  {activeSubSubcategory.products?.map((p, m) => (
                    <li key={m} className="catalog__item">
                      {p.name}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}
      </header>
    </>
  );
};

export default Header;
