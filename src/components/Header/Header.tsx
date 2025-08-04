import React from 'react';
import Container from '../Сontainer/Container';
import logo from '../../assets/logo.svg';
import './style.scss';

export default function Header() {
  return (
    <header className="header">
      <Container>
        <img src={logo} alt="logo" />
      </Container>
    </header>
  );
}

