import React from 'react';
import { Link } from 'react-router-dom';
import './_navbar.scss';
import logoKasa from '../../assets/logo_kasa.svg';

export default function Navbar() {
  return (
    <nav className='nav'>
      <img src={logoKasa} alt="Logo Kasa" className="header__logo" />
      <ul className='nav__links'>
        <li>
          <Link to="/" className="nav__link--item">Accueil</Link>
        </li>
        <li>
          <Link to="/about" className="nav__link--item">À propos</Link>
        </li>
      </ul>
    </nav>
  );
}