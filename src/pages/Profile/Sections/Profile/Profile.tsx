import React, { useState, useEffect } from "react";
import "./style.scss";

interface CountryData {
  country: string;
  cities: string[];
}

const Profile: React.FC = () => {
  const [countryData, setCountryData] = useState<CountryData[]>([]);
  const [selectedCountry, setSelectedCountry] = useState("Россия");
  const [selectedCity, setSelectedCity] = useState("Санкт-Петербург");
  const [openDropdown, setOpenDropdown] = useState<"country" | "city" | null>(null);

  useEffect(() => {
    fetch("http://localhost:3000/Profile")
      .then((res) => res.json())
      .then((data) => setCountryData(data))
  }, []);

  const handleCountrySelect = (country: string) => {
    setSelectedCountry(country);
    const countryInfo = countryData.find((c) => c.country === country);
    if (countryInfo) setSelectedCity(countryInfo.cities[0]);
    setOpenDropdown(null);
  };

  const handleCitySelect = (city: string) => {
    setSelectedCity(city);
    setOpenDropdown(null);
  };

  const selectedCountryData = countryData.find((c) => c.country === selectedCountry);

  return (
    <div className="profile-page">
      <div className="breadcrumbs">
        <span>Главная / Профиль</span>
      </div>

      <h1 className="profile-name">
        Степан <span className="edit-icon"></span>
      </h1>

      <div className="cards">
        {/* Настройки */}
        <div className="card">
          <h2>Настройки</h2>

          <div className="setting">
            <label className="switch">
              <input type="checkbox" />
              <span className="slider"></span>
            </label>
            <span className="label-text">Получать пуш уведомления</span>
          </div>

          <div className="setting">
            <label className="switch">
              <input type="checkbox" />
              <span className="slider"></span>
            </label>
            <span className="label-text">Получать уведомления  электронную почту</span>
          </div>

          <div className="settings">
            <ul className="settings-list">
              <li
                className="setting-item"
                onClick={() =>
                  setOpenDropdown(openDropdown === "country" ? null : "country")
                }
              >
                <img src="src/assets/icons/Profile/_testMenu.svg" alt="иконка страны" />
                <span>Страна: {selectedCountry}</span>
              </li>

              {openDropdown === "country" && (
                <ul className="dropdown">
                  {countryData.map((item) => (
                    <li
                      key={item.country}
                      className="dropdown-item"
                      onClick={() => handleCountrySelect(item.country)}
                    >
                      {item.country}
                    </li>
                  ))}
                </ul>
              )}

              <li
                className="setting-item"
                onClick={() =>
                  setOpenDropdown(openDropdown === "city" ? null : "city")
                }
              >
                <img src="src/assets/icons/Profile/_testMenu.svg" alt="иконка города" />
                <span>Город: {selectedCity}</span>
              </li>

              {openDropdown === "city" && selectedCountryData && (
                <ul className="dropdown">
                  {selectedCountryData.cities.map((city) => (
                    <li
                      key={city}
                      className="dropdown-item"
                      onClick={() => handleCitySelect(city)}
                    >
                      {city}
                    </li>
                  ))}
                </ul>
              )}
            </ul>
          </div>
        </div>

        <div className="card">
          <h2>Поддержка</h2>
          <div className="support-item">
            <img src="src/assets/icons/Profile/_testMenu.svg" alt="" /> Ваши вопросы <span className="badge">6</span>
          </div>
          <p className="support-text">
            <h3>Есть вопросы?</h3>
            Напишите нам, и мы с радостью поможем с любой проблемой.
          </p>
          <button className="support-btn">Написать в поддержку</button>
        </div>

        {/* Ваш аккаунт */}
        <div className="card">
          <h2>Ваш аккаунт</h2>
          <ul className="account-list">
            <li>Сбросить пароль</li>
            <li>Выйти</li>
            <li>Удалить аккаунт</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Profile;
