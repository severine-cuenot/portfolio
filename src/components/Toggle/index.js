import PropTypes from 'prop-types';

function Toggle({ onClick }) {
  return (
    <button onClick={onClick} type="button">
      Changer la police
    </button>
  );
}

Toggle.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default Toggle;
