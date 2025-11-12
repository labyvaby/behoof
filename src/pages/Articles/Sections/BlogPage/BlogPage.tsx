import React from "react";
import { Link } from "react-router-dom";
import "./style.scss";

const BlogPage: React.FC = () => {
  const categories = [
    "Все",
    "Смартфоны",
    "ПК",
    "Ноутбуки",
    "Кондиционеры",
    "Игры",
    "Техника для дома",
    "Аудиотехника",
    "Фото/видео",

  ];

  const tags = ["Xiaomi", "Смартфоны", "Технологии", "Apple", "Техника"];

  const posts = [
    {
      id: 1,
      title: "Xiaomi опубликовала постер Redmi Turbo 3 — ",
      date: "15 апреля 2024 г.",
      image: "src/assets/images/BlogPage/img1.png",
      tags: ["Xiaomi", "Смартфоны", "Технологии"],
    },
    {
      id: 2,
      title: "Xiaomi опубликовала постер Redmi Turbo 3 — он выглядит не так, как ожидалось",
      date: "15 апреля 2024 г.",
      image: "src/assets/images/BlogPage/img2.png",
      tags: ["Xiaomi", "Смартфоны", "Технологии"],
    },
    {
      id: 3,
      title: "Xiaomi опубликовала постер Redmi Turbo 3 — он выглядит не так, как ожидалось",
      date: "15 апреля 2024 г.",
      image: "src/assets/images/BlogPage/img3.png",
      tags: ["Xiaomi", "Смартфоны"],
    },
    {
      id: 4,
      title: "Xiaomi опубликовала постер Redmi Turbo 3 — он выглядит не так, как ожидалось",
      date: "15 апреля 2024 г.",
      image: "src/assets/images/BlogPage/img4.png",
      tags: ["Xiaomi", "Смартфоны", "Технологии"],
    },
    {
      id: 5,
      title: "Xiaomi опубликовала постер Redmi Turbo 3 — он выглядит не так, как ожидалось",
      date: "15 апреля 2024 г.",
      image: "src/assets/images/BlogPage/img5.png",
      tags: ["Xiaomi", "Смартфоны", "Технологии"],
    },
    {
      id: 6,
      title: "Xiaomi опубликовала постер Redmi Turbo 3 — он выглядит не так, как ожидалось",
      date: "15 апреля 2024 г.",
      image: "src/assets/images/BlogPage/img5.png",
      tags: ["Xiaomi", "Смартфоны", "Технологии"],
    },


  ];

  return (
    <div className="blog">
      <div className="breadcrumb">
        <Link to="/" className="breadcrumb__home">Главная</Link>
        <span className="breadcrumb__divider"> / </span>
        <span className="breadcrumb__current">Блог</span>
      </div>
      <div className="blog__header">
        <h1>Блог</h1>
        <div className="blog__search-tags">
          <div className="search-block">
            <h3>
              Поиск <span>статй</span>
            </h3>
            <div className="input-wrapper">
              <span className="input-icon"><img src="src/assets/icons/BlogPage/Search.svg" alt="logo Search" /></span>
              <input type="text" placeholder="Ищите рубрику или название статьи" />
            </div>
          </div>

          <div className="tags-block">
            <h3>
              Популярные <span>теги</span>
            </h3>
            <div className="tags-list">
              {tags.map((tag, i) => (
                <span key={i} className="tag">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
        <div className="categories">
          {categories.map((cat, i) => (
            <button key={i} className={i === 0 ? "active" : ""}>
              {cat}
            </button>
          ))}
        </div>
      </div>
      <div className="blog__grid">
        {posts.map((post) => (
          <div
            key={post.id}
            className={`blog-card ${post.id === 6 ? "blog-card--wide" : ""}`}
          >
            <img src={post.image} alt={post.title} />
            <div className="blog-card__content">
              <h2>{post.title}</h2>
              <p className="date">{post.date}</p>
              <div className="tags">
                {post.tags.map((tag, i) => (
                  <span key={i}>{tag}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};

export default BlogPage;
