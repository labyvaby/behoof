import React, { useState, useEffect } from "react";
import { Link } from "react-router";
import "./style.scss";

type Section = {
  id: number;
  title: string;
  content: {
    type: string;
    text?: string;
    title?: string;
    items?: string[];
  }[];
};

const PrivacyPolicy: React.FC = () => {
  const [sections, setSections] = useState<Section[]>([]);
  const [active, setActive] = useState<number>(1);

  useEffect(() => {
    fetch("http://localhost:4091/privacySections")
      .then((res) => res.json())
      .then((data) => setSections(data));
  }, []);

  return (
    <div className="privacy">
      <div className="breadcrumbs">
        <Link to="/">Главная</Link> / <span>Политика конфиденциальности</span>
      </div>

      <h1 className="page-title">Политика конфиденциальности</h1>

      <div className="privacy__content">
        {/* Sidebar */}
        <aside className="privacy__sidebar">
          <h3 className="sidebar-title">Оглавление</h3>
          <ul>
            {sections.map((sec) => (
              <li
                key={sec.id}
                className={active === sec.id ? "active" : ""}
                onClick={() => setActive(sec.id)}
              >
                {sec.title}
                {active === sec.id && (
                  <img
                    src="src/assets/icons/PrivacyPolicy/Vector.svg"
                    alt="arrow"
                    className="arrow-icon"
                  />
                )}
              </li>
            ))}
          </ul>
        </aside>

        {/* Main text */}
        <main className="privacy__text">
          {sections
            .find((sec) => sec.id === active)
            ?.content.map((block, idx) => {
              if (block.type === "paragraph") return <p key={idx}>{block.text}</p>;
              if (block.type === "note")
                return (
                  <div className="privacy__note" key={idx}>
                    <h2>{block.title}</h2>
                    <p>{block.text}</p>
                  </div>
                );
              if (block.type === "list")
                return (
                  <ol key={idx}>
                    {block.items?.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ol>
                );
              if (block.type === "email")
                return (
                  <p className="color" key={idx}>
                    {block.text}
                  </p>
                );
              return null;
            })}
        </main>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
