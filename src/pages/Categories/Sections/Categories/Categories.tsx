import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './style.scss';

type Card = {
    title: string;
    cols: string[][];
};

type Section = {
    title: string;
    cards: Card[];
};

const Categories: React.FC = () => {
    const [data, setData] = useState<Section[]>([]);
    const [] = useState(true);

    useEffect(() => {
        fetch('http://localhost:4091/categories')
            .then((res) => res.json())
            .then((json) => {
                setData(json.categories ?? json);
                (false);
            })
    }, []);

    return (
        <div className="categories-page">
            <nav className="breadcrumbs">
                <Link to="/">Главная</Link> / <span>Категории</span>
            </nav>

            <h1 className="page-title">Категории</h1>

            {data.map((section) => (
                <section key={section.title} className="category-section">
                    <header className="section-header">
                        <div className="section-icon" aria-hidden>
                            <img src="src/assets/icons/Categories/icon.svg" alt="" />
                        </div>
                        <h2 className="section-title">{section.title}</h2>
                    </header>

                    <div className="cards-grid">
                        {section.cards.map((card, idx) => (
                            <article className="card" key={card.title + idx}>
                                <h3 className="card-title">{card.title}</h3>
                                <div className="card-columns">
                                    {card.cols.map((col, ci) => (
                                        <ul key={ci} className="col-list">
                                            {col.map((item, i) => (
                                                <li key={i} className={item === 'Apple' ? 'tag-new' : ''}>
                                                    <a href="#">{item}</a>
                                                </li>
                                            ))}
                                        </ul>
                                    ))}
                                </div>
                            </article>
                        ))}
                    </div>
                </section>
            ))}
        </div>
    );
};

export default Categories;
