import React from "react";
import "./style.scss";

const RenderSmartphone: React.FC = () => {
  return (
    <section className="render">
      <div className="render__content">
        <h2 className="render__title">Рендер смартфона</h2>
        <p className="render__text">
          В начале апреля Xiaomi анонсировала смартфон новой серии Redmi Turbo 3.
          Спустя несколько дней в интернете появился рендер, на котором, как утверждалось,
          показан дизайн устройства. Теперь дизайн был раскрыт официально.
          В социальных сетях Redmi появилась постер нового смартфона, и он выглядит не так,
          как показывал опубликованный в сети рендер. Либо изображение из источника — фейк.
          Либо на нём представлен другой смартфон из серии Redmi Turbo 3.
        
          проектирования Turbo 3 действительно выглядел так, но в итоге дизайн переработали.
        </p>

        <h3 className="render__subtitle">Характеристики Redmi Turbo 3</h3>
        <ul className="render__specs">
          <li>Дисплей: 6.67″ AMOLED–1220 × 2712.</li>
          <li>Чип: Qualcomm Snapdragon 8s Gen 3.</li>
          <li>Камера: 2 (50 MP + 8 MP)</li>
          <li>Батарея: 5000 мАч</li>
          <li>OS: Android 14.</li>
          <li>Вес: 179 г.</li>
        </ul>
      </div>

      <div className="render__image">
        <img src="src/assets/images/RenderSmartphone/image1.png" alt="Redmi Turbo 3" />
       
        <p className="render__caption">Подпись к изображению</p>
      </div>
    </section>
  );
};

export default RenderSmartphone;
