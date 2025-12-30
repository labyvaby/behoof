import React from "react";
import { Link } from "react-router-dom";
import "./style.scss";

const Hero: React.FC = () => {
  return (
    <section className="hero">
      <div className="hero-block">
        <h1>
          1.8 млн <span className="black-text">товаров в</span> 2272{" "}
          <span className="black-text">магазинах</span>
        </h1>
        <p>найди, сравни, выбирай!</p>
        <Link to="/categories" className="hero-button">
          Перейти к категориям
          <img
            src="src/assets/icons/hero/Arrow - Right 2.svg"
            alt="arrow"
            className="hero-arrow"
          />
        </Link>
      </div>

      <div className="hero-block-mini">
        <h1>
          Топ-10 <span className="black-text">смартфонов</span>
        </h1>

        <p>2023 год </p>

        <Link to="/ArticlePage"className="hero-button">
          Смотреть
          <img
            src="src/assets/icons/hero/Arrow - Right 2.svg"
            alt="arrow"
            className="hero-arrow"
          />
        </Link>

        <img
          src="src/assets/images/Hero/image3.png"
          alt="Smartphone"
          className="hero-image"
        />
      </div>
    </section>
  );
};

export default Hero;
