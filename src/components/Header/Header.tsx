import React, { useState } from "react";
import Container from "../Сontainer/Container";
import "./style.scss";
import logo from "../../assets/logo.svg";
import { Search, Heart, BarChart2, User } from "lucide-react";
import Catalog from "../Catalog/Catalog";

const Header: React.FC = () => {
  const [isCatalogOpen, setIsCatalogOpen] = useState(false);

  return (
    <header className="header">
      <Container>
        <div className="header__content">
          <div className="header__logo">
            <img src={logo} alt="Behoof" className="header__logo-icon" />
            <div className="header__logo-text">
              <span className="header__title">Behoof</span>
              <span className="header__subtitle">
                Лучшие цены <br /> в интернет-магазинах
              </span>
            </div>
          </div>
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
          <Catalog />
        </div>
      )}
    </header>
  );
};

export default Header;
