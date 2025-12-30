import "./style.scss";
import logo from "../../assets/logo.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">

        <div className="footer__column">
          <div className="footer__logo-block">
            <img src={logo} alt="Behoof" className="footer__logo" />
            <span className="footer__logo-text">Behoof</span>
          </div>
          <span className="footer__social-title">Мы в соц сетях</span>
          <div className="footer__socials">
            <img src="src/assets/icons/Footer/VK.svg" alt="vk" />
            <img src="src/assets/icons/Footer/Vector.svg" alt="tiktok" />
            <img src="src/assets/icons/Footer/instagram.svg" alt="instagram" />
            <img src="src/assets/icons/Footer/telegrm.svg" alt="telegram" />
            <img src="src/assets/icons/Footer/yotub.svg" alt="youtube" />
          </div>
        </div>

        <div className="footer__column">
          <h4 className="footer__title">Пользователю</h4>
          <ul className="footer__list">
            <li>Поддержка пользователей</li>
            <li>FAQ & Руководства</li>
            <li>
              <a href="/PrivacyPolicy" className="footer-link">
                Политика конфиденциальности
              </a>
            </li>

            <li>Пользовательское соглашение</li>
          </ul>
        </div>

        <div className="footer__column">
          <h4 className="footer__title">
            <a href="/Articles" className="footer__title-link">
              Популярные
            </a>
          </h4>

          <ul className="footer__list">
            <li>Смартфоны</li>
            <li>Teteras electrica</li>
            <li>Стиральные машины</li>
            <li>Телевизоры</li>
            <li>Ноутбуки</li>
          </ul>
        </div>

        <div className="footer__column">
          <h4 className="footer__title">Команда Behoof</h4>
          <ul className="footer__list">
            <li>О нас</li>
            <li>Работа у нас</li>
          </ul>
        </div>
      </div>


    </footer>
  );
};

export default Footer;
