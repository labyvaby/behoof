import React from "react";
import { Home, ShoppingCart, Heart, BarChart2, User } from "lucide-react";
import "./style.scss";

type NavItem = {
  key: string;
  label: string;
  icon: React.ReactNode;
  badge?: number;
};

const items: NavItem[] = [
  { key: "home", label: "Главная", icon: <Home /> },
  { key: "catalog", label: "Каталог", icon: <ShoppingCart /> },
  { key: "favorites", label: "Избранное", icon: <Heart />, badge: 1 },
  { key: "compare", label: "Сравнения", icon: <BarChart2 /> },
  { key: "profile", label: "Профиль", icon: <User /> },
];

const NavBar: React.FC = () => {
  const [active, setActive] = React.useState("home");

  return (
    <nav className="nav-bar">
      {items.map((item) => (
        <button
          key={item.key}
          className={`nav-bar__item ${active === item.key ? "active" : ""}`}
          onClick={() => setActive(item.key)}
        >
          <div className="nav-bar__icon">
            {item.icon}
            {item.badge && <span className="nav-bar__badge">{item.badge}</span>}
          </div>
          <span className="nav-bar__label">{item.label}</span>
        </button>
      ))}
    </nav>
  );
};

export default NavBar;
