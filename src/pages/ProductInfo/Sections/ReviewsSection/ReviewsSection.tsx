import React, { useEffect, useState } from "react";
import "./style.scss";

interface ReviewItem {
    id: number;
    image: string;
    title: string;
    text: string;
}

const ReviewsSection: React.FC = () => {
    const [reviews, setReviews] = useState<ReviewItem[]>([]);

    useEffect(() => {
        fetch("http://localhost:3000/ReviewsSection")
            .then((res) => res.json())
            .then((data) => setReviews(data));
    }, []);

    return (
        <section className="reviews-section">
            <div className="reviews-section__header">
                <h2 className="reviews-section__title">Наши клиенты</h2>
                <a href="/" className="reviews-section__link">
                    Смотреть все →
                </a>
            </div>

            <div className="reviews-section__grid">
                {reviews.map((item) => (
                    <article className="reviews-section__card" key={item.id}>
                        <div className="reviews-section__image-wrap">
                            <img
                                src={item.image}
                                alt={item.title}
                                className="reviews-section__image"
                                loading="lazy"
                            />
                        </div>
                        <div className="reviews-section__content">
                            <h3 className="reviews-section__card-title">{item.title}</h3>
                            <p className="reviews-section__card-text">{item.text}</p>
                            <a href="/" className="reviews-section__card-link">
                                Смотреть
                                <img
                                    src="src/assets/icons/Review/iconc- Right 2.svg"
                                    className="reviews-section__card-icon"
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

export default ReviewsSection;
