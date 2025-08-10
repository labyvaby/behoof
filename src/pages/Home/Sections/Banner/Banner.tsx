import React from 'react';
import './style.scss'; // обычные стили



const Banner: React.FC = () => {
  return (
    <div className="banner">
      <div className="textContainer">
        <h1 className="title">
          ЭКОНОМЬТЕ СВОЕ ВРЕМЯ
          <br />
          И ПОЛУЧАЙТЕ МАКСИМУМ
          <br />
          ОТ ЕЖЕДНЕВНЫХ ПОКУПОК
        </h1>
       
      </div>
      <div className="phoneContainer">
        <img src="" alt="Phone 1" className="phone" />
        <img src="" alt="Phone 2" className="phone" />
      </div>
    </div>
  );
};

export default Banner;
