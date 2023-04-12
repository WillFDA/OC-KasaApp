import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './_navbar.scss';
import { ReactComponent as LogoKasa } from '../../assets/logo_kasa.svg';

export default function Navbar() {
  
  const navLocation = useLocation();
  const cheminActuel = navLocation.pathname;
  return (
    <header className='header'>
      <Link to="/">
        <LogoKasa className="header__logo" />
      </Link>
      <nav className='nav__links'>
        <li>
        <Link to="/" className={`nav__link--item ${cheminActuel === '/' ? 'active' : ''}`}>Accueil</Link>
        </li>
        <li>
        <Link to="/about" className={`nav__link--item ${cheminActuel === '/about' ? 'active' : ''}`}>A propos</Link>
        </li>
      </nav>
    </header>
  );
}