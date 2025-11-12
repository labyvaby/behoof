import React from 'react';
import './style.scss';

const features = [
  { title: 'Дизайн', value: 90 },
  { title: 'Батарея', value: 80 },
  { title: 'Дисплей', value: 85 },
  { title: 'Камера', value: 92 },
  { title: 'Ответ', value: 75 },
  { title: 'Портативность', value: 88 }
];

const ProductFeatures: React.FC = () => {
  return (
    <section className="features">
      <div className="features__card">
        <div className="features__info">
          <span className="features__category">Смартфоны</span>
          <h3>Apple iPhone 12, 256 ГБ красный</h3>

          <div className="features__list"> 
             <img className="features__img" src="/images/iphone.png" alt="iPhone" />
            {features.map((item, i) => (
              <div className="features__item" key={i}>
                <span>{item.title}</span>
                <div className="features__line">
                  <div
                    className="features__line-fill"
                    style={{ width: `${item.value}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

         <div className="features__text">
        <h2>Показываем понятные свойства товаров</h2>
        <p>
         Конечно мы не первые кто пытается решить такую проблему, но нас отличает подход. Мы предлагаем новую систему поиска основанную не на множестве не всем понятных характеристик (таких как тактовая частота процессора или тип экрана) а на ключевых пользовательских свойствах товаров, ради которых покупатели сообственно и тратят свои деньги. Например смартфон мы покупаем для того чтобы быстро решал наши повседневные задачи, и тянул хорошие игры (Производительность), делал красивые фотографии, долго не садился, показывал красивую картинку при просмотре видео или роликов youtube ну и конечно симпатично выглядел и было не стыдно появится с ним в компании друзей. Также мы постарались разместить на странице товара всю информацию чтобы вы могли быстро и верно принять решение подходит ли он именно вам — обзоры с наиболее авторитетных сайтов, отзывы пользователей со всего интернета и цены на товар во всех популярных интернет магазинах вашего региона
        </p>
      </div>
      </div>

    
    </section>
  );
};

export default ProductFeatures;
