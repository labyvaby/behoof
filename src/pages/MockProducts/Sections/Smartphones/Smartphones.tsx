import React, { useState } from "react";
import SaleCard from "../SaleCard/SaleCard";
import "./style.scss";

const products = [
  // ... (Ваш массив продуктов без изменений)
  {
    id: 1,
    name: "Samsung Galaxy M32 128GB Белый",
    price: 55000,
    oldPrice: 90990,
    discount: 45,
    rating: 4.0,
    reviews: 447,
    image: "src/assets/images/Smartphones/img1.png",
  },
  {
    id: 2,
    name: "Samsung Galaxy M32 128GB Белый",
    price: 55000,
    oldPrice: 90990,
    discount: 45,
    rating: 4.0,
    reviews: 447,
    image: "src/assets/images/Smartphones/img1.png",
  },
  {
    id: 3,
    name: "Samsung Galaxy M32 128GB Белый",
    price: 55000,
    oldPrice: 90990,
    discount: 45,
    rating: 4.0,
    reviews: 447,
    image: "src/assets/images/Smartphones/img1.png",
  },
  {
    id: 4,
    name: "Samsung Galaxy M32 128GB Белый",
    price: 55000,
    oldPrice: 90990,
    discount: 45,
    rating: 4.0,
    reviews: 447,
    image: "src/assets/images/Smartphones/img1.png",
  },
];

const sortOptions = [
  { label: "По популярности", value: "popularity" },
  { label: "Сначала дешевые", value: "price-asc" },
  { label: "Сначала дорогие", value: "price-desc" },
  { label: "По рейтингу", value: "rating" },
];

const categories = [
    { id: 'smartphones', label: 'Смартфоны', sub: ['Apple', 'Apple', 'Apple', 'Apple', 'Apple', 'Apple'], checked: true },
    { id: 'notebooks', label: 'Ноутбуки', checked: false },
    { id: 'monitors', label: 'Мониторы', checked: false },
    { id: 'photo', label: 'Фототехника', checked: false },
    { id: 'tv', label: 'Телевизоры', checked: false },
    { id: 'fridges', label: 'Холодильники', checked: false },
];

const SalesPage: React.FC = () => {
  const [isSortOpen, setIsSortOpen] = useState(false);
  const [isFilterDropdownOpen, setIsFilterDropdownOpen] = useState(false); 

  const toggleSortMenu = () => {
    setIsSortOpen(!isSortOpen);
    if (isFilterDropdownOpen) setIsFilterDropdownOpen(false); 
  };

  const toggleFilterDropdown = () => {
    setIsFilterDropdownOpen(!isFilterDropdownOpen);
    if (isSortOpen) setIsSortOpen(false); 
  };

  return (
    <div className="sales-container">
      <div className="sales-breadcrumbs">Главная / Все распродажи</div>

      <h1 className="sales-title">
        Акции, скидки и распродажи от <span>Behoof</span>
      </h1>

      <div className="sales-filters">
        
        {/* ⭐ КОНТЕЙНЕР ФИЛЬТРОВ */}
        <div className="filter-dropdown-container">
            <button className="filter-btn" onClick={toggleFilterDropdown}>
                Фильтр распродаж →
            </button>
            
            {/* ⭐ Условное отображение меню фильтров */}
            {isFilterDropdownOpen && (
                <div className="filter-dropdown-menu">
                    
                    {/* Заголовок фильтра (Фильтр распродаж) */}
                    <div className="filter-dropdown-header">Фильтр распродаж</div>
                    
                    {/* Диапазон цен */}
                    <div className="filter-section price-range-section">
                        <h3>Диапазон цен</h3>
                        <div className="price-inputs">
                            <input type="text" defaultValue="От 12 511" />
                            <input type="text" defaultValue="До 99 511" />
                        </div>
                        {/* Здесь должна быть ваша стилизованная шкала (слайдер) */}
                        <div className="price-slider-placeholder"></div>
                    </div>

                    {/* Список категорий */}
                    <div className="filter-section categories-list">
                        {categories.map(cat => (
                            <div key={cat.id} className={`category-item ${cat.sub ? 'has-sub' : ''}`}>
                                <label className="category-label">
                                    <input type="checkbox" defaultChecked={cat.checked} /> 
                                    {cat.label}
                                </label>
                                {cat.sub && (
                                    <div className="subcategories-list">
                                        {cat.sub.map((sub, index) => (
                                            <label key={index} className="subcategory-label">
                                                <input type="checkbox" /> {sub}
                                            </label>
                                        ))}
                                    </div>
                                )}
                                {/* Стрелка для неразвернутых категорий */}
                                {!cat.sub && <span className="arrow">→</span>}
                            </div>
                        ))}
                    </div>

                    {/* Кнопки внизу */}
                    <div className="filter-actions">
                        <button className="apply-btn">Применить</button>
                        <button className="clear-btn">Очистить</button>
                    </div>

                </div>
            )}
        </div>
        
        {/* КОНТЕЙНЕР СОРТИРОВКИ (без изменений) */}
        <div className="sort-dropdown-container">
          <button className="filter-btn" onClick={toggleSortMenu}>
            Сортировка →
          </button>
          {isSortOpen && (
            <div className="sort-dropdown-menu">
              {sortOptions.map((option) => (
                <div key={option.value} className="sort-option">
                  {option.label}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <h2 className="sales-category-title">Смартфоны</h2>
      <div className="sales-grid">
        {products.map((item) => (
          <SaleCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default SalesPage;