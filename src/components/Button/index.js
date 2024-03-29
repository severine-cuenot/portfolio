import PropTypes from 'prop-types';

import './style.scss';

function Button({
  label, btnstyle, isSubmit, icon, title, ...props
}) {
  return (
    <button
      type={isSubmit ? 'submit' : 'button'}
      className={`button button--${btnstyle}`}
      title={label}
      {...props}
    >
      <span>{label}</span>
    </button>
  );
}

Button.defaultProps = {
  btnstyle: 'plain',
  icon: null,
  isSubmit: false,
  label: '',
  title: '',
};

Button.propTypes = {
  label: PropTypes.string,
  title: PropTypes.string,
  btnstyle: PropTypes.string,
  icon: PropTypes.string,
  isSubmit: PropTypes.bool,
};

export default Button;
