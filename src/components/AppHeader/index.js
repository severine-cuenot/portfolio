/* eslint-disable react/button-has-type */
// import { useEffect } from 'react';
// import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
// import { useDispatch } from 'react-redux';
// import ariaChange from '../../hooks/ariaChange';
// import { useState } from 'react';

import './style.scss';

function AppHeader() {
  // const dispatch = useDispatch();
  const handleClick = () => {
    let aria = document.getElementById('main-nav__burger-button').getAttribute('aria-expanded');
    if (aria === 'true') {
      aria = 'false';
    }
    else {
      aria = 'true';
    }
    document.getElementById('main-nav__burger-button').setAttribute('aria-expanded', aria);
  };

  return (
    <nav id="main-nav" role="navigation" aria-label="Menu de navigation">
      {/* <div>My Logo Here</div> */}
      {/* accessible burger menu */}
      <button
        id="main-nav__burger-button"
        onClick={handleClick}
        aria-expanded="false"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
          {/* Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. */}
          <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
        </svg>
        <span>Menu</span>
      </button>
      <ul className="">
        <li><Link to="/parcours" className="">Parcours</Link></li>
        <li><Link to="/experience" className="">Expérience</Link></li>
        <li><Link to="/realisations" className="">Réalisations</Link></li>
        <li><Link to="/contact" className="">Contact</Link></li>
        <li>Télécharger mon CV BTN</li>
      </ul>
    </nav>
  );
}

// AppHeader.propTypes = {
//   aria: PropTypes.string.isRequired,
// };

export default AppHeader;
