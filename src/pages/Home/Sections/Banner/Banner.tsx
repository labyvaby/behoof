import React from 'react';
import './style.scss'; 

const storeLinks = [
    {
        href: 'https://www.apple.com/app-store/',
        imgSrc: 'src/assets/icons/Новая папка/icons-Appl Srore.svg',
        alt: 'Apple Store'
    },
    {
        href: 'https://play.google.com/store',
        imgSrc: 'src/assets/icons/Новая папка/icons-Google.svg',
        alt: 'Google Play'
    }
];

const Banner: React.FC = () => {
    return (
        <div className="banner">
            <div className="textContainer">
                <h1 className="title">
                    <span className="redText">ЭКОНОМЬТЕ</span> СВОЕ ВРЕМЯ
                    <br />
                    И ПОЛУЧАЙТЕ <span className="redText">МАКСИМУМ</span>
                    <br />
                    ОТ ЕЖЕДНЕВНЫХ ПОКУПОК
                </h1>

                <div className="logoContainer">
                    {storeLinks.map((store, index) => (
                        <a
                            key={index}
                            href={store.href}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img src={store.imgSrc} alt={store.alt} />
                        </a>
                    ))}
                </div>
            </div>

            <div className="phoneContainer">
                <img
                    src="src/assets/images/Banner/img1.png"
                    alt="Phone 1"
                    className="phone"
                />
                <img
                    src="src/assets/images/Banner/img2.png"
                    alt="Phone 2"
                    className="phone"
                />
            </div>
        </div>
    );
};

export default Banner;
