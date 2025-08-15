import React, { useEffect, useState } from "react";
import "./style.scss";

interface Product {
  id: number;
  category: string;
  title: string;
  price: number;
  priceChange: number;
  image: string;
}

const NewProducts: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [favorites, setFavorites] = useState<number[]>([]);

  useEffect(() => {
    fetch("http://localhost:3000/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const toggleFavorite = (id: number) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };

  return (
    <section className="new-products">
      <div className="new-products__header">
        <h2>Новинки</h2>
        <a href="/" className="new-products__link">
          К новинкам →
        </a>
      </div>
      <div className="new-products__grid">
        {products.map((product) => (
          <div className="product-card" key={product.id}>
            <img src={product.image} alt={product.title} />
            <p className="product-category">{product.category}</p>
            <h3 className="product-title">{product.title}</h3>

            <div className="product-price-title-row">
              <span className="product-price-title">Цена</span>
              <span
                className={`product-change ${product.priceChange > 0
                  ? "up"
                  : product.priceChange < 0
                    ? "down"
                    : ""
                  }`}
              >
                {product.priceChange > 0
                  ? "▲"
                  : product.priceChange < 0
                    ? "▼"
                    : ""}
                {Math.abs(product.priceChange)}%
              </span>
            </div>

            <div className="product-footer">
              <span className="product-price">
                {product.price.toLocaleString()} ₽
              </span>
              <div className="product-icons">
                <img
                  src={
                    favorites.includes(product.id)
                      ? "src/assets/icons/NewProducts/icons.svg"
                      : "src/assets/icons/NewProducts/heart.svg"
                  }
                  alt="favorite"
                  onClick={() => toggleFavorite(product.id)}
                />
                <img
                  src="src/assets/icons/NewProducts/chart.svg"
                  alt="chart"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default NewProducts;
