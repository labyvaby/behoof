import React, { useState } from "react";
import "./style.scss";

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [displayValue, setDisplayValue] = useState("");
  const [password, setPassword] = useState("");
  const [isRegister, setIsRegister] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value;
    const prevLength = displayValue.length;

    if (input.length > prevLength) {
      const newChar = input[input.length - 1];
      setPassword(password + newChar);
    } else {
      setPassword(password.slice(0, -1));
    }

    setDisplayValue("*".repeat(input.length));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !password) {
      alert("Пожалуйста, заполните все поля!");
      return;
    }

    if (isRegister) {
      const checkUser = await fetch(`http://localhost:3000/Login?email=${email}`);
      const existing = await checkUser.json();

      if (existing.length > 0) {
        alert("Такой пользователь уже существует!");
        return;
      }

      const newUser = { email, password, name: email.split("@")[0] };

      await fetch("http://localhost:3000/Login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newUser),
      });

      alert("Регистрация успешна! Теперь войдите.");
      setIsRegister(false);
      setEmail("");
      setPassword("");
      setDisplayValue("");
    } else {
      const response = await fetch(
        `http://localhost:3000/Login?email=${email}&password=${password}`
      );
      const data = await response.json();

      if (data.length > 0) {
        alert(`Добро пожаловать, ${data[0].name}!`);
      } else {
        alert("Неверный email или пароль!");
      }
    }
  };

  return (
    <div className="login-container">
      {isRegister ? (
        <div className="right-panel">
          <h2>Регистрация в Behoof</h2>
          <form onSubmit={handleSubmit}>
            <span className="tost">Электронная почта</span>
            <input
              type="email"
              placeholder="Введите почту"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <span className="tost">Пароль</span>
            <input
              id="password"
              type="text"
              placeholder="Введите пароль"
              value={displayValue}
              onChange={handleChange}
            />

            <button type="submit" className="login-btn">
              Зарегистрироваться
            </button>
          </form>
          <p className="forgot-password" onClick={() => setIsRegister(false)}>
            Уже есть аккаунт? Войти
          </p>
        </div>
      ) : (
        <div className="login-container">
          <div className="left-panel">
            <h2>Вы ещё не с нами?</h2>
            <p>
              Создайте аккаунт, чтобы получать уведомления об изменении цен и
              синхронизировать ваши товары на всех устройствах.
            </p>
            <button className="register-btn" onClick={() => setIsRegister(true)}>
              Зарегистрироваться
            </button>
          </div>

          <div className="right-panel">
            <h2>Вход в аккаунт Behoof</h2>
            <form onSubmit={handleSubmit}>
              <span className="tost">Электронная почта</span>
              <input
                type="email"
                placeholder="Введите почту"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <span className="tost">Пароль</span>
              <input
                id="password"
                type="text"
                placeholder="Введите пароль"
                value={displayValue}
                onChange={handleChange}
              />

              <div className="login-actions">
                <button type="submit" className="login-btn">
                  Войти
                </button>
                <p className="forgot-password">Восстановить пароль</p>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;
