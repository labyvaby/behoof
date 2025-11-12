import React, { useEffect, useState } from "react";
import "./style.scss";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";

interface Smartphone {
  id: number;
  name: string;
  image: string;
  rating: number;
  icon: string;
}

const ArticlePage: React.FC = () => {
  const [smartphones, setSmartphones] = useState<Smartphone[]>([]);

  useEffect(() => {
    fetch("http://localhost:3000/smartphones")
      .then((res) => res.json())
      .then((data) => setSmartphones(data))
  }, []);

  return (
    <div className="article-page">
      <div className="breadcrumb">
        Главная / Топ-10 смартфонов дешевле 10 тысяч рублей
      </div>

      <h1 className="article-title">
        Топ-10 смартфонов дешевле 10 тысяч рублей
      </h1>
      <div className="article-content">
        <div className="article-main">
          <img
            src="/src/assets/images/ArticlePage/PocoImg.png"
            alt="Смартфон"
            className="article-image"
          />
          <p className="article-text">
            Несмотря на то, что смутные времена, начавшиеся чуть больше года
            назад, и не думают заканчиваться, ситуация на российском рынке
            смартфонов как будто даже устаканилась.
          </p>
        </div>

        <aside className="article-sidebar">
          <h2 className="sidebar-title">Топ-10 смартфонов</h2>
          <ul className="smartphone-list">
            {smartphones.map((phone) => (
              <li key={phone.id} className="smartphone-item">
                <img
                  src={phone.image}
                  alt={phone.name}
                  className="smartphone-img"
                />
                <div className="smartphone-info">
                  <span className="smartphone-rank">
                    <img
                      src={phone.icon}
                      alt="rank"
                      className="rank-icon"
                    />{" "}
                    Место
                  </span>
                  <p className="smartphone-name">{phone.name}</p>
                  <div className="smartphone-rating">
                    <span className="stars">
                      <Stack spacing={1}>
                        <Rating
                          name="size-small"
                          value={phone.rating}
                          precision={0.1}
                          size="small"
                          readOnly
                        />
                      </Stack>
                    </span>
                    <span className="value">{phone.rating}</span>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </aside>
      </div> 
    </div>
  );
};

export default ArticlePage;
