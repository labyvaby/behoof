import React, { useEffect, useState, } from "react"; 
import { Link } from "react-router-dom";
import "./style.scss";

interface ReviewItem {
    id: number;
    image: string;
    title: string;
    text: string;
}

const Reviews: React.FC = () => {
    const [reviews, setReviews] = useState<ReviewItem[]>([]);

    useEffect(() => {
        fetch("http://localhost:4091/reviews")
            .then((res) => res.json())
            .then((data) => setReviews(data))
    }, []);

    return (
        <section className="container">
            <div className="container__header">
                <h2>Обзоры</h2>
                <Link to="/PageReviews"className="container__link">
                    Смотреть все →
                </Link>
            </div>

            <div className="reviews-grid">
                {reviews.map((item) => (
                    <article className="review-card" key={item.id}>
                        <div className="review-card__image-wrap">
                            <img
                                src={item.image}
                                alt={item.title}
                                className="review-card__image"
                                loading="lazy"
                            />
                        </div>
                        <div className="review-card__content">
                            <h3 className="review-card__title">{item.title}</h3>
                            <p className="review-card__text">{item.text}</p>
                            <a href="/PageReviews" className="review-card__link">
                                Смотреть
                                <img
                                    src="src/assets/icons/Review/iconc- Right 2.svg"
                                    className="review-card__icon"
                                    alt="logo"
                                />
                            </a>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
};

export default Reviews;
