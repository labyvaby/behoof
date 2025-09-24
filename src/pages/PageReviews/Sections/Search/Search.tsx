import React from 'react';
import './style.scss';

const SearchPage: React.FC = () => {
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
          />
          <img src="src/assets/icons/Search/search-normal.svg" alt="logo" className="search-icon" />
        </div>
      </main>
    </div>
  );
};

export default SearchPage;
