import PropTypes from 'prop-types';

import './style-mobile.scss';

function ToggleMobile({ onClick }) {
  return (
    <div className="toggle__block">
      <label className="toggle" htmlFor="uniqueID">
        <input
          type="checkbox"
          className="toggle__input"
          id="uniqueID"
          onClick={onClick}
        />
        <span className="toggle-track">
          <span className="toggle-indicator">
            {/* check mark */}
            <span className="checkMark">
              <svg viewBox="0 0 24 24" id="ghq-svg-check" role="presentation" aria-hidden="true">
                <path d="M9.86 18a1 1 0 01-.73-.32l-4.86-5.17a1.001 1.001 0 011.46-1.37l4.12 4.39 8.41-9.2a1 1 0 111.48 1.34l-9.14 10a1 1 0 01-.73.33h-.01z" />
              </svg>
            </span>
          </span>
        </span>
        Dyslexie
      </label>
    </div>

  );
}

ToggleMobile.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default ToggleMobile;
