import React, { useEffect, useState } from 'react';
import './style.scss';

interface CommentsSection {
    id: number;
    author: string;
    time: string;
    text: string;
    avatar: string;
}

const CommentsSection: React.FC = () => {
    const [comments, setComments] = useState<CommentsSection[]>([]);
    const [,setLoading] = useState(true);

    useEffect(() => {
        fetch('http://localhost:4091/CommentsSection')
            .then((res) => res.json())
            .then((data) => {
                setComments(data);
                setLoading(false);
            })

    }, []);

    return (
        <div className="comments-section">
            <h2 className="comments-title">Комментарии</h2>
            <div className="comment-input">
                <input type="text" placeholder="Написать комментарий..." className="comment-input-field" />
                <button className="comment-submit">↑</button>
            </div>


            <div className="comments-list">
                {comments.map((comment) => (
                    <div key={comment.id} className="comment-item">
                        <div className="comment-header">
                            <img src={comment.avatar} alt={comment.author} className="comment-avatar" />
                            <span className="comment-author">{comment.author}</span>
                        </div>
                        <div className="comment-time">{comment.time}</div>
                        <p className="comment-text">{comment.text}</p>
                    </div>
                ))}
            </div>

        </div>
    );
};

export default CommentsSection;
