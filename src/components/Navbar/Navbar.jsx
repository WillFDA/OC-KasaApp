import React from 'react';
import { Link } from 'react-router-dom';
import './_navbar.scss';
import { ReactComponent as LogoKasa } from '../../assets/logo_kasa.svg';

export default function Navbar() {
  return (
    <nav className='nav'>
      <Link to="/">
        <LogoKasa className="nav__logo" />
      </Link>
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