import React, { useEffect, useState } from "react";
import "./style.scss";

interface  Presentation {
  id: number;
  img: string;
  label: string;
}

const Presentation: React.FC = () => {
  const [phones, setPhones] = useState< Presentation[]>([]);

  useEffect(() => {
    fetch("http://localhost:3000/Presentation")
      .then((res) => res.json())
      .then((data) => setPhones(data));
  }, []);

  return (
    <section className="presentation">
      <div className="presentation__container">
        <h2 className="presentation__title">Презентация</h2>
        <p className="presentation__text">
         Сегодня, 10 апреля, в Китае состоялась презентация производительного смартфона Redmi Turbo 3. Изначально аппарат должен был называться Redmi Note 13 Turbo, но модель получилась настолько мощной, что бренд решил провести ребрендинг. В Redmi также придумали альтернативное название смартфону — «Маленький Торнадо».
        </p>

        <div className="presentation__list">
          {phones.map((phone) => (
            <div className="presentation__item" key={phone.id}>
              <div className="presentation__image-wrapper">
                <img src={phone.img} alt={phone.label} />
              </div>
              <span className="presentation__label">{phone.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Presentation;
