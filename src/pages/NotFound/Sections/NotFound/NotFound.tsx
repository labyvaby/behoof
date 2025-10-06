import { Link } from "react-router-dom";
import "./style.scss";

const NotFound = () => {
  return (
    <div className="notfound-container">
      <h1 className="notfound-title">Упс…</h1>
      <h2 className="notfound-subtitle">Страница не найдена</h2>
      <p className="notfound-text">
        Тут что-то упало и это не страшно! <br />
        Но мы всё сохранили :
      </p>
      <Link to="/" className="notfound-button">
        Перейти на главную
      </Link>
    </div>
  );
};

export default NotFound;
