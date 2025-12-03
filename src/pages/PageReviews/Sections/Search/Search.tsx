import React, { useEffect, useState } from "react";
import "./style.scss";

interface ProductGridItem {
  id: number;
  image: string;
  title: string;
  text: string;
}

const SearchPage: React.FC = () => {
  const [query, setQuery] = useState("");
  const [products, setProducts] = useState<ProductGridItem[]>([]);
  const [filtered, setFiltered] = useState<ProductGridItem[]>([]);

  useEffect(() => {
    fetch("http://localhost:3000/ProductGrid")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  useEffect(() => {
    const result = products.filter((p) =>
      p.title.toLowerCase().includes(query.toLowerCase())
    );
    setFiltered(result);
  }, [query, products]);

  return (
    <div className="search-page">
      <div className="poin">
        <a href="/" className="breadcrumb-link">Главная</a>
        <span className="breadcrumb-separator">/</span>
        <a href="/reviews" className="breadcrumb-link active">Обзоры</a>
      </div>

      <main className="main">
        <h2>Обзоры, чтобы выбрать нужное</h2>

        <div className="search-input-container">
          <input
            type="text"
            placeholder="Введите поисковый запрос"
            className="search-input"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <img
            src="src/assets/icons/Search/search-normal.svg"
            alt="logo"
            className="search-icon"
          />
        </div>

        <div className="search-results" style={{ marginTop: "10px" }}>
          {query.length === 0 ? null : filtered.length === 0 ? (
            <p className="search-results__empty">Ничего не найдено...</p>
          ) : (
            filtered.slice(0, 3).map((item) => (
              <article className="search-card" key={item.id}>

                <div className="search-card__image-wrap">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="search-card__image"
                  />
                </div>

                <div className="search-card__content">
                  <h3 className="search-card__title">{item.title}</h3>
                  <p className="search-card__text">{item.text}</p>

                  <a href="/" className="search-card__link">
                    Смотреть
                    <img
                      src="src/assets/icons/Review/iconc- Right 2.svg"
                      className="search-card__icon"
                      alt=""
                    />
                  </a>
                </div>

              </article>
            ))
          )}
        </div>

      </main>
    </div>
  );
};

export default SearchPage;
