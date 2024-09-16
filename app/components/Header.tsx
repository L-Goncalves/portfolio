
import React from 'react';
import '../styles/Header.scss';
import Dropdown from './Dropdown';

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <Dropdown />
      </nav>
    </header>
  );
};

export default Header;
