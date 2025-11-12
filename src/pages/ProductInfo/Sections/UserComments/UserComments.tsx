import { useState, useEffect } from 'react';
import './style.scss';

interface Review {
    id: number;
    author: string;
    rating: number;
    date: string;
    text: string;
    avatar?: string;
    Decription?: string;
}

const UserComments = () => {
    const [reviews, setReviews] = useState<Review[]>([]);
    const [, setLoading] = useState(true);

    useEffect(() => {
        fetch('http://localhost:3000/UserComments')
            .then((res) => res.json())
            .then((data: Review[]) => {
                setReviews(data);
                setLoading(false);
            })
            .catch((err) => {
                console.error(err);
                setLoading(false);
            });
    }, []);
    return (
        <div className="user-comments-container">
            <h2 className="user-comments-title">Отзывы</h2>
            <div className="user-comments-grid">
                {reviews.map((review) => (
                    <div key={review.id} className="user-comments-card">
                        <div className="user-comments-header">
                            {review.avatar && (
                                <img
                                    src={review.avatar}
                                    alt={review.author}
                                    className="user-comments-avatar"
                                />
                            )}
                            <div className="user-comments-author-info">
                                <span className="user-comments-author">{review.author}</span>
                                <div className="user-comments-stars-date">
                                    {Array.from({ length: 5 }, (_, index) => (
                                        <span
                                            key={index}
                                            className={`star ${index < review.rating ? 'filled' : ''}`}
                                        >
                                            ★
                                        </span>
                                    ))}
                                    <span className="user-comments-date">{review.date}</span>
                                </div>
                            </div>
                        </div>

                        {review.Decription && (
                            <h3 className="user-comments-description">{review.Decription}</h3>
                        )}

                        <p className="user-comments-text">{review.text}</p>
                    </div>
                ))}
            </div>
            <button className="user-comments-load-more-btn">Показать ещё</button>
        </div>
    );
};

export default UserComments;
