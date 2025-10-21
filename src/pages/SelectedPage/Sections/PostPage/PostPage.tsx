import React from 'react';
import './style.scss';

const PostPage: React.FC = () => {
  return (
    <div className="post-container">
      <div className="post-header">
        <span className="post-source">Главная</span>
        <span className="post-error">/ Блог</span>
        <span className="post-chat">/ Cтатья</span>
      </div>
      <div className="post-content">
        <h1 className="post-title">
          Xiaomi опубликовала постер Redmi Turbo 3 — ОН ВЫГЛЯДИТ НЕ ТАК, как ожидалось
        </h1>
        <div className="post-meta">
          <div className="post-author">
            <img src="src/assets/images/PostPage/Ellipse 5.png" alt=" " className="author-avatar" />
            <span className="author-name">Тимофей Клименко</span>
          </div>
          <div className="post-dates">
            <span className="post-date">19 октября 2023 г.</span>
            <span className="post-date"> <img src="src/assets/icons/PostPage/icon.svg" alt="" /> 748 прочтений</span>
            <span className="post-date"> <img src="src/assets/icons/PostPage/icon-time.svg" alt="" /> Время прочтения: 5 мин..</span>
          </div>


          <div className="post-actions">
            <button className="action-button">Xiaomi</button>
            <button className="action-button highlight">Смартфоны</button>
            <button className="action-button">Технологии</button>
          </div>
        </div>

        <p className="post-text">
          Эксперт современных технологий. обладает глубокими знаниями <br /> и многолетним опытом работы в этой сфере.
        </p>
      </div> 
      <div className='xiomi' > 
         <img src="src/assets/images/PostPage/img1.png" alt="img" /> 
        
      </div>
    </div>
  );
};

export default PostPage;