import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Container from "../Сontainer/Container";
import "./style.scss";
import logo from "../../assets/logo.svg";
import { Search, Heart, BarChart2, User } from "lucide-react";
import Catalog from "../Catalog/Catalog";

interface ProductItem {
  id: number;
  name: string;
  image: string;
  rating: number; 
  reviews: number;
  price: number;
}

const Header: React.FC = () => {
  const [isCatalogOpen, setIsCatalogOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [results, setResults] = useState<ProductItem[]>([]);
  const [isSearchActive, setIsSearchActive] = useState(false);
  const navigate = useNavigate();
  const searchRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (searchQuery.trim().length > 0) {
      const timeout = setTimeout(() => {
        fetch(`http://localhost:3000/ProductItem?name_like=${searchQuery}`)
          .then((res) => res.json())
          .then((data) => setResults(data))
          .catch(() => setResults([]));
      }, 500);
      return () => clearTimeout(timeout);
    } else {
      setResults([]);
    }
  }, [searchQuery]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(e.target as Node)) {
        setIsSearchActive(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <header className="header">
      <Container>
        <div className="header__content">
          <div className="header__logo">
            <Link to="/">
              <img src={logo} alt="Behoof" className="header__logo-icon" />
            </Link>
            <div className="header__logo-text">
              <Link to="/" className="header__title">
                Behoof
              </Link>
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

            <div
              className="header__search"
              ref={searchRef}
              onClick={() => setIsSearchActive(true)}
            >
              <Search className="header__search-icon" />
              <input
                type="text"
                placeholder="Поиск товаров"
                className="header__search-input"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />

              {isSearchActive && searchQuery && (
                <div className="search-dropdown">
                  {results.length > 0 ? (
                    results.map((item) => (
                      <div
                        key={item.id}
                        className="search-item"
                        onClick={() => {
                          navigate(`/product/${item.id}`);
                          setIsSearchActive(false);
                          setSearchQuery("");
                        }}
                      >
                        <img
                          src={item.image}
                          alt={item.name}
                          className="search-item__image"
                        />
                        <div className="search-item__info">
                          <span className="search-item__name">{item.name}</span>
                          <span className="search-item__price">
                            {item.price} ₽
                          </span>
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className="search-empty"></div>
                  )}
                </div>
              )}
            </div>
          </div>

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
