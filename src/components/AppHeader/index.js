/* eslint-disable react/button-has-type */
import { Link } from 'react-router-dom';
import { useState } from 'react';
import PropTypes from 'prop-types';
import Button from '../Button';
import ToggleMobile from '../Toggle/toggle-mobile';
import ToggleDesktop from '../Toggle/toggle-desktop';

import './style.scss';

function AppHeader({ handleChangeFont }) {
  const [isExpanded, setExpanded] = useState(false);
  const handleClick = () => {
    setExpanded(!isExpanded);
  };

  return (
    <div>
      <nav className="main-nav" role="navigation" aria-label="Menu de navigation">
        <div className="main-nav__block">
          <div className="left__part">
            <Link to="/" title="retourner à la page d'accueil'"><img src="../../img/signature.png" alt="retourner à la page d'accueil'" className="main-nav__logo" /></Link>
            <ToggleMobile onClick={handleChangeFont} />
            {/* accessible burger menu with the precious help of W3C and Stefany Newman */}
          </div>
          <button
            className="main-nav__burger-button"
            aria-expanded={isExpanded ? 'true' : 'false'}
            onClick={handleClick}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
              {/* Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. */}
              <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
            </svg>
            <span className="main-nav__burger-button--text">Menu</span>
          </button>
        </div>
        <ul className={isExpanded ? 'main-nav__menu-expanded' : 'main-nav__menu-not-expanded'}>
          <li className="main-nav__menu-expanded--element" onClick={handleClick}><Link to="/">0. Accueil</Link></li>
          <li className="main-nav__menu-expanded--element" onClick={handleClick}><Link to="/parcours">1. Parcours</Link></li>
          <li className="main-nav__menu-expanded--element" onClick={handleClick}><Link to="/experience">2. Expérience</Link></li>
          <li className="main-nav__menu-expanded--element" onClick={handleClick}><Link to="/realisations">3. Réalisations</Link></li>
          <li className="main-nav__menu-expanded--element" onClick={handleClick}><Link to="/contact">4. Contact</Link></li>
          <li className="main-nav__menu-expanded--element" onClick={handleClick}><a href="../../img/cv_cuenot_severine.jpg">5. Télécharger mon CV</a></li>
        </ul>
      </nav>
      {/* // Navbar for desktop */}
      <nav className="main-nav-desktop" role="navigation" aria-label="Menu de navigation">
        <div className="main-nav-desktop__left-part">
          <Link to="/"><img src="../../img/signature.png" alt="retourner à la page d'accueil" className="main-nav-desktop__logo" /></Link>
          <ToggleDesktop onClick={handleChangeFont} className="main-nav-desktopToggle" />
        </div>
        <ul className="main-nav-desktop__block">
          <li className="main-nav-desktop__element"><Link to="/" className="main-nav-desktop__element-link">0. Accueil</Link></li>
          <li className="main-nav-desktop__element"><Link to="/parcours" className="main-nav-desktop__element-link">1. Parcours</Link></li>
          <li className="main-nav-desktop__element"><Link to="/experience" className="main-nav-desktop__element-link">2. Expérience</Link></li>
          <li className="main-nav-desktop__element"><Link to="/realisations" className="main-nav-desktop__element-link">3. Réalisations</Link></li>
          <li className="main-nav-desktop__element"><Link to="/contact" className="main-nav-desktop__element-link">4. Contact</Link></li>
          <li><a href="../../img/cv_cuenot_severine.jpg" target="_blank"><Button label="5. Télécharger mon CV" className="button__CV" type="button" /></a></li>
        </ul>
      </nav>

    </div>
  );
}

AppHeader.propTypes = {
  handleChangeFont: PropTypes.func.isRequired,
};

export default AppHeader;
