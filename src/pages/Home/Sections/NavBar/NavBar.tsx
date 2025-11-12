import React from "react";
import { useNavigate } from "react-router-dom";
import { Home, ShoppingCart, Heart, BarChart2, User } from "lucide-react";
import "./style.scss";

type NavItem = {
  key: string;
  label: string;
  icon: React.ReactNode;
  path: string; 
  badge?: number;
};

const items: NavItem[] = [
  { key: "home", label: "Главная", icon: <Home />, path: "/" },
  { key: "catalog", label: "Каталог", icon: <ShoppingCart />, path: "/catalog" },
  { key: "favorites", label: "Избранное", icon: <Heart />, path: "/favorites", badge: 1 },
  { key: "compare", label: "Сравнения", icon: <BarChart2 />, path: "/compare" },
  { key: "profile", label: "Профиль", icon: <User />, path: "/profile" },
];

const NavBar: React.FC = () => {
  const [active, setActive] = React.useState("home");
  const navigate = useNavigate();

  const handleNavigation = (item: NavItem) => {
    setActive(item.key);
    navigate(item.path);
  };

  return (
    <nav className="nav-bar">
      {items.map((item) => (
        <button
          key={item.key}
          className={`nav-bar__item ${active === item.key ? "active" : ""}`}
          onClick={() => handleNavigation(item)}
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
