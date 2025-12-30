import React, { useEffect, useState } from "react";
import "./style.scss";

interface Spec {
  name: string;
  value: string;
}

interface Smartphone {
  id: number;
  rank: number;
  title: string;
  specs: Spec[];
  image: string;
  description: string[];
  pros: string[];
  cons: string[];
  icons: {
    pros: string;
    cons: string;
    rank: string;
  };
}

const SmartphonePage: React.FC = () => {
  const [data, setData] = useState<Smartphone | null>(null);

  useEffect(() => {
    fetch("http://localhost:4091/smartphonesPage")
      .then((res) => res.json())
      .then((json) => setData(json[0]))
      .catch((err) => console.error("Ошибка загрузки данных:", err));
  }, []);

  if (!data) {
    return <p className="loading">Загрузка...</p>;
  }

  return (
    <div className="smartphone">
      {/* Заголовок */}
      <div className="smartphone__header">
        <span className="smartphone__rank">
          <img src={data.icons.rank} alt="rank" /> {data.rank} место
        </span>
        <h1 className="smartphone__title">{data.title}</h1>
      </div>

      {/* Характеристики */}
      <div className="smartphone__specs">
        {data.specs.map((spec, index) => (
          <div className="spec-item" key={index}>
            <h4>{spec.name}</h4>
            <p>{spec.value}</p>
          </div>
        ))}
      </div>

      {/* Изображение */}
      <div className="smartphone__image">
        <img src={data.image} alt={data.title} />
      </div>

      {/* Описание */}
      <div className="smartphone__description">
        {data.description.map((text, index) => (
          <p key={index}>{text}</p>
        ))}
      </div>

      {/* Плюсы и минусы */}
      <div className="smartphone__proscons">
        <div className="pros">
          <h3>Что хорошо</h3>
          <ul>
            {data.pros.map((item, index) => (
              <li key={index}>
                <img src={data.icons.pros} alt="ok" /> {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="cons">
          <h3>Что плохо</h3>
          <ul>
            {data.cons.map((item, index) => (
              <li key={index}>
                <img src={data.icons.cons} alt="cross" /> {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SmartphonePage;
