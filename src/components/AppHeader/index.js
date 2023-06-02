/* eslint-disable react/button-has-type */
import { Link } from 'react-router-dom';
import { useState } from 'react';

import './style.scss';

function AppHeader() {
  const [isExpanded, setExpanded] = useState(false);
  const handleClick = () => {
    setExpanded(!isExpanded);
  };

  return (
    <div>
      <nav className="main-nav" role="navigation" aria-label="Menu de navigation">
        <div className="main-nav__block">
          <Link to="/"><img src="../../img/signature.png" alt="retourner à la page d'accueil'" className="main-nav__logo" /></Link>
          {/* accessible burger menu with the precious help of W3C and Stefany Newman */}
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
          <li className="main-nav__menu-expanded--element" onClick={handleClick}><Link to="/parcours">Parcours</Link></li>
          <li className="main-nav__menu-expanded--element" onClick={handleClick}><Link to="/experience">Expérience</Link></li>
          <li className="main-nav__menu-expanded--element" onClick={handleClick}><Link to="/realisations">Réalisations</Link></li>
          <li className="main-nav__menu-expanded--element" onClick={handleClick}><Link to="/contact">Contact</Link></li>
          <li className="main-nav__menu-expanded--element" onClick={handleClick}>Télécharger mon CV BTN</li>
        </ul>
      </nav>
      {/* // Navbar for desktop */}
      <nav className="main-nav-desktop" role="navigation" aria-label="Menu de navigation">
        <Link to="/"><img src="../../img/signature.png" alt="retourner à la page d'accueil'" className="main-nav-desktop__logo" /></Link>
        <ul className="main-nav-desktop__block">
          <li><Link to="/parcours">Parcours</Link></li>
          <li><Link to="/experience">Expérience</Link></li>
          <li><Link to="/realisations">Réalisations</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li>Télécharger mon CV BTN</li>
        </ul>
      </nav>

    </div>
  );
}

// AppHeader.propTypes = {
//   aria: PropTypes.string.isRequired,
// };

export default AppHeader;
