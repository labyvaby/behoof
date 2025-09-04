import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/grid"; 

import { Navigation, Grid } from "swiper/modules";
import "./style.scss";
import type { NavigationOptions } from "swiper/types";

const filters = [
  "Дизайн",
  "Портативность",
  "Камера",
  "Ответ",
  "Дисплей",
  "Батарея",
];

const ProductCardList = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <section className="product-section">
      <div className="filters">
        {filters.map((filter, idx) => (
          <div key={idx} className={`filter ${idx < 2 ? "active" : ""}`}>
            {filter}
            {idx < 2 && <span className="close">×</span>}
          </div>
        ))}
      </div>

      <div className="swiper-wrapper-container">
        <Swiper
          modules={[Navigation, Grid]}
          slidesPerView={2}
          grid={{ rows: 2, fill: "row" }}
          spaceBetween={20}
          breakpoints={{
            0: {
              slidesPerView: "auto",
              grid: undefined,
              spaceBetween: 12,
            },
            769: {
              slidesPerView: 2,
              grid: { rows: 2, fill: "row" },
              spaceBetween: 20,
            },
          }}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          onSwiper={(swiper) => {
            setTimeout(() => {
              const navigation = swiper.params.navigation as NavigationOptions;
              if (navigation) {
                navigation.prevEl = prevRef.current;
                navigation.nextEl = nextRef.current;
              }
              swiper.navigation.destroy();
              swiper.navigation.init();
              swiper.navigation.update();
            });
          }}
          className="mySwiper"
        >
          {Array.from({ length: 8 }).map((_, idx) => (
            <SwiperSlide key={idx} style={{ width: "250px" }}>
              <div className="card">
                <div className="card-header">
                  <span className="category">Портативные колонки</span>
                  <span className="actions">
                    <i className="icon-heart">
                      <img
                        src="src/assets/icons/ProductCardList/iconc-love.svg"
                        alt=""
                      />
                    </i>
                    <i className="icon-chart">
                      <img
                        src="src/assets/icons/ProductCardList/chart-iconc.svg"
                        alt=""
                      />
                    </i>
                  </span>
                </div>
                <h3 className="product-name">
                  Apple iPhone 13 Pro Max 256 ГБ серый
                </h3>

                <div className="card-body">
                  <img
                    src="src/assets/images/ProductCardList/img1.png"
                    alt="Product"
                    className="product-img"
                  />

                  <div className="rating-list">
                    {filters.map((name, i) => (
                      <div className="rating-row" key={i}>
                        <span>{name}</span>
                        <div className="rating-bar">
                          <div
                            className="fill"
                            style={{ width: `${80 - i * 5}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <button
          ref={prevRef}
          className="custom-swiper-button prev"
          aria-label="Previous"
        >
          <img
            src="src/assets/icons/ProductCardList/Arrow - Left 2.svg"
            alt="Prev"
          />
        </button>
        <button
          ref={nextRef}
          className="custom-swiper-button next"
          aria-label="Next"
        >
          <img
            src="src/assets/icons/ProductCardList/Arrow - Right 2.svg"
            alt="Next"
          />
        </button>
      </div>
    </section>
  );
};

export default ProductCardList;
